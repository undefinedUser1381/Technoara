import React from 'react'

export default function Favorites() {
  return (
    <div className='p-5 shadow-sm rounded-lg w-[73%] bg-white'>
      <div className='flex text-[#021959] py-5 border-b items-center justify-start gap-3'>
       <div className='w-7 h-7'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
       </div>
       <h4 className='font-YekanBakh'>محصولات مورد علاقه</h4>
      </div>
      <div className='mt-5 bg-red-500 p-3 text-white rounded-lg font-YekanBakh text-center w-full'>
        <p>هیچ علاقه مندی موجود نیست !</p>
      </div>
    </div>
  )
}
