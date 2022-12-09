interface IInputValue {
  value: string
  label: string
}

interface IConfig {
  bot: string
  chatid: string
}

async function getBotConfig() {
  const url = 'https://monino-tools.ru/API/'
  try {
    const response = await fetch(`${url}telegram.json`)
    const res = await response.json()

    return res as IConfig
  } catch {
    throw new Error('Ошибка, невозможно получить категории')
  }
}

export default async function sendMessage(body: IInputValue[]) {
  // eslint-disable-next-line no-return-assign, no-param-reassign
  const message = body.reduce((acc, string) => (acc += `<p><b>${string.label}</b> ${string.value}</p>`), '')

  try {
    const config = await getBotConfig()

    const response = await fetch(
      `https://api.telegram.org/${config.bot}/sendMessage?chat_id=${config.chatid}&parse_mode=html&text=${message}`,
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
      }
    )
    if (response.ok) return true
    return false
  } catch (error) {
    throw new Error('Не получилось отправить сообщение')
  }
}
