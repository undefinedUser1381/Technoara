import React from 'react'
import { Link } from 'react-router-dom'

export default function TitleBox({title,link}) {
  return (
    <div className='flex mt-3 px-2 items-center justify-between'>
       <p className='font-YekanBakh font-bold text-[#021959] text-[1.1rem] md:text-[1.4rem]'>{title}</p>
       <Link className='font-YekanBakh font-bold text-[#021959] text-[0.9rem] md:text-[1rem]' to={"#"}>{link}</Link>
    </div>
  )
}
