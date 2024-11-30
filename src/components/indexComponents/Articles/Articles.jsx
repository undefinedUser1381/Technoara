import React from 'react'
import TitleBox from '../TitleBox/TitleBox'
import ArticleBox from './ArticleBox/ArticleBox'

export default function Articles() {

  return (
    <section className='mt-0 md:mt-20'>
      <TitleBox title={"وبلاگ"} link={"مشاهده"}/>
       <div className='flex flex-col lg:flex-row items-center h-auto lg:h-[27rem] justify-center gap-6 mt-10'>
          <div className='w-full lg:w-[55%] lg:mt-[5rem] xl:mt-0 relative h-[23rem] lg:h-[100%]'>
           <div className='w-[100%] h-[100%] overflow-hidden rounded-2xl'>
            <img src="images/articles/3-11.jpg" className='w-full h-full' alt="" />
           </div>
           <div className='absolute flex flex-col gap-7 justify-end pb-9 pr-5 article-box__bg left-0 top-0 right-0 rounded-2xl bottom-0 bg-[rgba(0,0,0,0.4)]'>
               <div className='flex flex-col'>
                  <p className='font-YekanBakh text-white'>اندروید باکس نت باکس موبوادیشن ، تلویزیون هوشمند ارزان</p>
               </div>
               <div className='flex flex-wrap md:flex-nowrap items-center text-white gap-8 justify-start'>
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
                   <div className='flex items-center justify-center gap-2'>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className='font-Kalame'>15 دقیقه</p>
                   </div>
               </div>
           </div>
          </div>
          <div className='w-full lg:w-[45%] mt-5 flex flex-col gap-7 h-[100%] items-start justify-start'>
              <ArticleBox />
              <ArticleBox />
              <ArticleBox />
          </div>
       </div>
    </section>
  )
}
