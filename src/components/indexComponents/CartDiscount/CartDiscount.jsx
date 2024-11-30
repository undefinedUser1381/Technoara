import React from 'react'

export default function CartDiscount() {
  return (
    <div className='bg-[#F04055] rounded-xl p-5 h-[95%] w-full lg:w-[100%]'>
    <div className='flex flex-col lg:flex-row items-center justify-between'>
     <div className='w-[100%] lg:w-[50%] p-10 flex flex-col items-center'>
       <h4 className='text-[1.2rem] font-Dorna text-white font-bold'>شگفت انگیز شو</h4>
       <div className='w-[100%] relative h-[100%]'>
        <img src="/images/back-amazing.png" className='h-[100%] w-[100%]' alt="" />
        <div className='w-[45%] h-[45%] absolute top-[40%] right-[30%] sm:right-[30%] sm:h-[45%] sm:w-[45%] xl:w-[45%] xl:h-[50%]'>
          <img src="/images/discountproducts/1-1.png" className='w-[100%] h-[100%]' alt="" />
        </div>
        <div className='bg-[#F04055] absolute w-10 h-8 top-[40%] left-[25%] sm:top-[45%] sm:left-[30%] md:w-16 md:h-12 lg:w-14 lg:h-10 lg:top-[45%] p-3 xl:p-2 xl:top-[35%] xl:left-[20%] xl:w-10 xl:h-8 flex shadow-xl items-center justify-center rounded-r-[25%]'>
            <p className='font-Kalame text-white'>%67</p>
        </div>
       </div>
    </div>
     <div className='flex flex-col w-full lg:w-[50%]'>
      <div className='flex flex-col p-5 justify-between w-[100%] *:font-YekanBakh *:text-white'>
        <div className='mb-[2rem]'><p className='font-extrabold leading-6'>مدیا ریموت پلی استیشن سونی مدل PS Media Remot CFI</p></div>
        <div><p className='leading-7'>حدودا سه سال از زمان عرضه کنسول‌های نسل نهمی می‌گذرد و به نظر می‌رسد هنوه می‌...</p></div>
       </div>
       <div className='mt-10 xl:mt-5 px-5 flex items-center justify-between'>
          <div className='cursor-pointer flex items-center rounded-lg p-3 justify-center bg-white w-12 h-12'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[100%] h-[100%]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          </div>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center justify-center gap-4'>
                 <sapn className='font-Kalame line-through text-white'>53,700,000</sapn>
                 <div className='bg-white font-bold p-1 font-Kalame rounded-xl'>
                    %67
                 </div>
                </div>
                <sapn className='font-Kalame text-white text-[1.2rem]'>23,000,000 تومان</sapn>
            </div>
       </div>
     </div>
   </div>
   </div>   
  )
}
