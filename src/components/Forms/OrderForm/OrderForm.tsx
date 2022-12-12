import { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useFieldArray, useForm, useWatch } from 'react-hook-form'

import { calculatePrice } from '../../../utils/calculatePrice'
import { Tool } from '../../../models/tools'
import InputFancyLabel from '../../UI/InputFancyLabel/InputFancyLabel'
import InputInline from '../../UI/InputInline/InputInline'
import Button from '../../UI/Button/Button'
import RadioInput from '../../UI/RadioInput/RadioInput'
import TextareaFancyLabel from '../../UI/InputFancyLabel/TextAreaFancyLabel'
import Rub from '../../UI/Rub/Rub'
import { generateStringMessage } from '../../../utils/generateMessageString'
import sendMessage from '../../../services/telegram/telegramApi'
import FormLoader from '../FormLoader/FromLoader'
import ErrorMessage from '../Message/ErrorMessage'
import SuccessMessage from '../Message/SuccessMessage'

import { schema } from './schema'
import styles from './OrderForm.module.scss'

const resolver = yupResolver(schema)

const defaultValues = {
  name: 'oleg',
  phone: '',
  date: new Date().toISOString().split('T')[0],
  days: 1,
  delivery: 'no',
  address: [],
}

interface IFormInputs {
  name: string
  phone: string
  date: string
  days: number
  delivery: string
  address: { value: string }[]
}

interface IMessageValues {
  tool: string
  name: string
  phone: string
  date: string
  days: number
  delivery: string
  address?: string
  price: number
  pricePerDay: number
  zalog: number
}

const getMessageValues = (formValues: IFormInputs, toolName: string, price: number, zalog: number): IMessageValues => {
  const result: IMessageValues = {
    tool: toolName,
    name: formValues.name,
    phone: formValues.phone,
    date: new Date(formValues.date).toISOString().split('T')[0],
    days: formValues.days,
    delivery: formValues.delivery,
    price: calculatePrice(price, formValues.days) * formValues.days,
    pricePerDay: calculatePrice(price, formValues.days),
    zalog: calculatePrice(zalog, formValues.days),
  }

  if (result.delivery === 'yes') {
    result.address = formValues.address[0].value
  }

  return result
}

interface IOrderFormProps {
  tool: Tool
}

function OrderForm({ tool }: IOrderFormProps) {
  const [fetchStatus, setFetchStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle')

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver, defaultValues })

  const { fields, append, remove } = useFieldArray({ control, name: 'address' })

  const delivery = useWatch({ control, name: 'delivery' })
  const days = useWatch({ control, name: 'days' })

  const onSubmit = (data: IFormInputs) => {
    const message = generateStringMessage(getMessageValues(data, tool.toolName, tool.price, tool.zalog))
    setFetchStatus('loading')
    sendMessage(message)
      .then(() => setFetchStatus('success'))
      .catch(() => setFetchStatus('error'))
  }

  useEffect(() => {
    if (delivery === 'yes' && fields.length === 0) {
      append({ value: '' })
    } else {
      remove(0)
    }
  }, [delivery])

  if (fetchStatus === 'loading') return <FormLoader />

  if (fetchStatus === 'error') return <ErrorMessage />

  if (fetchStatus === 'success') return <SuccessMessage />

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={styles.form__title}>Взять в аренду {tool.toolName}</h3>
      <Controller
        name="name"
        control={control}
        render={({ field }) => <InputFancyLabel label="Ваше имя" error={errors.name?.message} {...field} />}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field }) => <InputFancyLabel label="Ваш номер телефона" error={errors.phone?.message} {...field} />}
      />
      <Controller
        name="date"
        control={control}
        render={({ field }) => (
          <InputInline label="Дата начала аренды" type="date" error={errors.date?.message} {...field} />
        )}
      />
      <Controller
        name="days"
        control={control}
        render={({ field }) => (
          <InputInline label="Дней аренды" type="number" error={errors.days?.message} {...field} />
        )}
      />

      <div className={styles.radio}>
        <Controller
          name="delivery"
          control={control}
          render={({ field }) => <RadioInput label="Самовывоз" {...field} value="no" defaultChecked />}
          defaultValue="no"
        />
        <Controller
          name="delivery"
          control={control}
          render={({ field }) => <RadioInput label="Доставка" {...field} value="yes" />}
        />
      </div>
      {fields.map((address, index) => (
        <Controller
          key={address.id}
          name={`address.${index}.value`}
          control={control}
          render={({ field }) => <TextareaFancyLabel label="Адресс доставки" {...field} />}
        />
      ))}
      {delivery === 'yes' && <p className={styles.notice}>Стоимость доставки рассчитывается отдельно</p>}
      <div className={styles.price}>
        <div className={styles.price__label}>Стоимость аренды:</div>
        <div className={styles.price__number}>
          {calculatePrice(tool.price, days) * days}
          <Rub />
        </div>
      </div>
      <div className={styles.price}>
        <div className={styles.price__label}>Сумма залога:</div>
        <div className={styles.price__number}>
          {calculatePrice(tool.zalog, days)}
          <Rub />
        </div>
      </div>

      <Button submit style={{ margin: 20, width: '90%' }}>
        Отправить
      </Button>
    </form>
  )
}

export default OrderForm
