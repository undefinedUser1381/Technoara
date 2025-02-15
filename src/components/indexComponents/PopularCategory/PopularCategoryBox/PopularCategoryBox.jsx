import React from 'react'
import PopCat from "/public/images/popular-category/4.jpg";

export default function PopularCategoryBox() {
  return (
    <div className='p-4 h-[13rem] shadow-xl rounded-lg items-center justify-center bg-white flex flex-col gap-7'>
         <div className='w-[5rem] h-[5rem]'>
            <img src={PopCat} className='w-[100%] h-[100%]' alt="" />
         </div>
         <p className='font-YekanBakh text-secondary'>ساعت هوشمند</p>
    </div>
  )
}
