import { CategoryResponse } from '../models/category'
import { ToolRespone } from '../models/tools'

import category from './categoryDB.json'
import tools from './toolsDB.json'

const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

export async function getCategory() {
  await delay(1122)
  const random = Math.floor(Math.random() * 100)
  if (random === 13) {
    throw new Error('error')
  }
  return category as CategoryResponse
}

export async function getTools() {
  await delay(111)

  const random = Math.floor(Math.random() * 100)
  if (random === 13) {
    throw new Error('error')
  }
  return tools as ToolRespone
}
