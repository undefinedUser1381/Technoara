import React from 'react'
import TicketBox from './TicketBox/TicketBox'
import TicketAnswer from './TicketAnswer/TicketAnswer'

export default function TicketsModal() {
  return (
    <div className='fixed transition-all duration-300 top-0 left-0 right-0 bottom-0 z-30 bg-[rgba(0,0,0,0.7)] cursor-pointer w-full h-full flex items-center justify-center'>
      <div className='w-[75%] bg-white dark:bg-[#111827] p-3 rounded-lg cursor-auto'>
        <div className='flex flex-col items-center gap-3 justify-center'>
          <div className='rounded-full bg-green-300 p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-700"><path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" /></svg>
          </div>
            <span className='font-Kalame text-black dark:text-white text-[1.1rem] font-bold'>جزییات تیکت</span>
        </div>
        <div className='flex items-center justify-between gap-3 mt-8'>
        <div className='flex items-center justify-start p-2 rounded-lg w-[35%] dark:bg-[#1B2631] bg-[#F9FAFB] gap-3'>
           <div className='bg-purple-300 rounded-full p-2 flex items-center justify-center w-14 h-14'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-700"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
           </div>
           <div className='flex *:text-black *:dark:text-white *:font-Kalame flex-col gap-2 items-start'>
              <span>کاربر</span>
              <span>0932132255</span>
           </div>
        </div>
        <div className='flex items-center justify-start p-2 rounded-lg w-[35%] dark:bg-[#1B2631] bg-[#F9FAFB] gap-3'>
           <div className='bg-red-300 rounded-full p-2 flex items-center justify-center w-14 h-14'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-700"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
           </div>
           <div className='flex text-black dark:text-white *:font-Kalame flex-col gap-2 items-start'>
              <span>تاریخ</span>
              <span>1403/22/22</span>
           </div>
        </div>
        <div className='flex items-center justify-start p-2 rounded-lg w-[35%] dark:bg-[#1B2631] bg-[#F9FAFB] gap-3'>
           <div className='bg-green-300 rounded-full p-2 flex items-center justify-center w-14 h-14'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-700"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
           </div>
           <div className='flex text-black dark:text-white *:font-Kalame flex-col gap-2 items-start'>
             <span>شناسه</span>
             <span>kjhskgh7392njnh</span>
           </div>
        </div>
        </div>
        <div className='border relative mt-10 border-gray-200'>
          <span className='bg-white absolute block text-center w-24 top-[-15px] right-[45%] dark:bg-[#111827] dark:text-white font-Kalame'>متن تیکت</span>
        </div>
        <div className='mt-5'>
          <TicketBox />
        </div>
        <div className='mt-5'>
          <TicketAnswer />
        </div>
      </div>
    </div>
  )
}
