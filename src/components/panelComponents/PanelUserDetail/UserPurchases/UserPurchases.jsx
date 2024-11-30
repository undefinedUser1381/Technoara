import React from "react";
import { Table , TableRow , TableHead , TableHeader, TableBody , TableCell} from "@/components/ui/table";

export default function UserPurchases() {
  const user = [
    {
      row : "1",
      name: "محصول",
      no: "hushguo35636",
      date: "1403/2/6",
      payed: "رایگان",
      user: "0999999999",
      payway: "نقدی",
    },
  ];

  return (
    <Table>
      <TableHeader className="bg-white text-black dark:bg-[#1B2631] dark:text-white">
        <TableRow className="font-Kalame text-[0.9rem] border-gray-300 dark:border-gray-600 *:p-4 lg:text-[1rem]">
          <TableHead className="text-[1rem] w-[150px] text-right">
            ردیف
          </TableHead>
          <TableHead className="text-right">نام</TableHead>
          <TableHead className="text-right">شناسه</TableHead>
          <TableHead className="text-right">تاریخ</TableHead>
          <TableHead className="text-right">پرداختی</TableHead>
          <TableHead className="text-right">کاربر</TableHead>
          <TableHead className="text-right">روش پرداخت</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {user.map(item => (
          <TableRow key={item.row} className="border font-Kalame border-gray-300 dark:border-gray-600">
            <TableCell className="font-medium"><span className="text-black dark:text-white">{item.row}</span></TableCell>
            <TableCell className="font-medium"><span className="text-black dark:text-white">{item.name}</span></TableCell>
            <TableCell className="font-medium"><span className="text-black dark:text-white">{item.no}</span></TableCell>
            <TableCell className="font-medium"><span className="text-black dark:text-white">{item.date}</span></TableCell>
            <TableCell className="font-medium">
              {item.payed === "رایگان" ? (
                <span className="bg-red-300 font-bold text-red-900 rounded-xl px-4">{item.payed}</span>
              ) : (
                <span className="bg-green-300 text-green-700 rounded-xl px-4">{item.payed}</span>
              )}
            </TableCell>
            <TableCell className="font-medium"><span className="text-black dark:text-white">{item.user}</span></TableCell>
            <TableCell><span className="font-medium bg-blue-300 text-blue-700 rounded-xl px-4">{item.payway}</span></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
