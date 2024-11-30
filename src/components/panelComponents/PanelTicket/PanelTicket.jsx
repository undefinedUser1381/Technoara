import React from 'react'
import PagesTitle from '../PagesTitle/PagesTitle'
import PanelDayFilter from '../PanelDayFilter/PanelDayFilter'
import TicketsFilter from './TicketsFilter/TicketsFilter'
import Panelboxes from '../PanelBoxes/Panelboxes'
import TicketsTable from './TicketsTable/TicketsTable'

export default function PanelTicket() {
 
  // const locationSearch = location.search
  // const locationSearchStatus = new URLSearchParams(locationSearch);
  // const status = locationSearchStatus.get("status");

  // console.log(status);

  return (
    <div className='w-[100%] min-h-screen bg-[#F9FAFB] p-0 lg:p-4 dark:bg-[#111827]'>
      <div className='mt-[7rem] w-full mr-auto lg:w-[80%] px-4 text-white'>
       <div className='flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between'>
        <PagesTitle title={"تیکت ها"}/>
        <div className='flex flex-col md:flex-row w-full items-center justify-start md:justify-end gap-5'>
         <TicketsFilter />
         <PanelDayFilter />
        </div>
       </div>
       <div className='my-10 flex-wrap gap-4 sm:gap-12 xl:flex-nowrap xl:gap-3 flex w-full items-center justify-between'>
        <Panelboxes>
        <div className='w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center'> 
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-700"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" /></svg>
        </div>
        <div className='flex font-Kalame flex-col gap-2'>
          <span className='text-black dark:text-[#BFBFD6]'>تعداد تیکت ها</span>
          <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>5 تیکت</span>
        </div>
        </Panelboxes>
        <Panelboxes>
        <div className='w-16 h-16 bg-green-300 rounded-full flex items-center justify-center'> 
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-700"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
        </div>
        <div className='flex font-Kalame flex-col gap-2'>
          <span className='text-black dark:text-[#BFBFD6]'>تیکت با پاسخ</span>
          <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>4 تیکت</span>
        </div>
        </Panelboxes>
        <Panelboxes>
        <div className='w-16 h-16 bg-red-400 rounded-full flex items-center justify-center'> 
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-700"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>
        </div>
        <div className='flex font-Kalame flex-col gap-2'>
          <span className='text-black dark:text-[#BFBFD6]'>تیکت بدون پاسخ</span>
          <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>18 تیکت</span>
        </div>
        </Panelboxes>
        <Panelboxes>
        <div className='w-16 h-16 bg-purple-300 rounded-full flex items-center justify-center'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-700"><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" /></svg>
         </div>
        <div className='flex font-Kalame flex-col gap-2'>
          <span className='text-black dark:text-[#BFBFD6]'>همه تیکت ها</span>
          <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>23 تیکت</span>
        </div>
        </Panelboxes>
       </div>
       <div className='mt-10'>
          <TicketsTable />
       </div>
      </div>
    </div>
  )
}
