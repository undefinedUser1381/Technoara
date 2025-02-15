import React, { memo } from 'react'
import PrdSrc from "/public/images/products/1-10.jpg"

const ProductsWithDiscount = memo(() => {
  console.log("ProductsWithDiscount Rendered");
  return (
    <div className='flex cursor-pointer relative flex-col w-[100%] h-[32rem] pb-1 xs:pb-0 xs:h-[29rem] sm:h-[29rem] md:h-[29rem] gap-2 shadow-xl transition-all hover:bg-[#EFF0F5] p-5 rounded-lg'>
      <div className='w-[14rem] mx-auto h-[14rem]'>
        <img src={PrdSrc} className='w-[100%] h-[100%]' alt="" />
        <div className='absolute right-5 top-5'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
        </div>
      </div>  
      <div className='my-4'>
        <p className='font-YekanBakh leading-8 text-secondary font-bold'>کنسول بازی سونی مدل اسلیم یک ترابایت ریجن اروپا PlayStation Slim</p>
      </div>
      <div className='flex flex-col-reverse xs:flex-row gap-8 sm:gap-4 items-center justify-between'>
        <div className='bg-primary p-3 text-center text-white w-full xs:p-3 xs:w-[59%] sm:p-4 sm:w-[42%] md:w-[50%] rounded-xl'><button className='font-YekanBakh'>افزودن به سبد</button></div>
        <div className='flex flex-col items-center w-full gap-3 xs:w-[35%]'>
           <div className='flex items-center justify-center gap-5'>
             <div className='font-Kalame'><span className='line-through'>200,000</span></div>
             <div className='font-Kalame bg-primary p-2 text-white rounded-xl'><span>50%</span></div>
           </div>
           <span className='font-Kalame font-bold text[2rem]'>400,000 تومان</span>
        </div>
      </div>
    </div>
  )
})

export default ProductsWithDiscount