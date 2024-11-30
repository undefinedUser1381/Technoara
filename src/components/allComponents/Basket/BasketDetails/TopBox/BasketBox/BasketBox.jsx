import React from 'react'

export default function BasketBox() {
  return (
    <div className='mt-3 p-5'>
      <div className='flex flex-col sm:flex-row gap-5 items-center justify-between'>
         <div className='flex flex-col md:flex-row items-center justify-start gap-5'>
            <div className='w-12 h-12'>
                <img src="/images/products/1.jpg" alt="" className='w-full h-full'/>
            </div>
            <span className='font-YekanBakh'>نام نام محصول محصول عزیز</span>
         </div>
         <div className='flex flex-col gap-4 md:gap-5 items-end text-[#021959] text-[1.1rem] font-YekanBakh'>
           <div className='flex items-center text-center justify-center sm:justify-end w-full gap-5 p-2 px-4 rounded-lg'>
              <div className='w-[40%] p-2 gap-4 flex border items-center justify-center bg-white'>
                <div className='text-[1.3rem]'>+</div>
                <div className='font-Kalame'>1</div>
                <div className='text-[1.3rem]'>-</div>
              </div>
           </div>
           <div className='flex gap-3 items-center justify-center'>
              <span className='font-Kalame line-through text-gray-400'>12,200,200</span>
              <span className='font-Kalame bg-red-600 text-white p-1 rounded-3xl text-[0.8rem]'>%9</span>
              <span className='font-Kalame'>13,200,500</span>
              <span className='text-[0.7rem] text-[#021959]'>تومان</span>
           </div>
         </div>
      </div>
    </div>
  )
}
