import React, { memo } from 'react'

const OrderSections = memo(() => {
  console.log("Order sections rendered");
   return(
    <>
     {/* First box */}
     <div className='flex flex-col gap-5 sm:flex-row items-center border-b pb-5 mt-6 justify-between'>
      <div className='flex flex-col w-full sm:w-[50%] gap-1'>
         <p className='font-YekanBakh text-gray-400 text-[0.9rem]'>مبلغ کل سفارش</p>
         <span className='font-Kalame text-[1.1rem]'>18,550,500 تومان</span>
      </div>
      <div className='flex flex-col w-full sm:w-[50%] gap-1'>
         <p className='font-YekanBakh text-gray-400 text-[0.9rem]'>تاریخ ثبت سفارش</p>
         <span className='font-Kalame text-[1.1rem]'>22 شهریور 1403 | 10:45</span>
      </div>
    </div>
    {/* Second box */}
    <div className='flex flex-col gap-3 sm:flex-row text-center sm:text-right w-full items-center pb-5 mt-6 justify-between'>
      <div className='flex flex-col w-[50%] gap-1'>
         <p className='font-YekanBakh text-gray-400 text-[0.9rem]'>وضعیت سفارش</p>
         <span className='font-Kalame text-[1.1rem] w-full bg-green-500 sm:w-28 text-center rounded-lg text-white p-2'>تکمیل شده</span>
      </div>
      <div className='flex flex-col w-[50%] gap-1'>
         <p className='font-YekanBakh text-gray-400 text-[0.9rem]'>تعداد محصولات</p>
         <span className='font-Kalame text-[1.1rem]'>2</span>
      </div>
    </div>
  </>
   )
})

export default OrderSections;