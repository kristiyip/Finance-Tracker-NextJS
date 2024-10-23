import CreateTransactionForm from "@/app/ui/transactions/create-form"
import Transactions from "@/app/ui/transactions/transactions"

export default function Page() {
  return (
    <div className="w-full">
      <div>
        <CreateTransactionForm />
      </div>
      <div>
        <Transactions />
      </div>
    </div>
  )
}