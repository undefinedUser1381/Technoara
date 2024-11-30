import React from 'react'
import PanelSideBarLinks from './PanelSidebarLinks/PanelSideBarLinks'

export default function PanelSidebar() {
  return (
    <aside className='w-[20%] fixed top-0 right-0 bottom-0 z-10 hidden lg:flex border-l-white border-l dark:border-l-[#2C3D4F] flex-col items-center gap-24 justify-start h-[100%] p-6 bg-white dark:bg-[#1B2631]'>
     <h4 className='font-Kalame font-bold mt-[6rem] text-center text-[#2C3D4F] dark:text-white text-[2rem]'>تکنو<span className='font-Kalame text-primary'>آرا</span></h4>
     <div className='flex flex-col w-full items-center justify-center'>
      <PanelSideBarLinks />
    </div>
    </aside>
  )
}
