import { getDb } from '../../db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const db = await getDb()
  const result = await db.run('INSERT INTO books (title, author) VALUES (?, ?)', [body.title, body.author])
  console.log('Added book:', body, 'Result:', result)
  return { id: result.lastID }
})