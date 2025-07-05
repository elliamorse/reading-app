import { getDb } from '../../db'
export default defineEventHandler(async (event) => {
  const { id } = event.context.params || {}
  if (!id) return {success: false, error: 'Missing book ID'}
  const db = await getDb()
  await db.run('DELETE FROM books WHERE id = ?', [id])
  return { success: true }
})