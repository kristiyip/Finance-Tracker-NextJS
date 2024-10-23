'use client';

import { useActionState, useState, useEffect } from "react"
import { createTransaction, State } from "@/app/lib/actions"

export default function CreateTransactionForm() {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  //TODO: Set initState to type State
  const initState: any = { message: null, errors: {}}
  const [state, formAction] = useActionState(createTransaction, initState)

  return (
    <form>
      <div>
        <div>
          <label>Title</label>
          <input 
            className="text-black"
            value={title} 
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            className="text-black"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            className="text-black"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
      </div>
    </form>
  )
}