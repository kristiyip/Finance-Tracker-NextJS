import CreateTransactionForm from "@/app/ui/transactions/create-transaction-form"
import Transactions from "@/app/ui/transactions/transactions"

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col align-middle justify-between p-20">
      <div className="w-full">
        <CreateTransactionForm />
      </div>
      <div className="w-full border mb-10 h-80 overflow-y-auto">
        <Transactions />
      </div>
    </div>
  )
}