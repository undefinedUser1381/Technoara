import React from 'react'

export default function AddNewAdress() {
  return (
    <form className='flex flex-wrap mt-8 items-start gap-4'>
        <div className='flex font-Kalame flex-col gap-4 w-full sm:w-[48%] lg:w-[48%] xl:w-[32%]'>
          <label htmlFor="">نام</label>
          <input type="text" className='bg-[#F8F9FB] p-2 rounded-lg' placeholder='نام'/>
        </div>
        <div className='flex font-Kalame flex-col gap-4 w-full sm:w-[48%] lg:w-[48%] xl:w-[32%]'>
          <label htmlFor="">نام خانوادگی</label>
          <input type="text" className='bg-[#F8F9FB] p-2 rounded-lg' placeholder='نام خانوادگی'/>
        </div>
        <div className='flex font-Kalame flex-col gap-4 w-full sm:w-[48%] lg:w-[48%] xl:w-[32%]'>
          <label htmlFor="">کدپستی</label>
          <input type="text" className='bg-[#F8F9FB] p-2 rounded-lg' placeholder='کدپستی'/>
        </div>
        <div className='flex font-Kalame flex-col gap-4 w-full sm:w-[48%] lg:w-[48%] xl:w-[32%]'>
          <label htmlFor="">شماره تلفن</label>
          <input type="text" className='bg-[#F8F9FB] p-2 rounded-lg' placeholder='شماره تلفن'/>
        </div>
        <div className='flex font-Kalame flex-col gap-4 w-full sm:w-[48%] lg:w-[48%] xl:w-[32%]'>
          <label htmlFor="">استان</label>
          <input type="text" className='bg-[#F8F9FB] p-2 rounded-lg' placeholder='استان'/>
        </div>
        <div className='flex font-Kalame flex-col gap-4 w-full sm:w-[48%] lg:w-[48%] xl:w-[32%]'>
          <label htmlFor="">شهر</label>
          <input type="text" className='bg-[#F8F9FB] p-2 rounded-lg' placeholder='شهر'/>
        </div>
        <div className='flex font-Kalame flex-col gap-4 w-[100%]'>
          <label htmlFor="">آدرس</label>
          <textarea typ e="text" className='bg-[#F8F9FB] p-2 rounded-lg resize-none' placeholder='فلان کوچه فلان فلان'/>
        </div>
        <div className='mt-4 w-full flex items-center justify-end'>
          <button className='bg-primary w-full sm:w-[30%] xl:w-[15%] shadow-md rounded-lg text-[1rem] p-3 font-YekanBakh text-white'>ثبت آدرس</button>
        </div>
    </form>
  )
}
