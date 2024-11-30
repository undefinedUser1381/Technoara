import React from 'react'
import { Link } from 'react-router-dom'

export default function TicketsFilter() {
  return (
    <>
     <div className="flex items-center self-end lg:self-auto justify-center bg-white border dark:bg-[#1B2631] p-3 rounded-lg dark:border-gray-600 gap-3">
      <Link to={"?status=all"} className="font-Kalame p-2 px-5 rounded-xl bg-[#F9FAFB] cursor-pointer transition-all duration-200 dark:hover:bg-blue-500 hover:bg-blue-600 *:hover:text-white dark:bg-[#2C3D4F]">
        <span className="text-black dark:text-white">همه</span>
      </Link>
      <Link to={"?status=with-answer"} className="font-Kalame p-2 px-5 rounded-xl bg-[#F9FAFB] cursor-pointer transition-all duration-200 dark:hover:bg-blue-500 hover:bg-blue-600 *:hover:text-white dark:bg-[#2C3D4F]">
        <span  className="text-black dark:text-white">
          با پاسخ
        </span>
      </Link>
      <Link to={"?status=no-answer"} className="font-Kalame p-2 px-5 rounded-xl bg-[#F9FAFB] cursor-pointer transition-all duration-200 dark:hover:bg-blue-500 hover:bg-blue-600 *:hover:text-white dark:bg-[#2C3D4F]">
        <span className="text-black dark:text-white">
          بدون پاسخ
        </span>
      </Link>
    </div>
    </>
  )
}
