import React from 'react'

export default function EditUserBox() {
  return (
    <form className='flex flex-wrap font-Kalame gap-5 w-full'>
      <div className='flex flex-col w-full sm:w-[48%] gap-2 rounded-md'>
         <label className='text-black dark:text-white' htmlFor="#user">نام کامل</label>
         <input type="text" className='p-2 bg-[#F9FAFB] dark:bg-[#111827] border dark:border-gray-600 outline-none text-black dark:text-white' placeholder='کاربر جدید' name="" id="user" />
      </div>
      <div className='flex flex-col w-full sm:w-[48%] gap-2 rounded-md'>
         <label className='text-black dark:text-white' htmlFor="#phone">شماره همراه</label>
         <input type="text" className='p-2 bg-[#F9FAFB] dark:bg-[#111827] border dark:border-gray-600 outline-none text-black dark:text-white' placeholder='09999999' name="" id="phone" />
      </div>
      <div className='flex flex-col w-full sm:w-[48%] gap-2 rounded-md'>
         <label className='text-black dark:text-white' htmlFor="#email">ایمیل</label>
         <input type="text" className='p-2 bg-[#F9FAFB] dark:bg-[#111827] border dark:border-gray-600 outline-none text-black dark:text-white' placeholder='ایمیل کاربر' name="" id="email" />
      </div>
      <div className='flex flex-col w-full sm:w-[48%] gap-2 rounded-md'>
         <label className='text-black dark:text-white' htmlFor="#bio">بیوگراغی</label>
         <input type="text" className='p-2 bg-[#F9FAFB] dark:bg-[#111827] border dark:border-gray-600 outline-none text-black dark:text-white' placeholder='متن بیوگرافی' name="" id="bio" />
      </div>
      <div className='flex flex-col w-full sm:w-[48%] gap-2 rounded-md'>
         <label className='text-black dark:text-white' htmlFor="#user">آپلود پروفایل</label>
         <input type="file" className='p-2 bg-[#F9FAFB] dark:bg-[#111827] border dark:border-gray-600 outline-none text-black dark:text-white' placeholder='کاربر جدید' name="" id="user" />
      </div>
      <div className='flex flex-col w-full sm:w-[48%] gap-2 rounded-md'>
         <label className='text-black dark:text-white' htmlFor="#user">نقش کاربر</label>
         <input type="text" className='p-2 bg-[#F9FAFB] dark:bg-[#111827] border dark:border-gray-600 outline-none text-black dark:text-white' placeholder='کاربر' value={"کاربر"} name="" id="user" />
      </div>
      <div className='flex items-center justify-start mt-2'>
         <button className='bg-green-500 text-white font-Kalame rounded-lg px-4 py-2'>ثبت تغییرات</button>
      </div>
    </form>
  )
}
