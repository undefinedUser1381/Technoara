import React from 'react'

export default function AddressBox() {
  return (
    <div className='flex border items-start flex-col p-3 rounded-lg'>
       <div className='border-b pb-4 pt-2 flex text-[#021959] items-center w-full justify-start gap-3'>
         <div className='w-5 h-5'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
           </svg>
          </div>
          <p className='font-YekanBakh'>تهران</p>
       </div>
       <div className='mt-5 flex flex-col gap-7 md:flex-row items-center w-full justify-start md:gap-[5rem]'>
          <div className='flex font-YekanBakh text-[0.9rem] flex-col gap-3 items-start'>
            <p className='text-gray-400'>استان , شهر :</p>
            <p className='text-[#021959]'>تهران , ورامین</p>
          </div>
          <div className='flex font-YekanBakh text-[0.9rem] flex-col gap-3 items-start'>
            <p className='text-gray-400'>کدپستی :</p>
            <p className='text-[#021959] font-Kalame'>982357882</p>
          </div>
          <div className='flex font-YekanBakh text-[0.9rem] flex-col gap-3 items-start'>
            <p className='text-gray-400'>شماره موبایل :</p>
            <p className='text-[#021959] font-Kalame'>0946738974</p>
          </div>
          <div className='flex font-YekanBakh text-[0.9rem] flex-col gap-3 items-start'>
            <p className='text-gray-400'>تحویل گیرنده :</p>
            <p className='text-[#021959]'>عرفان قزی</p>
          </div>
       </div>
    </div>
  )
}
