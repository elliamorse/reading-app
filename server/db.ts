import sqlite3 from 'sqlite3'
import { open, Database } from 'sqlite'

let dbPromise: Promise<Database<sqlite3.Database, sqlite3.Statement>> | null = null

export async function getDb(): Promise<Database<sqlite3.Database, sqlite3.Statement>> {
  if (!dbPromise) {
    dbPromise = (async () => {
      const db = await open({
        filename: 'books.db',
        driver: sqlite3.Database,
      })
      await db.exec(`
        CREATE TABLE IF NOT EXISTS books (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          author TEXT NOT NULL,
          is_read INTEGER NOT NULL DEFAULT 0
        )
      `)
      return db
    })()
  }
  return dbPromise
}