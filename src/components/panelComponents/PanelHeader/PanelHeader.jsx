import React, { useState } from 'react'
import RightSection from './RightSection/RightSection'
import LeftSection from './LeftSection/LeftSection'
import PanelMobileHeader from './PanelMobileHeader/PanelMobileHeader'
import PanelMobileOverlay from './PanelMobileOverlay/PanelMobileOverlay'

export default function PanelHeader() {

  const [isOpenMobileSidebar , setIsOpenMobileSidebar] = useState(false );

  const openMobileSidebar = () => {
    setIsOpenMobileSidebar(true);
  }

  const closeMobileSidebar = () => {
    setIsOpenMobileSidebar(false);
  }
 
  return (
    <div className='fixed shadow-sm z-20 top-0 left-0 p-4 w-[100%] lg:w-[80%] bg-white dark:bg-[#1B2631]'>
      <div className='flex items-center justify-between'>
        <div onClick={openMobileSidebar} className='w-8 cursor-pointer block lg:hidden h-8 text-black dark:text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
         </svg>
        </div>
        <RightSection />
        <LeftSection />
        <PanelMobileHeader isOpen={isOpenMobileSidebar} closeSidebar={closeMobileSidebar}/>
        <PanelMobileOverlay isOpen={isOpenMobileSidebar}/>
      </div>
    </div>
  )
}
