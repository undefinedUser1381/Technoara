import React from 'react'

export default function Notification() {
  return (
   <div className='p-5 shadow-sm rounded-lg w-[73%] bg-white'>
    <div className='flex text-[#021959] py-5 border-b items-center justify-start gap-3'>
     <div className='w-7 h-7'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
       </svg>
      </div>
      <h4 className='font-YekanBakh'>اطلاعیه ها</h4>
     </div>
    <div className='mt-5 bg-red-500 p-3 text-white rounded-lg font-YekanBakh text-center w-full'>
      <p>هیچ اطلاعیه موجود نیست !</p>
    </div>
  </div>
  )
}
