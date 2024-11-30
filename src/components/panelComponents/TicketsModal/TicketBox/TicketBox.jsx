import React from 'react'

export default function TicketBox() {
  return (
    <div className='flex items-center justify-between gap-2'>
     <div className='bg-purple-300 rounded-full p-2 flex items-center justify-center w-10 h-10'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-700"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
     </div>
     <div className='bg-blue-300 p-3 rounded-lg font-Kalame w-full text-black'>
      سلام سلام سلام سلام
     </div>
   </div>
  )
}
