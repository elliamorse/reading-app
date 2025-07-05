import { getDb } from '../../db' 
import { readBody, createError } from 'h3' 

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id
    if (!id) {
        throw createError({ statusCode: 400, message: 'Missing book ID' })
  }

    const { is_read } = await readBody(event)
    const db = await getDb()
    await db.run('UPDATE books SET is_read = ? WHERE id = ?', [is_read, id])
    return { success: true }
})
