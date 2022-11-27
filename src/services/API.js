async function getCategory() {
  try {
    const response = await fetch('http://localhost:3000/CategoryMT.json')
    const res = await response.json()

    return res
  } catch {
    throw new Error('Ошибка')
  }
}

async function getDb() {
  try {
    const response = await fetch('http://localhost:3000/toolsDB.json')
    const res = await response.json()

    return res
  } catch {
    throw new Error('Ошибка')
  }
}

export { getCategory, getDb }
