import React from 'react'
import RecentOrderIIem from './RecentOrderItem/RecentOrderIIem'

export default function PanelRecentOrders() {
  return (
    <div className='w-full lg:w-[50%] h-full bg-white dark:bg-[#1B2631] p-5 border dark:border-gray-600 rounded-lg border-b'>
      <h4 className='font-Kalame pb-1 dark:border-gray-600 text-[1.1rem] relative text-black pr-8 dark:text-white'>سفارش های اخیر
       <div className='bg-blue-600 w-5 h-5 rounded-full absolute top-1 right-0'></div>
      </h4>
      <div className='flex flex-col gap-6 mt-3'>
        <RecentOrderIIem />
        <RecentOrderIIem />
        <RecentOrderIIem />
        <RecentOrderIIem />
        <RecentOrderIIem />
      </div>
    </div>
  )
}
