import { getDb } from '../../db'

export default defineEventHandler(async (event) => {
  const db = await getDb()
  const books = await db.all('SELECT * FROM books')
  return books
})