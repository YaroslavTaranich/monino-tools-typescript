interface IFormValues {
  tool?: string
  name: string
  phone: string
  date?: string
  days?: number
  delivery?: string
  address?: string
  price?: number
  pricePerDay?: number
  zalog?: number
}

const translateMap = {
  tool: '<b>Инструмент: </b>',
  name: '<b>Имя: </b>',
  phone: '<b>Номер телефона: </b>',
  date: '<b>Дата начала аренды: </b>',
  days: '<b>Дней аренды: </b>',
  delivery: '<b>Доставка: </b>',
  address: '<b>Адресс доставки: </b>',
  price: '<b>Стоимость аренды: </b>',
  pricePerDay: '<b>Цена в день: </b>',
  zalog: '<b>Сумма залога: </b>',
}

export function generateStringMessage(formValues: IFormValues, title = 'Заявка с сайта'): string {
  const keys = Object.keys(formValues)
  const htmlTitle = `<b>${title}</b>%0A`
  return (
    htmlTitle +
    keys
      .map((key) => {
        switch (key) {
          case 'phone':
            return `${translateMap[key as keyof IFormValues]} <a href="tel:${formValues[key as keyof IFormValues]}">${
              formValues[key as keyof IFormValues]
            }</a>`
          default:
            return `${translateMap[key as keyof IFormValues]} ${formValues[key as keyof IFormValues]}`
        }
      })
      .join('%0A')
      .replaceAll('/n', '')
  )
}
