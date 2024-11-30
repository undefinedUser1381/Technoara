import React from 'react'

export default function AddressTitle() {
  return (
   <div className='flex items-center border-b pb-6 pt-3 justify-between'>
    <div className='flex text-[#021959] items-center justify-start gap-3'>
      <div className='w-6 h-6'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
       </svg>
      </div>
      <h4 className='font-YekanBakh text-[1.1rem]'>آدرس ها</h4>
    </div>
    <div className='flex items-center justify-end text-[#021959] gap-2'>
       <h4 className='font-YekanBakh text-[0.8rem]'>افزودن آدرس</h4>
       <div className='w-4 h-4'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
         </svg>
       </div>
    </div>
  </div>
  )
}
