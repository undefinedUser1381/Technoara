import React from 'react'

export default function RightSection() {
  return (
    <div className='hidden lg:flex items-center justify-center gap-3'>
       <div className='w-12 h-12 rounded-[50%] overflow-hidden'>
         {/* <img src="/images/" alt="" /> */}
         <div className='bg-primary w-full h-full'></div>
       </div>
       <div className='flex flex-col gap-2'>
         <p className='font-Kalame text-black dark:text-[#D4DEE7] font-bold'>سید عرفان قزی</p>
         <span className='font-Kalame bg-green-500 w-16 text-center text-[#D4DEE7] text-[0.8rem] rounded-md'>مدیریت</span>
       </div>
    </div>
  )
}
