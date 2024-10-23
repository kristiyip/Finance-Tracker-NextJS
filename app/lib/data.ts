import { sql } from '@vercel/postgres';
import {
  Transaction
} from './types'

export const fetchAllTransactions = async () => {
  try {
    const data = await sql<Transaction>`SELECT * FROM transactions`
    return data.rows
  } catch (err) {
    console.error(`Failed to fetch all Transactions: ${err}`)
  }
}