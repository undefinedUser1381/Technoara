import React from 'react'

export default function TechnicalInfos() {
  return (
    <div className='w-[98%] animate-showTab rounded-lg mt-10 mx-auto p-8 bg-white'>
      <h4 className='font-YekanBakh text-[1.2rem] text-[#0650A3]'>توضیحات تکمیلی</h4>
      <ul className='mt-6 *:p-2'>
        <li>
          <div className='mb-5 flex items-center justify-start gap-8 xs:gap-5'>
            <span className='font-YekanBakh border-b-2 block text-[#02195999] w-[10%] pb-2'>وزن</span>
            <p className='font-Kalame block w-[90%] text-[#4D5E8A] border-b-2 pb-2'>40 کیلوگرم</p>
          </div>
        </li>
        <li>
          <div className='mb-5 flex items-center justify-start gap-8 xs:gap-5'>
            <span className='font-YekanBakh border-b-2 block text-[#02195999] w-[10%] pb-2'>رنگ</span>
            <p className='font-Kalame block w-[90%] text-[#4D5E8A] border-b-2 pb-2'>آبی و قرمز</p>
          </div>
        </li>
        <li>
          <div className='mb-5 flex items-center justify-start gap-8 xs:gap-5'>
            <span className='font-YekanBakh border-b-2 block text-[#02195999] w-[10%] pb-2'>گارانتی</span>
            <p className='font-Kalame block w-[90%] text-[#4D5E8A] border-b-2 pb-2'>40 روزه</p>
          </div>
        </li>
        <li>
          <div className='mb-5 flex items-center justify-start gap-8 xs:gap-5'>
            <span className='font-YekanBakh border-b-2 block text-[#02195999] w-[10%] pb-2'>اسپیکر</span>
            <p className='font-Kalame block w-[90%] text-[#4D5E8A] border-b-2 pb-2'>اسپیکر</p>
          </div>
        </li>
        <li>
          <div className='flex items-center justify-start gap-8 xs:gap-5'>
            <span className='font-YekanBakh border-b-2 block text-[#02195999] w-[10%] pb-2'>بلندگو</span>
            <p className='font-Kalame block w-[80%] text-[#4D5E8A] border-b-2 pb-2'>استریو</p>
          </div>
        </li>
      </ul>
    </div>
  )
}
