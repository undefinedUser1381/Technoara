import React from 'react'

export default function Panelboxes({children}) {
  return (
    <div className='flex items-center p-6 border dark:border-gray-600 rounded-lg w-full sm:w-[45%] md:w-[44%] lg:w-[29%] xl:w-[25%] bg-white dark:bg-[#1B2631] justify-start gap-5'>
      {children}
    </div>
  )
}


