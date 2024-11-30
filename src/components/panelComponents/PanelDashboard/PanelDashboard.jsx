import React from 'react'
import Panelboxes from "../PanelBoxes/Panelboxes"
import PagesTitle from '../PagesTitle/PagesTitle'
import PanelChart from './PanelChart/PanelChart'
import PanelRecentOrders from './PanelRecentOrders/PanelRecentOrders'
import PanelCategoryChart from './PanelCategoryChart/PanelCategoryChart'
import PanelDayFilter from '../PanelDayFilter/PanelDayFilter'

export default function PanelDashboard() {
  return (
    <div className="w-[100%] min-h-screen bg-[#F9FAFB] p-0 lg:p-4 dark:bg-[#111827]">
     <div className="mt-[7rem] w-full mr-auto lg:w-[80%] px-4 text-white">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-between">
      <PagesTitle title={"داشبورد"} />
       <PanelDayFilter />
      </div>
     <div className="my-10 flex-wrap gap-4 sm:gap-12 xl:flex-nowrap xl:gap-3 flex w-full items-center justify-between">
       <Panelboxes>
        <div className='w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-700"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
        </div>
        <div className='flex font-Kalame flex-col gap-2'>
          <span className='text-black dark:text-[#BFBFD6]'>تعداد خرید ها</span>
          <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>5 خرید</span>
        </div>
       </Panelboxes>
       <Panelboxes>
        <div className='w-16 h-16 bg-green-300 rounded-full flex items-center justify-center'> 
          <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" class="w-12 h-12 text-green-700" height="45" width="45" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"></path></svg>
        </div>
        <div className='flex font-Kalame flex-col gap-2'>
          <span className='text-black dark:text-[#BFBFD6]'>مبلغ قروش</span>
          <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>4,555,000 تومان</span>
        </div>
       </Panelboxes>
       <Panelboxes>
        <div className='w-16 h-16 bg-red-400 rounded-full flex items-center justify-center'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-800"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
        </div>
        <div className='flex font-Kalame flex-col gap-2'>
          <span className='text-black dark:text-[#BFBFD6]'>تعداد کاربران</span>
          <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>18 کاربر</span>
        </div>
       </Panelboxes>
       <Panelboxes>
        <div className='w-16 h-16 bg-purple-300 rounded-full flex items-center justify-center'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-12 h-12 text-purple-800"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg></div>
        <div className='flex font-Kalame flex-col gap-2'>
          <span className='text-black dark:text-[#BFBFD6]'>تعداد محصولات</span>
          <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>34 محصول</span>
        </div>
       </Panelboxes>
     </div>
     <div className='p-5 mb-10 rounded-lg w-full dark:bg-[#1B2631] bg-white border dark:border-gray-600 border-gray-200 flex flex-col'>
      <PanelChart />
     </div>
     <div className='flex flex-col-reverse lg:flex-row items-start mt-10 w-full mx-auto justify-center gap-4'>
       <PanelCategoryChart />
       <PanelRecentOrders />
     </div>
     </div>
    </div>
  )
}
