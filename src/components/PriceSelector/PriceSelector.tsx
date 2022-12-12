import { useState } from 'react'

import { calculatePrice } from '../../utils/calculatePrice'
import Rub from '../UI/Rub/Rub'

import styles from './PriceSelector.module.scss'
import PriceSelectorButton from './PriceSelectorButton'

const buttons = [1, 3, 7, 21]

interface PriceSelectorProps {
  price: number
  zalog: number
}

function PriceSelector({ price, zalog }: PriceSelectorProps) {
  const [selected, setSelected] = useState(buttons[0])

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Тарифы на аренду</h4>
      <div className={styles.tarif}>
        <p className={styles.tarif__title}>Дней аренды</p>
        <div className={styles.buttons}>
          {buttons.map((btn) => (
            <PriceSelectorButton key={btn} days={btn} isActive={btn === selected} onClick={() => setSelected(btn)} />
          ))}
        </div>
      </div>
      <div className={styles.price}>
        <span className={styles.price__item}>{calculatePrice(price, selected)} </span>
        <Rub />
        <span className={styles.price__item}> / День</span>
      </div>
      <div className={styles.zalog}>
        <span className={styles.zalog__item}>Залог: {calculatePrice(zalog, selected)} </span>
        <Rub />
      </div>
    </div>
  )
}

export default PriceSelector
