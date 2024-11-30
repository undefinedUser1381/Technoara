import React from "react";
import { useContext } from 'react';
import dataContext from "@/context/dataContext/dataContext";

export default function OrderProgress({step}) {

  const stepContext = useContext(dataContext);

  return(
    <div className="mt-[14rem] xs:mt-[11rem] sm:mt-[10rem] lg:mt-16 px-10">
      <div className="flex w-[100%] flex-col xs:flex-row flex-wrap gap-5 sm:gap-0 sm:flex-nowrap md:w-[70%] sm:mx-auto items-center justify-between">
      <div onClick={() => stepContext.changeStep(1)} className={`flex cursor-pointer transition-all duration-200 ${step == 1 ? "text-primary" : "text-[#a1a3a7]"} justify-center flex-col items-center gap-3`}>
         <div className="w-8 h-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
         </div>
         <span className="font-YekanBakh">سبد خرید</span>
       </div>
       <div onClick={() => stepContext.changeStep(2)} className= {`flex cursor-pointer transition-all duration-200 ${step == 2 ? "text-primary" : "text-[#a1a3a7]"} flex-col items-center gap-3`}>
         <div className="w-8 h-8">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
         </div>
         <span className="font-YekanBakh">آدرس ارسال</span>
       </div>
       <div className= {`flex cursor-pointer transition-all duration-200 ${step == 3 ? "text-primary" : "text-[#a1a3a7]"} items-center flex-col gap-3`}>
         <div className="w-8 h-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
          </svg>
         </div>
         <span className="font-YekanBakh">جزییات پرداخت</span>
       </div>
       <div className={`flex cursor-pointer transition-all duration-200 ${step == 4 ? "text-primary" : "text-[#a1a3a7]"} items-center flex-col gap-3`}>
         <div className="w-8 h-8">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
         </div>
         <span className="font-YekanBakh">اتمام خرید</span>
       </div>
      </div>
    </div>
   )
}
