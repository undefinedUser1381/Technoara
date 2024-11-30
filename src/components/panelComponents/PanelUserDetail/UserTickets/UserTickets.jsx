import React from "react";
import { useState } from "react";
import TicketsModal from "../../TicketsModal/TicketsModal";
import TicketContext from "@/context/TicketModalDetails/TicketModalDetails";
import { Table , TableRow , TableHead , TableHeader, TableBody , TableCell} from "@/components/ui/table";

export default function UserPurchases() {

 const [isOpenModal , setIsOpenModal] = useState(false);

 const openTicketModal = () => {
       setIsOpenModal(true);
  }

  const closeTicketModal = () => {
    setIsOpenModal(false);
  } 

  const user = [
    {
      row : "1",
      user: "0999999999",
      no: "FDH5366ffs",
      date: "1403/2/6",
      section: "مدیریت",
      status: "1",
      followed: "0",
    },
  ];

  return (
   <TicketContext.Provider value={{closeTicketModal,openTicketModal,isOpenModal}}>
    <Table>
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
      <TableBody>
        {user.map(item => (
          <TableRow key={item.row} className="border font-Kalame border-gray-300 dark:border-gray-600">
            <TableCell className="font-medium"><span className="text-black dark:text-white">{item.row}</span></TableCell>
            <TableCell className="font-medium"><span className="text-black dark:text-white">{item.user}</span></TableCell>
            <TableCell className="font-medium"><span className="text-black dark:text-white">{item.no}</span></TableCell>
            <TableCell className="font-medium"><span className="text-black dark:text-white">{item.date}</span></TableCell>
            <TableCell className="font-medium">
             <span className="bg-blue-300 text-blue-700 px-2 rounded-xl font-bold">{item.section}</span>
            </TableCell>
            <TableCell className="font-medium">
              {item.status === "0" ? (<span className="bg-red-300 font-bold text-red-700 px-2 rounded-xl">پیگیری نشده</span>) : (
                <span className="bg-green-300 font-bold text-green-700 rounded-xl px-2">پیگیری شده</span>
              )}
            </TableCell>
            <TableCell>{item.followed ? (<span className="bg-green-300 font-bold text-green-700 rounded-xl px-2">بله</span>
            ) : (
              <span className="bg-red-300 font-bold text-red-700 px-2 rounded-xl">خیر</span>
            )}</TableCell>
            <TableCell className="text-center flex items-center gap-1 justify-center">
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
    { isOpenModal && <TicketsModal /> }
    </TicketContext.Provider>
  );
}
