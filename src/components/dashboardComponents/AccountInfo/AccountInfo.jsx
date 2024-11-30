import React from 'react'

export default function AccountInfo() {
  return (
    <div className='bg-white w-[100%] lg:w-[73%] p-5 shadow-sm rounded-lg'>
      <div className='flex items-center py-5 border-b text-[#021959] gap-4 justify-start'>
        <div className='w-7 h-7'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
         </div>
        <h3 className='font-YekanBakh'>اطلاعات شخصی کاربر</h3>
      </div>
      <form className='mt-5 w-full flex-col md:flex-row flex flex-wrap gap-5'>
        <div className='flex font-Kalame flex-col gap-4 w-full md:w-[48%] xl:w-[23%]'>
          <label htmlFor="">نام</label>
          <input type="text" className='bg-[#F8F9FB] w-full p-3 rounded-lg' placeholder='نام'/>
        </div>
        <div className='flex font-Kalame flex-col gap-4 w-full md:w-[48%] xl:w-[23%]'>
          <label htmlFor="">نام کاربری</label>
          <input type="text" className='bg-[#F8F9FB] w-full p-3 rounded-lg' placeholder='نام کاربری'/>
        </div>
        <div className='flex font-Kalame flex-col gap-4 w-full md:w-[48%] xl:w-[23%]'>
          <label htmlFor="">کدملی</label>
          <input type="text" className='bg-[#F8F9FB] w-full p-3 rounded-lg' placeholder='نام'/>
        </div>
        <div className='flex font-Kalame flex-col gap-4 w-full md:w-[48%] xl:w-[23%]'>
          <label htmlFor="">نام</label>
          <input type="text" className='bg-[#F8F9FB] w-full p-3 rounded-lg' placeholder='کدملی'/>
        </div>
        <div className='flex font-Kalame flex-col gap-4 w-full md:w-[48%] xl:w-[23%]'>
          <label htmlFor="">تاریخ تولد</label>
          <input type="text" className='bg-[#F8F9FB] w-full p-3 rounded-lg' placeholder='تاریخ تولد'/>
        </div>
        <div className='flex font-Kalame flex-col gap-4 w-full md:w-[48%] xl:w-[23%]'>
          <label htmlFor="">تلفن همراه</label>
          <input type="text" className='bg-[#F8F9FB] w-full p-3 rounded-lg' placeholder='تلفن همراه'/>
        </div>
        <div className='flex font-Kalame flex-col gap-4 w-full md:w-[48%] xl:w-[23%]'>
          <label htmlFor="">شماره ثابت</label>
          <input type="text" className='bg-[#F8F9FB] w-full p-3 rounded-lg' placeholder='شماره ثابت'/>
        </div>
        <div className='mt-10 w-full flex justify-end items-center'>
          <button className='bg-primary w-full sm:w-[20%] xl:w-[15%] p-3 font-YekanBakh rounded-lg text-white'>ذخیره</button>
        </div>
      </form>
    </div>
  )
}
