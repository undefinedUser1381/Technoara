import React from 'react'
import { useContext } from 'react';
import dataContext from "../../../../context/dataContext/dataContext";

export default function OrderCompelete() {

  const stepContext = useContext(dataContext);

  console.log("order compelte");

  return (
    <div>
       <div className='bg-white w-[95%] p-4 rounded-lg mx-auto h-auto mt-14'>
      <div className='flex items-center justify-between'>
        <h3 className='font-YekanBakh font-semibold'>جزییات سفارش</h3>
        <span className='font-Kalame bg-primary text-white p-2 rounded-md'> تاریخ : 9/12/2024</span>
      </div>
      <div className='flex flex-col mt-5'>
         <div className='flex items-center border rounded-md p-2 justify-between'>
            <p className='font-Kalame font-black text-primary'>اسم محصول</p>
            <span className='font-Kalame text-primary font-bold'>قیمت</span>
         </div>
         <div className='flex items-center border border-t-0 rounded-md p-2 justify-between'>
            <p className='font-Kalame'>کنسول بازی بازی بازی بازی بازی * 2</p>
            <span className='font-Kalame'>18,000,000</span>
         </div>
         <div className='flex items-center border border-t-0 rounded-md p-2 justify-between'>
            <p className='font-Kalame'>کنسول بازی بازی بازی بازی بازی * 2</p>
            <span className='font-Kalame'>100,000</span>
         </div>
         <div className='flex items-center border border-t-0 rounded-md p-2 justify-between'>
            <p className='font-Kalame font-black text-primary'>مجموع</p>
            <span className='font-Kalame text-primary font-bold'>18,100,000</span>
         </div>
         <div className='flex items-center border border-t-0 rounded-md p-2 justify-between'>
            <p className='font-Kalame font-black text-primary'>حمل و نقل</p>
            <span className='font-Kalame text-primary font-bold'>56,000</span>
         </div>
         <div className='flex items-center border border-t-0 rounded-md p-2 justify-between'>
            <p className='font-Kalame font-black text-primary'>ارسال به</p>
            <span className='font-Kalame text-primary font-bold'>اینجا - اونجا - آن جا هاهاها</span>
         </div>
         <div className='flex items-center border border-t-0 rounded-md p-2 justify-between'>
            <p className='font-Kalame font-black text-primary'>قیمت نهایی</p>
            <span className='font-Kalame text-primary font-bold'>18,156,000</span>
           </div>
         </div>
       </div>
       <div onClick={(e) => stepContext.nextStep(e)} className='mt-10 flex items-center justify-center'>
         <button className='bg-blue-800 text-white font-Kalame p-3 rounded-lg text-[1.1rem] w-[80%] md:w-[23%]'>اتمام خرید</button>
      </div>
    </div>
  )
}
