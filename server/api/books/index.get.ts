import { getDb } from '../../db'

export default defineEventHandler(async () => {
  const db = await getDb()
  return await db.all('SELECT * FROM books')
})