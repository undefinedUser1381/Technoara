import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SideBarLinks() {

  return (
    <>
     <NavLink to={"index"} className='flex items-center cursor-pointer text-gray-500 transition-all duration-150 hover:text-primary justify-between border-b pb-4'>
      <div className='flex items-center justify-start gap-3'>
       <div className='w-6 h-6'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
        </svg>
       </div>
        <p className='font-YekanBakh text-[0.9rem]'>پیشخوان</p>
      </div>
       <div className='w-4 h-4'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
       </svg>
      </div>
     </NavLink>
     <NavLink to={"orders"} className='flex items-center cursor-pointer text-gray-500 transition-all duration-150 hover:text-primary justify-between mt-5 border-b pb-4'>
      <div className='flex items-center justify-start gap-3'>
       <div className='w-6 h-6'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
         </svg>
       </div>
        <p className='font-YekanBakh text-[0.9rem]'>سفارش ها</p>
      </div>
     <div className='w-4 h-4'>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
       </svg>
      </div>
     </NavLink>
     <NavLink to={"address"} activeClassName="active" className='flex items-center cursor-pointer text-gray-500 transition-all duration-150 hover:text-primary justify-between mt-5 border-b pb-4'>
      <div className='flex items-center justify-start gap-3'>
       <div className='w-6 h-6'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
         </svg>
       </div>
        <p className='font-YekanBakh text-[0.9rem]'>آدرس</p>
      </div>
     <div className='w-4 h-4'>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
       </svg>
      </div>
     </NavLink>
     <NavLink to={"infos"} activeClassName="active" className='flex items-center cursor-pointer text-gray-500 transition-all duration-150 hover:text-primary justify-between mt-5 border-b pb-4'>
      <div className='flex items-center justify-start gap-3'>
       <div className='w-6 h-6'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
       </div>
        <p className='font-YekanBakh text-[0.9rem]'>اطلاعات حساب کاربری</p>
      </div>
     <div className='w-4 h-4'>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
       </svg>
      </div>
     </NavLink>
     <NavLink to={"favorites"} activeClassName="active" className='flex items-center cursor-pointer text-gray-500 transition-all duration-150 hover:text-primary justify-between mt-5 border-b pb-4'>
      <div className='flex items-center justify-start gap-3'>
       <div className='w-6 h-6'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
       </div>
        <p className='font-YekanBakh text-[0.9rem]'>علاقه مندی</p>
      </div>
     <div className='w-4 h-4'>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
       </svg>
      </div>      
     </NavLink>
     <NavLink to={"notifs"} activeClassName="active" className='flex items-center cursor-pointer text-gray-500 transition-all duration-150 hover:text-primary justify-between mt-5 border-b pb-4'>
      <div className='flex items-center justify-start gap-3'>
       <div className='w-6 h-6'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
        </svg>
       </div>
        <p className='font-YekanBakh text-[0.9rem]'>اطلاعیه ها</p>
      </div>
     <div className='w-4 h-4'>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
       </svg>
      </div>
     </NavLink>
     <div className='flex items-center cursor-pointer transition-none duration-150 justify-between text-red-400 hover:text-red-600 mt-5 pb-4'>
      <div className='flex items-center justify-start gap-3'>
       <div className='w-6 h-6'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
        </svg>    
       </div>
        <p className='font-YekanBakh text-[0.9rem]'>حروج حساب کاربری</p>
      </div>
      <div className='w-4 h-4'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
       </svg>
      </div>
     </div>
    </>
  )
}
