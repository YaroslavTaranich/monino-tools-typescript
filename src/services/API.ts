import { CategoryResponse } from '../models/category'
import { ToolRespone } from '../models/tools'

const url = 'https://monino-tools.ru/API/'

async function getCategory() {
  try {
    const response = await fetch(`${url}category.json`)
    const res = await response.json()

    return res as CategoryResponse
  } catch {
    throw new Error('Ошибка, невозможно получить категории')
  }
}

async function getTools() {
  try {
    const response = await fetch(`${url}tools.json`)
    const res = await response.json()

    return res as ToolRespone
  } catch {
    throw new Error('Ошибка, невозможно получить инструменты')
  }
}

export { getCategory, getTools }
