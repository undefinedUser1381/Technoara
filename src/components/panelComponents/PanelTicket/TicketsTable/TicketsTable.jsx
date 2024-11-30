import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TicketsModal from "../../TicketsModal/TicketsModal";
import { useState } from "react";
import TicketContext from "@/context/TicketModalDetails/TicketModalDetails";

const invoices = [
  {
    invoice: "1",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
    date: "1403/2/3",
    user: "093635738",
    section : "مالی",
    staus : "بدون پاسخ",
    follow : false,
    payWay: "نقدی",
  },
  {
    invoice: "2",
    paymentStatus: "Pending",
    date: "1403/2/3",
    paymentMethod: "PayPal",
    price: "450,000",
    user: "093635738",
    section : "مالی",
    staus : "با پاسخ",
    follow : true,
    payWay: "نقدی",
  },
  {
    invoice: "3",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
    date: "1403/2/3",
    user: "093635738",
    section : "مدیریت",
    staus : "بدون پاسخ",
    follow : false,
    payWay: "ولت",
  },
  {
    invoice: "4",
    paymentStatus: "Paid",
    date: "1403/2/3",
    paymentMethod: "Credit Card",
    price: "450,000",
    section : "مدیریت",
    staus : "با پاسخ",
    follow : true,
    user: "093635738",
    payWay: "نقدی",
  },
  {
    invoice: "5",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
    date: "1403/2/3",
    user: "093635738",
    section : "مالی",
    staus : "با پاسخ",
    follow : true,
    payWay: "ولت",
  },
  {
    invoice: "6",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
    date: "1403/2/3",
    user: "093635738",
    section : "مالی",
    staus : "با پاسخ",
    follow : true,
    payWay: "ولت",
  },
];

export default function TicketsTable() {

  const [isOpenModal , setIsOpenModal] = useState(false);

  const openTicketModal = () => {
       setIsOpenModal(true);
  }

  const closeTicketModal = () => {
    setIsOpenModal(false);
  } 

  return (
   <TicketContext.Provider value={{isOpenModal,openTicketModal,closeTicketModal}}>
      <div className="rounded-lg">
      <Table className="overflow-scroll lg:overflow-hidden border dark:border-gray-600 rounded-2xl">
        <TableHeader className="bg-white text-black dark:bg-[#1B2631] dark:text-white">
          <TableRow className="font-Kalame text-[0.9rem] border-gray-300 dark:border-gray-600 *:p-4 lg:text-[1rem]">
            <TableHead className="text-[1rem] w-[150px] text-right">
              ردیف
            </TableHead>
            <TableHead className="text-right">کاربر</TableHead>
            <TableHead className="text-right">شناسه</TableHead>
            <TableHead className="text-right">تاریخ</TableHead>
            <TableHead className="text-right">بخش</TableHead>
            <TableHead className="text-right">وضعیت</TableHead>
            <TableHead className="text-right">پیگیری</TableHead>
            <TableHead className="text-center">بیشتر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white text-black font-Kalame text-right dark:bg-[#1B2631] dark:text-white">
          {invoices.map((invoice) => (
            <TableRow
              className="border border-gray-300 dark:border-gray-600"
              key={invoice.invoice}
            >
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell className="text-right">
                {invoice.paymentStatus}
              </TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.date}
              </TableCell>
              <TableCell className="text-right">
               <div className="bg-blue-500 text-center rounded-lg px-1 w-[70px] text-blue-800 font-bold">
                {invoice.section}
               </div>
              </TableCell>
              <TableCell className="text-right">
               {invoice.staus === "با پاسخ" ? (
                 <div className="bg-green-400 text-green-800 rounded-lg px-1 text-center font-bold w-[70px]">{invoice.staus}</div>
               ) : ( 
                 <div className="bg-red-400 text-red-800 rounded-lg px-1 text-center font-bold w-[70px]">{invoice.staus}</div>
               )}
              </TableCell>
              <TableCell className="text-right w-[70px]">
              {invoice.follow ? (
                 <div className="bg-green-400 text-green-300 w-[30px] p-1 text-center flex items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-700"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
                 </div>
               ) : ( 
                 <div className="bg-red-400 text-red-800 w-[30px] p-1 text-center flex items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-700"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>
                 </div>
               )}
              </TableCell>
              <TableCell className="text-right py-5 flex items-center justify-center gap-1">
                 <button onClick={() => openTicketModal()} className="bg-blue-400 p-1 w-7 h-7 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-blue-700"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
                 </button>
                 <button onClick={() => openTicketModal()} className="p-1 w-7 h-7 rounded-full bg-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-green-700"><path strokeLinecap="round" strokeLinejoin="round" d="m16.49 12 3.75-3.751m0 0-3.75-3.75m3.75 3.75H3.74V19.5" /></svg>
                 </button>
                 <button className="p-1 w-7 h-7 rounded-full bg-red-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-red-700"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                 </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
   { isOpenModal && <TicketsModal /> }
   </TicketContext.Provider>
  );
}
