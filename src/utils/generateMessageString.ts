interface IFormValues {
  name: string
  phone: string
}

const translateMap = {
  name: '<b>Имя: </b>',
  phone: '<b>Номер телефона: </b>',
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
  )
}
