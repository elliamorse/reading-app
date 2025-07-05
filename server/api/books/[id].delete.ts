import { getDb } from '../../db'


export default defineEventHandler(async (event) => {
    const idParam = event.context.params?.id
    const id = Number(idParam)

    if (!id || isNaN(id)) {
        return { success: false, error: 'Missing or invalid book ID' }
  }

    const db = await getDb()
    
    const result = await db.run('DELETE FROM books WHERE id = ?', [id])
    const rowsDeleted = result.changes ?? 0
    return { success: rowsDeleted > 0 }
})