import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

export default function CategoryTable() {

    const invoices = [
        {
          id:"1",
          row: "1",
          title: "mobile",
          latinaTitle: "mobile",
          link: "/mobile",
          date: "1403/2/1",
          active: true,
        },
        {
            id:"1",
            row: "1",
            title: "mobile",
            latinaTitle: "mobile",
            link: "/mobile",
            date: "1403/2/1",
            active: true,
          },
          {
            id:"1",
            row: "1",
            title: "mobile",
            latinaTitle: "mobile",
            link: "/mobile",
            date: "1403/2/1",
            active: true,
          },
          {
            id:"1",
            row: "1",
            title: "mobile",
            latinaTitle: "mobile",
            link: "/mobile",
            date: "1403/2/1",
            active: false,
          },
          {
            id:"1",
            row: "1",
            title: "mobile",
            latinaTitle: "mobile",
            link: "/mobile",
            date: "1403/2/1",
            active: false,
          },
          {
            id:"1",
            row: "1",
            title: "mobile",
            latinaTitle: "mobile",
            link: "/mobile",
            date: "1403/2/1",
            active: true,
          },
    ]

  return (
    <div className="rounded-lg">
    <Table className="overflow-scroll lg:overflow-hidden border dark:border-gray-600 rounded-2xl">
     <TableHeader className="bg-white text-black dark:bg-[#1B2631] dark:text-white">
       <TableRow className="font-Kalame text-[0.9rem] border-gray-300 dark:border-gray-600 *:p-4 lg:text-[1rem]">
         <TableHead className="text-[1rem] w-[150px] text-right">
           ردیف
         </TableHead>
         <TableHead className="text-right">عنوان دسته بندی</TableHead>
         <TableHead className="text-right">لاتین</TableHead>
         <TableHead className="text-right">لینک</TableHead>
         <TableHead className="text-right">تاریخ</TableHead>
         <TableHead className="text-right">فعال</TableHead>
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
           <TableCell className="font-medium w-[14rem]"><div className='w-[8rem]'>{invoice.title}</div></TableCell>
           <TableCell className="font-medium">{invoice.latinaTitle}</TableCell>
           <TableCell className="font-medium">{invoice.link}</TableCell>
           <TableCell className="font-medium">{invoice.date}</TableCell>
           <TableCell className="w-[7rem]">
            {invoice.active ? (
                <div className='bg-green-600 flex items-center justify-center text-white rounded-full w-[2rem] p-1 h-8'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </div>
            ) : (
                <div className='bg-red-600 flex items-center justify-center text-white rounded-full w-[2rem] p-1 h-8'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
            )}
           </TableCell>
           <TableCell className="text-right flex items-center justify-center gap-1">
              <div className="bg-red-600 flex items-center justify-center p-1 w-7 h-7 rounded-full">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
             </div>
           </TableCell>
         </TableRow>
       ))}
      </TableBody>
    </Table>
  </div>
  )
}
