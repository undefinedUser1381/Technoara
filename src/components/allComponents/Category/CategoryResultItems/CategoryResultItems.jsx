import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryResultItems({href,text,className}) {
  return (
    <div className={className}>
      <Link className='font-YekanBakh' to={href}>
        {text}
      </Link>
      <div className='w-4 h-4'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </div>
    </div>
  )
}
