import React from 'react'
import { Link } from 'react-router-dom'

export default function EndOrder() {

  console.log("end order");
  return (
    <div className='w-[95%] flex flex-col items-center justify-center mx-auto'>
      <div className='mt-16 w-[8rem] h-[8rem]'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-green-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
         </svg>
      </div>
      <div className='mt-5 font-Kalame bg-green-700 text-white p-3 rounded-lg'>
        <Link to={"/"}>بازگشت صفحه اصلی</Link>
      </div>
    </div>
  )
}
