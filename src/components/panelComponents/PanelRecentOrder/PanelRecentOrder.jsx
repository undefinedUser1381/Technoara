import React from 'react'
import PagesTitle from '../PagesTitle/PagesTitle'
import PanelDayFilter from '../PanelDayFilter/PanelDayFilter'
import Panelboxes from '../PanelBoxes/Panelboxes'
import OrdersTable from "./OrdersTable/OrdersTable"

export default function PanelRecentOrder() {
  return (
    <div className='w-[100%] min-h-screen bg-[#F9FAFB] p-0 lg:p-4 dark:bg-[#111827]'>
      <div className='mt-[7rem] w-full mr-auto lg:w-[80%] px-4 text-white'>
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-between'>
         <PagesTitle title={"سفارش های اخیر"} />
         <PanelDayFilter />
        </div>
        <div className='my-10 flex-wrap gap-4 sm:gap-12 xl:flex-nowrap xl:gap-3 flex w-full items-center justify-between'>
        <Panelboxes>
        <div className='w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-700"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
       </div>
        <div className='flex font-Kalame flex-col gap-2'>
          <span className='text-black dark:text-[#BFBFD6]'>سفارش ها</span>
          <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>5 فروش</span>
        </div>
        </Panelboxes>
        <Panelboxes>
        <div className='w-16 h-16 bg-green-300 rounded-full flex items-center justify-center'> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-700"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
        </div>
        <div className='flex font-Kalame flex-col gap-2'>
          <span className='text-black dark:text-[#BFBFD6]'>مبلغ فروش</span>
          <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>7,555,000 تومان</span>
        </div>
        </Panelboxes>
        <Panelboxes>
        <div className='w-16 h-16 bg-red-400 rounded-full flex items-center justify-center'> 
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-700"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>
        </div>
        <div className='flex font-Kalame flex-col gap-2'>
          <span className='text-black dark:text-[#BFBFD6]'>پرداخت نقدی</span>
          <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>895,000 تومان</span>
        </div>
        </Panelboxes>
        <Panelboxes>
        <div className='w-16 h-16 bg-purple-300 rounded-full flex items-center justify-center'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-700"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" /></svg>
        </div>
        <div className='flex font-Kalame flex-col gap-2'>
          <span className='text-black dark:text-[#BFBFD6]'>پرداخت با ولت</span>
          <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>34,000,000</span>
        </div>
        </Panelboxes>
        </div>
        <div className='mt-12 rounded-lg'>
          <OrdersTable />
        </div>
      </div>
    </div>
  )
}
