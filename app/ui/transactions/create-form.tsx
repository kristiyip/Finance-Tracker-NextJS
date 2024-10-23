'use client';

import { useActionState, useState, useEffect } from "react"
import { createTransaction, State } from "@/app/lib/actions"
import { Button } from "../button";

export default function CreateTransactionForm() {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  //TODO: Set initState to type State
  const initState: any = { message: null, errors: {}}
  const [state, formAction] = useActionState(createTransaction, initState)

  return (
    <form action={formAction}>
      <div>
        <div>
          <label>Title</label>
          <input 
            id="title"
            name="title"
            className="text-black"
            value={title} 
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            id="amount"
            name="amount"
            className="text-black"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            id="description"
            name="description"
            className="text-black"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
      </div>
      <Button type="submit">Add Transaction</Button>
    </form>
  )
}