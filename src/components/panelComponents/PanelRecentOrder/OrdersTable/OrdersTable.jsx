import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "1",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
    price: "450,000",
    user: "093635738",
    payWay: "نقدی",
  },
  {
    invoice: "2",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
    price: "450,000",
    user: "093635738",
    payWay: "نقدی",
  },
  {
    invoice: "3",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
    price: "450,000",
    user: "093635738",
    payWay: "ولت",
  },
  {
    invoice: "4",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
    price: "450,000",
    user: "093635738",
    payWay: "نقدی",
  },
  {
    invoice: "5",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
    price: "450,000",
    user: "093635738",
    payWay: "ولت",
  },
  {
    invoice: "6",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
    price: "450,000",
    user: "093635738",
    payWay: "ولت",
  },
];

export default function TableDemo() {
  return (
    <div className="rounded-lg">
      <Table className="overflow-scroll lg:overflow-hidden border dark:border-gray-600 rounded-2xl">
        <TableHeader className="bg-white text-black dark:bg-[#1B2631] dark:text-white">
          <TableRow className="font-Kalame text-[0.9rem] border-gray-300 dark:border-gray-600 *:p-4 lg:text-[1rem]">
            <TableHead className="text-[1rem] w-[150px] text-right">ردیف</TableHead>
            <TableHead className="text-right">نام</TableHead>
            <TableHead className="text-right">شناسه</TableHead>
            <TableHead className="text-right">تاریخ</TableHead>
            <TableHead className="text-right">پرداختی</TableHead>
            <TableHead className="text-right">کاربر</TableHead>
            <TableHead className="text-right">پرداخت</TableHead>
            <TableHead className="text-center">بیشتر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white text-black font-Kalame text-right dark:bg-[#1B2631] dark:text-white">
          {invoices.map((invoice) => (
            <TableRow className="border border-gray-300 dark:border-gray-600" key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell className="text-right">
                {invoice.paymentStatus}
              </TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
              <TableCell className="text-right">{invoice.price}</TableCell>
              <TableCell className="text-right">{invoice.user}</TableCell>
              <TableCell className="text-right">
                {
                    invoice.payWay === "نقدی" ? (
                        <span className="font-bold bg-blue-500 text-blue-900 rounded-lg px-5">{invoice.payWay}</span>
                    ) : (
                        <span className="font-bold bg-green-500 text-green-900 rounded-lg px-5">{invoice.payWay}</span>
                    )
                }
              </TableCell>
              <TableCell className="text-center">
                <button className="bg-blue-400 p-1 w-7 h-7 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-blue-700"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg></button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
