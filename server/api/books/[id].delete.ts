import { getDb } from '../../db'


export default defineEventHandler(async (event) => {
    const idParam = event.context.params?.id
    const id = Number(idParam)
    const db = await getDb()
    
    const result = await db.run('DELETE FROM books WHERE id = ?', [id])
    const rowsDeleted = result.changes ?? 0
    return { success: rowsDeleted > 0 } //we define if the deletion was succcessful if more than 0 rows affected
})