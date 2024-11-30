import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { NavLink } from "react-router-dom";

  const invoices = [
    {
      id:"1",
      row: "1",
      userName: "Ali",
      email: "ali@gmail.com",
      phone: "0976778987",
      wallet: "66,000",
      date: "1403/6/5",
      role : "کاربر",
    },
    {
      id:"2",
      row: "2",
      userName: "Hossein",
      email: "ali@gmail.com",
      phone: "0976778987",
      wallet: "0",
      date: "1403/6/5",
      role : "مدیر",
    },
    {
      id:"3",
      row: "3",
      userName: "Ali",
      email: "ali@gmail.com",
      phone: "0976778987",
      wallet: "0",
      date: "1403/6/5",
      role : "کاربر",
      },
      {
       id:"4",
       row: "4",
       userName: "Mammad",
       email: "ali@gmail.com",
       phone: "0976778987",
       wallet: "89,900",
       date: "1403/6/5",
       role : "کاربر",
      },
      {
       id:"5",
       row: "5",
       userName: "Ali",
       email: "ali@gmail.com",
       phone: "0976778987",
       wallet: "235,000",
       date: "1403/6/5",
       role : "مدیر",
      }, 
      {
       id:"6",
       row: "6",
       userName: "Hassan",
       email: "ali@gmail.com",
       phone: "0976778987",
       wallet: "235,000",
       date: "1403/6/5",
       role : "مدیر",
     },  
  ];
  
  export default function TicketsTable() {
  
    return (
      <div className="rounded-lg">
         <Table className="overflow-scroll lg:overflow-hidden border dark:border-gray-600 rounded-2xl">
          <TableHeader className="bg-white text-black dark:bg-[#1B2631] dark:text-white">
            <TableRow className="font-Kalame text-[0.9rem] border-gray-300 dark:border-gray-600 *:p-4 lg:text-[1rem]">
              <TableHead className="text-[1rem] w-[150px] text-right">
                ردیف
              </TableHead>
              <TableHead className="text-right">کاربر</TableHead>
              <TableHead className="text-right">ایمیل</TableHead>
              <TableHead className="text-right">شماره</TableHead>
              <TableHead className="text-right">ولت</TableHead>
              <TableHead className="text-right">تاریخ</TableHead>
              <TableHead className="text-right">نقش</TableHead>
              <TableHead className="text-center">بیشتر</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white text-black font-Kalame text-right dark:bg-[#1B2631] dark:text-white">
            {invoices.map((invoice) => (
              <TableRow
                className="border border-gray-300 dark:border-gray-600"
                key={invoice.row}
              >
                <TableCell className="font-medium">{invoice.row}</TableCell>
                <TableCell className="text-right">
                  {invoice.userName}
                </TableCell>
                <TableCell>{invoice.email}</TableCell>
                <TableCell className="text-right w-[170px]">
                  {invoice.phone}
                </TableCell>
                <TableCell className="text-center w-[200px]">
                 {invoice.wallet === "0" ? (
                     <div className="text-center bg-red-500 rounded-lg w-[8rem] px-1 text-white font-bold">بدون موجودی</div>
                  ):(
                     <div className="text-center rounded-lg px-1 w-[8rem] text-green-600 font-bold">{invoice.wallet}</div>
                  )}
                </TableCell>
                <TableCell className="text-right">
                 {invoice.date}
                </TableCell>
                <TableCell className="text-right w-[70px]">
                 {invoice.role === "کاربر" ? (
                    <span className="font-Kalame text-green-400">کاربر</span>
                 ) : (
                    <span className="font-Kalame text-red-400">مدیر</span>
                 )}
                </TableCell>
                <TableCell className="text-right flex items-center justify-center gap-1">
                   <NavLink activate to={`/panel/users/${invoice.id}`} className="bg-blue-400 p-1 w-7 h-7 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-blue-700"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
                   </NavLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
         </Table>
      </div>
    );
  }
  