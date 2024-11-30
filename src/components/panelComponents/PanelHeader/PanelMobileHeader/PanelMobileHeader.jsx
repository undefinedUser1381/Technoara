import React from 'react'
import PanelSideBarLinks from '../../PanelSidebar/PanelSidebarLinks/PanelSideBarLinks';

export default function PanelMobileHeader({isOpen,closeSidebar}) {
  return (
    <div className={`fixed transition-all bg-white dark:bg-[#1B2631] duration-300 ${isOpen ? "right-0" : "right-[-45rem]"} p-3 top-0 bottom-0 bg-white w-[80%] z-30 cursor-pointer sm:w-[25rem]`}>
      <div onClick={closeSidebar} className='cursor-pointer text-black dark:text-[#73879B] mt-2 w-6 h-6'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </div>
      <div className='flex flex-col items-center mt-10'>
          <h4 className='font-Kalame text-[2rem] font-bold dark:text-white'>تکنو<span className='text-primary'>آرا</span></h4>
      </div>
      <div className='flex items-center w-full justify-start gap-2 mt-10'>
        <div className='rounded-full bg-slate-700 w-16 h-16'></div>
        <div className='flex items-start *:font-Kalame flex-col gap-1'>
           <p className='text-black dark:text-white'>محسن سنگ سفیدی</p>
           <span className='rounded-md text-white px-1 bg-green-600'>مدیریت</span>
        </div>
      </div>
      <div className='mt-10 w-full'>
         <PanelSideBarLinks />
      </div>
    </div>
  )
}
