import React from 'react'

export default function FooterFeatures({title,src}) {
  return (
    <div className='flex flex-col mx-auto gap-3 items-center'>
       <div className='w-[3rem] h-[3rem]'>
         <img src={src} className='w-full h-full' alt="image" />
       </div>
       <p className='font-YekanBakh text-secondary'>{title}</p>
    </div>
  )
}
