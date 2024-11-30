import React, { memo } from 'react'
import { useContext } from 'react';
import dataContext from '@/context/dataContext/dataContext';

const BottomBox = memo(() => {

  const contextData = useContext(dataContext);
  
  return (
    <div className='bg-white w-[95%] p-4 rounded-lg mx-auto h-auto mt-14'>
      <div className='flex flex-col md:flex-row items-center w-full justify-start gap-10'>
        <div className='flex items-center text-[1.1rem] gap-3'>
          <p className='font-YekanBakh'>سبد خرید : </p>
          <span className='font-Kalame'>12,300,000 تومان</span>
        </div>
        <div className='flex text-[#0650A3] border-r pr-0 md:pr-8 font-bold text-[1.1rem] items-center gap-3'>
          <p className='font-YekanBakh'>جمع نهایی : </p>
          <span className='font-Kalame'>12,350,000 تومان</span>
        </div>
      </div>
      <div className='mt-10'>
        <div className='flex items-center justify-start gap-3 text-[#0650A3]'>
          <div className='w-8 h-8'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
          </div>
          <h5 className='font-YekanBakh'>انتخاب روش ارسال</h5>
        </div>
        <div>
             <div className='flex flex-col gap-5 md:flex-row md:gap-0 mt-6 items-center justify-between'>
               <div className='flex flex-col md:flex-row items-center justify-start w-[100%] md:w-[60%] gap-7'>
                 <div className={`border-2 cursor-pointer w-full md:w-[50%] rounded-md transition-all duration-200 ${contextData.postStatus === "پست عادی" ? "text-primary" : ""} flex items-center justify-between p-3 w-[50%]`}>
                     <span onClick={(e) => contextData.updatePostStatus(e)} className='font-YekanBakh'>پست عادی</span>
                     <span className='font-Kalame text-[0.8rem]'>25,000 تومان</span>
                 </div>
                 <div className={`border-2 cursor-pointer w-full md:w-[50%] rounded-md transition-all duration-200 ${contextData.postStatus === "پست پیشتاز" ? "text-primary" : ""} flex items-center justify-between p-3 w-[50%]`}>
                     <span onClick={(e) => contextData.updatePostStatus(e)} className='font-YekanBakh'>پست پیشتاز</span>
                     <span className='font-Kalame text-[0.8rem]'>50,000 تومان</span>
                 </div>
               </div>
               <button onClick={() => contextData.nextStep()} className='font-Kalame text-[1.1rem] text-white p-3 block rounded-lg bg-primary w-full sm:w-[40%] md:w-[23%]'>اقدام به پرداخت</button>
             </div>
        </div>
      </div>
    </div>
  )
}) 

export default BottomBox