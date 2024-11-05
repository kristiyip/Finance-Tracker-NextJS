import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { fetchAllTransactions } from "@/app/lib/data";
import { convertToDollarAmountWithCents } from "../helpers";

const HEADERS = ['Date', 'Title', 'Amount', 'Description']

export default async function Transactions() {
  const transactions = await fetchAllTransactions()

  return (
    <div className="w-full">
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {HEADERS.map((header, i) => (
                <TableCell sx={{ color: 'white' }}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions?.map((transaction, i) => (
              <TableRow key={i}>
                <TableCell sx={{ color: 'white' }}>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                <TableCell sx={{ color: 'white' }}>{transaction.title}</TableCell>
                <TableCell sx={{ color: 'white' }}>{convertToDollarAmountWithCents(transaction.amount)}</TableCell>
                <TableCell sx={{ color: 'white' }}>{transaction.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}