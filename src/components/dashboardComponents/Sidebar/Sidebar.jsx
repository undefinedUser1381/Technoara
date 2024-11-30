import React from 'react'
import SideBarLinks from './SideBarLinks/SideBarLinks'

export default function Sidebar() {
  return (
    <aside className='w-full lg:w-[25%] p-5 rounded-lg shadow-sm bg-white'>
     <div className='w-full flex items-center justify-center'>
      <div className='w-[4rem] h-[4rem] text-primary border-2 p-3 rounded-[50%]'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      </div>
     </div>
     <div className='flex items-center border-b pb-4 mt-3 justify-between'>
        <p className='font-YekanBakh text-[0.9rem]'>عرفان قزی</p>
        <span className='font-Kalame text-[0.9rem]'>0444444444</span>
     </div>
     <div className='mt-5'>
         <SideBarLinks />
     </div>
    </aside>
  )
}
