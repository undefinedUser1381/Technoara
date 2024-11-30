import React from 'react'

export default function PagesTitle({title}) {
  return (
    <h3 className='font-Kalame w-[15rem] self-start lg:self-auto dark:text-white text-[1.6rem] pr-12 relative font-bold text-black'>{title}
      <span className='w-10 h-3 bg-blue-500 absolute right-0 top-4 rounded-md'></span>
    </h3>
  )
}
