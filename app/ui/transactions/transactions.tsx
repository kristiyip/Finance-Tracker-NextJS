import { fetchAllTransactions } from "@/app/lib/data";

const HEADERS = ['amount', 'title', 'description']

export default async function Transactions() {
  const transactions = await fetchAllTransactions()

  console.log(transactions)
  return (
    <div>
      <table>
        <thead>
          <tr>
          {HEADERS.map((header, i) => (
            <th>{header}</th>
          ))}
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction, i) => (
            <tr key={i}>
              <td>{transaction.amount}</td>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}