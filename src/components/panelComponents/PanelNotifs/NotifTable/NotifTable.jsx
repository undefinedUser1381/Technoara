import React from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

export default function NotifTable() {
  const notif = [
    {
      id: 1,
      row: "1",
      title: "توجه",
      desc: "به زودی تخفیف میذاریم",
      link: "",
      notifStatus: true,
      isActive: true,
    },
  ];

  return (
    <div>
      <Table className="overflow-scroll lg:overflow-hidden border dark:border-gray-600 rounded-xl">
        <TableHeader className="bg-white text-black dark:bg-[#1B2631] dark:text-white">
          <TableRow className="font-Kalame text-[0.9rem] border-gray-300 dark:border-gray-600 *:p-4 lg:text-[1rem]">
            <TableHead className="text-right">ردیف</TableHead>
            <TableHead className="text-right">عنوان</TableHead>
            <TableHead className="text-right">توضیحات</TableHead>
            <TableHead className="text-right">لینک</TableHead>
            <TableHead className="text-right">وضعیت</TableHead>
            <TableHead className="text-right">فعال</TableHead>
            <TableHead className="text-right">بیشتر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white text-black font-Kalame text-right dark:bg-[#1B2631] dark:text-white"y>
          {notif.map((item) => (
            <TableRow 
              className="border font-Kalame border-gray-300 dark:border-gray-600"
              key={item.id}
            >
              <TableCell>{item.row}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell className="w-[25rem]"><div className="w-[10rem]">{item.desc}</div></TableCell>
              <TableCell className="w-[150px]">{item.link === "" ? (<div className="w-[5rem] bg-red-600 text-center text-white rounded-lg">بدون لینک</div>) : (<div className="w-[5rem] text-center bg-green-700 text-white rounded-lg">لینک دارد</div>)}</TableCell>
              <TableCell className="text-center w-[10rem]">{item.notifStatus ? (<div className="w-7 flex items-center justify-center h-7 text-center bg-green-700 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
               </div>) : (<div className="w-7 h-7 bg-red-600 text-center flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
               </div>)}</TableCell>
              <TableCell>{item.isActive ? (<div className="w-7 flex items-center justify-center h-7 text-center bg-green-700 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></div>) : (<div className="w-7 h-7 bg-red-600 text-center flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> </div>)}</TableCell>
              <TableCell className="w-[6rem]">
                <div className="flex w-7 h-7 items-center justify-center bg-red-700 text-white rounded-full">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
