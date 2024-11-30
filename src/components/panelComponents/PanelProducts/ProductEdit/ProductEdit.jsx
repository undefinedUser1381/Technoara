import { useState } from "react";
import React from 'react'

export default function ProductEdit({submit}) {

  const [isChecked , setIsChecked] = useState(false);

  return (
    <>
       <h3 className="font-Kalame mt-5 dark:bg-slate-600 text-black dark:text-white p-2 font-bold bg-gray-200 rounded-lg w-28">{submit}</h3>
       <form onSubmit={(e) => e.preventDefault()} className='mt-6 mb-2 font-Kalame flex flex-wrap gap-5'> 
          <div className='flex flex-col w-full md:w-[48%] items-start gap-3'>
            <label className='text-black dark:text-white' htmlFor="">عنوان محصول</label>
            <input type="text" className='w-[100%] bg-transparent border dark:border-gray-700 p-2 outline-none transition-all focus:border-primary' placeholder='عنوان ...'/>
          </div>
          <div className='flex flex-col w-full md:w-[48%] items-start gap-3'>
            <label className='text-black dark:text-white' htmlFor="">توضیحات محصول</label>
            <input type="text" className='w-[100%] bg-transparent border dark:border-gray-700 p-2 outline-none transition-all focus:border-primary' placeholder='نوضیحات ...'/>
          </div>
          <div className='flex flex-col w-full md:w-[48%] items-start gap-3'>
            <label className='text-black dark:text-white' htmlFor="">لینک محصول</label>
            <input type="text" className='w-[100%] bg-transparent border dark:border-gray-700 p-2 outline-none transition-all focus:border-primary' placeholder='لینک ...'/>
          </div>
          <div className='flex flex-col w-full md:w-[48%] items-start gap-3'>
            <label className='text-black dark:text-white' htmlFor="">قیمت محصول</label>
            <input type="text" className='w-[100%] bg-transparent border dark:border-gray-700 p-2 outline-none transition-all focus:border-primary' placeholder='قیمت ...'/>
          </div>
          <div className='flex flex-col w-full md:w-[48%] items-start gap-3'>
            <label className='text-black dark:text-white' htmlFor="">موجودی محصول</label>
            <input type="text" className='w-[100%] bg-transparent border dark:border-gray-700 p-2 outline-none transition-all focus:border-primary' placeholder='موجودی ...'/>
          </div>
          <div className='flex flex-col w-full md:w-[48%] items-start gap-3'>
            <label className='text-black dark:text-white' htmlFor="">دسته بندی محصول</label>
            <input type="text" className='w-[100%] bg-transparent border dark:border-gray-700 p-2 outline-none transition-all focus:border-primary' placeholder='دسته بندی ...'/>
          </div>
          <div className='flex flex-col w-full md:w-[48%] items-start gap-3'>
          <label className='text-black dark:text-white' htmlFor="">تخفیف محصول</label>
            <div className='flex items-center w-full p-2 justify-start gap-2 border dark:border-gray-700'>
              <input onChange={(e) => {setIsChecked(e.target.checked)}} type="checkbox" className={`${isChecked ? "hidden": ""} w-[20px] h-[1rem]`}/>
               {
                 isChecked && (    
                   <input type="text" className='w-[100%] bg-transparent outline-none transition-all focus:border-primary' placeholder='مقدار تخفیف ...'/>
                   )
                  }
              <label className={`${isChecked ? "hidden" : ""}`} htmlFor="">دارای تخفیف باشد</label>
            </div>
          </div>
          <div className='flex flex-col w-full md:w-[48%] items-start gap-3'>
            <label className='text-black dark:text-white' htmlFor="">رایگان محصول</label>
            <div className='flex items-center w-full p-2 justify-start gap-2 border dark:border-gray-700'>
              <input onChange={(e) => {console.log(e.target.checked)}} type="checkbox" className='w-[20px] h-[1rem]'/>
              <label htmlFor="">رایکان باشد</label>
            </div>
          </div>
          <div className='flex w-full justify-end lg:w-[50%] items-start lg:justify-start mt-5'>
            {
              submit === "ادیت محصول" ? (
                <button onClick={(e) => console.log("edit")} className='px-5 bg-yellow-500 text-black rounded-lg py-2 font-Kalame'>ویرایش محصول</button>
              ) : (
                <button onClick={(e) => console.log("add")} className='px-6 bg-green-600 rounded-lg py-2 font-Kalame text-white'>اضافه محصول</button>
              )
            }
          </div>
       </form>
     
  </>
  )
}
