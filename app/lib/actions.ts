'use server'

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { v4 as uuidv4 } from 'uuid';

const TransactionSchema = z.object({
  id: z.string(),
  title: z.string({
    invalid_type_error: 'Please type in a title'
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0 '}),
  description: z.string({
    invalid_type_error: 'Please type in a description'
  }),
  date: z.string()
})

const CreateTransaction = TransactionSchema.omit({ id: true, date: true })

export type State = {
  errors?: {
    title?: string[],
    amount?: string[],
    description?: string[]
  },
  message?: string | null
}

export async function createTransaction(prevState: State, formData: FormData) {
  const validateFields = CreateTransaction.safeParse({
    title: formData.get('title'),
    amount: formData.get('amount'),
    description: formData.get('description')
  })

  if(!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to create transaction.'
    }
  }

  const { title, amount, description } = validateFields.data;
  const amountInCents = amount * 100
  const date = new Date().toISOString().split('T')[0]

  try {
    await sql`
      INSERT INTO transactions (id, title, amount, description, date)
      VALUES (${uuidv4()}, ${title}, ${amountInCents}, ${description}, ${date})
    `
  } catch(err) {
    return {
      message: 'Database Error: Failed to create transaction',
      err
    }
  }
}