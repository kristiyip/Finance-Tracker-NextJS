import { fetchAllTransactions } from "@/app/lib/data";
import { convertToDollarAmountWithCents } from "../helpers";

const HEADERS = ['date', 'amount', 'title', 'description']

export default async function Transactions() {
  const transactions = await fetchAllTransactions()

  return (
    <div>
      <table>
        <thead>
          <tr key='headers' className="grid grid-cols-4 ">
          {HEADERS.map((header, i) => (
            <th key={i}>{header}</th>
          ))}
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction, i) => (
            <tr key={i} className="grid grid-cols-5 gap-6">
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
              <td>{convertToDollarAmountWithCents(transaction.amount)}</td>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}