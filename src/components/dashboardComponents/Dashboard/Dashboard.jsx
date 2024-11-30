import React from 'react'

export default function Dashboard() {

   console.log("Dahsboard rendereda");

  return (
   <div className='w-full lg:w-[73%] p-3 rounded-lg shadow-sm bg-white'>
    <div className='flex py-5 border-b-2 items-center text-[1.1rem] justify-start gap-3 text-[#021959]'>
     <div className='w-6 h-6'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
       <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
       </svg>
      </div>
      <h3 className='font-YekanBakh'>پیشخوان</h3>
     </div>
     <div className='my-8 flex-col lg:flex-row gap-8 flex items-center flex-wrap'>
        <div className='flex items-center font-YekanBakh w-full lg:w-[30%] border-b pb-2 justify-between'>
           <p className='text-gray-400 text-[0.8rem]'>نام خانوادگی</p>
           <p>عرفان قزی</p>
        </div>
        <div className='flex items-center font-YekanBakh w-full lg:w-[30%] border-b pb-2 justify-between'>
           <p className='text-gray-400 text-[0.8rem]'>شماره همراه</p>
           <p className='font-Kalame'>0123456789</p>
        </div>
        <div className='flex items-center font-YekanBakh w-full lg:w-[30%] border-b pb-2 justify-between'>
           <p className='text-gray-400 text-[0.8rem]'>پست الکترونیک</p>
           <p>er@gmail.com</p>
        </div>
        <div className='flex items-center font-YekanBakh w-full lg:w-[30%] border-b pb-2 justify-between'>
           <p className='text-gray-400 text-[0.8rem]'>نام کاربری</p>
           <p>عرفانم</p>
        </div>
        <div className='flex items-center font-YekanBakh w-full lg:w-[30%] border-b pb-2 justify-between'>
           <p className='text-gray-400 text-[0.8rem]'>کد ملی</p>
           <p className='font-Kalame'>002333333</p>
        </div>
     </div>
     <div className='flex items-start flex-col md:flex-row mb-7 justify-center gap-10 md:gap-4'>
       <div className='font-YekanBakh w-full sm:w-[48%]'>
          <h5>اخرین سفارش های من</h5>
          <div className='p-5 border mt-5 rounded-xl'>
             <div className='flex items-center justify-start gap-6'>
                <div className='w-10 h-10'>
                   <img src="/images/products/1.jpg" className='w-full h-full' alt="" />
                </div>
                <p>فلان فلان محصول فلان آپشن فلان فلانی</p>
             </div>
             <div className='flex items-center mt-5 justify-start gap-6'>
                <div className='w-10 h-10'>
                   <img src="/images/products/1.jpg" className='w-full h-full' alt="" />
                </div>
                <p>فلان فلان محصول فلان آپشن فلان فلانی</p>
             </div>
             <div className='mt-5'>
              <span className='font-Kalame text-blue-950 text-[1rem]'>18,237,252 تومان</span>
             </div>
          </div>
       </div>
       <div className='font-YekanBakh w-full sm:w-[48%]'>
          <h5>پرتکرار ترین سفارش من</h5>
          <div className='p-5 border mt-5 rounded-xl'>
             <div className='flex items-center justify-start gap-6'>
                <div className='w-10 h-10'>
                   <img src="/images/products/1.jpg" className='w-full h-full' alt="" />
                </div>
                <p>فلان فلان محصول فلان آپشن فلان فلانی</p>
             </div>
             <div className='flex items-center mt-5 justify-start gap-6'>
                <div className='w-10 h-10'>
                   <img src="/images/products/1.jpg" className='w-full h-full' alt="" />
                </div>
                <p>فلان فلان محصول فلان آپشن فلان فلانی</p>
             </div>
             <div className='mt-5'>
              <span className='font-Kalame text-blue-950 text-[1rem]'>18,237,252 تومان</span>
             </div>
          </div>
       </div>
     </div>
   </div>
  )
}
