import React from 'react'
import { Link } from 'react-router-dom'

export default function ArticleBox() {
  return (
    <div className='w-full flex flex-col md:flex-row items-start justify-start md:justify-between h-auto gap-4 border-b-2 pb-[1.5rem]'>
       <div className='w-[65%] xs:w-[55%] sm:w-[45%] relative mx-auto md:mx-0 h-[7rem] md:h-[100%] rounded-2xl overflow-hidden'>
         <img src="/images/articles/3-11.jpg" alt="" className='w-[100%] h-[100%]'/>
           <div className='absolute bottom-1 right-2 text-white text-[0.8rem] flex items-center justify-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
             </svg>
            <span className='font-YekanBakh'>15 دقیقه</span>
         </div>
       </div>
       <div className='flex flex-col gap-4 w-full md:w-[65%]'>
          <h3 className='font-YekanBakh text-secondary text-[0.8rem] font-bold'>دلایلی برای خرید گوشی ناتینگ فون یک</h3>
          <p className='font-YekanBakh leading-6 text-[0.7rem] font-bold'>دلایل خرید گوشی ۱   بسیار قانع‌کننده‌ هستند،  توجه به نوع را در اختیار کاربر قرار می‌دهد.</p>
          <div className='flex xs:flex-col xs:gap-5 sm:flex-row sm:gap-0 items-center justify-between'>
            <div className='flex items-center justify-center text-[0.8rem] gap-2'>
              <div className='flex items-center justify-center gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  <p className='font-YekanBakh'>مدیر سایت</p>
               </div>
               <div className='flex items-center justify-center gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                  <span className='font-Kalame'>2024-07-03</span>
               </div>
               <div className='flex items-center justify-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                   <span className='font-Kalame'>0</span>
               </div>
            </div>
            <Link className='font-YekanBakh text-primary font-bold' to={"/articles"}>دیدن مقاله</Link>
          </div>
       </div>
    </div>
  )
}
