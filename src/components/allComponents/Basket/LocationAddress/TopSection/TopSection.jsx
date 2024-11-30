import React from 'react'

export default function TopSection() {
  console.log("Top secto");
  return (
    <div className='bg-white w-[95%] p-4 rounded-lg mx-auto h-auto mt-14'>
       <h3 className='font-YekanBakh text-[1.1rem] font-semibold py-5 border-b'>آدرس تحویل سفارش</h3>
        <div className='flex flex-col lg:flex-row items-center mt-8 justify-start w-full mx-auto flex-wrap gap-4'>
           <div className='flex items-start justify-start flex-col gap-2 w-full lg:w-[23%] mt-2 xl:w-[19%]'>
             <label className='font-YekanBakh' htmlFor="">نام <span className='text-red-500'>*</span></label>
             <input type="text" className='bg-[#F8F9FB] p-3 outline-none font-Kalame border-none rounded-md w-[100%]' placeholder='نام ...' />
           </div>
           <div className='flex items-start justify-start flex-col gap-2 w-full lg:w-[23%] mt-2 xl:w-[19%]'>
             <label className='font-YekanBakh' htmlFor="">نام خانوادگی <span className='text-red-500'>*</span></label>
             <input type="text" className='bg-[#F8F9FB] p-3 outline-none font-Kalame border-none rounded-md w-[100%]' placeholder='نام خانوادگی ...'/>
           </div>
           <div className='flex items-start justify-start flex-col w-full lg:w-[23%] gap-2 xl:w-[19%]'>
             <label className='font-YekanBakh' htmlFor="">کشور <span className='text-red-500'>*</span></label>
             <input type="text" className='font-Kalame bg-[#F8F9FB] p-3 outline-none border-none rounded-md w-full md:w-[100%]' placeholder='ایران ...'/>
           </div>
           <div className='flex items-start justify-start flex-col gap-2 w-full lg:w-[23%] xl:w-[19%]'>
             <label className='font-YekanBakh' htmlFor="">استان <span className='text-red-500'>*</span></label>
              <div className='w-full bg-[#F8F9FB] rounded-md p-3'>
                <select name="" className='font-Kalame shadow-none w-full bg-transparent overflow-scroll outline-none border-none cursor-pointer' id="">
                 <option className='w-full bg-[#F8F9FB]' value="">انتخاب کنید ...</option>
                 <option className='w-full bg-[#F8F9FB]' value="">خراسان شمالی</option>
                 <option className='w-full bg-[#F8F9FB]' value="">خراسان شمالی</option>
                 <option className='w-full bg-[#F8F9FB]' value="">خراسان شمالی</option>
                </select>
              </div>
          </div>
         <div className='flex items-start justify-start flex-col gap-2 w-full lg:w-[23%] xl:w-[19%]'>
             <label className='font-YekanBakh' htmlFor="">شهر <span className='text-red-500'>*</span></label>
              <div className='w-full bg-[#F8F9FB] rounded-md p-3'>
                <select name="" className='font-Kalame shadow-none w-full bg-transparent overflow-scroll outline-none border-none cursor-pointer' id="">
                 <option className='w-full bg-[#F8F9FB]' value="">انتخاب کنید ...</option>
                 <option className='w-full bg-[#F8F9FB]' value="">ذسفراین</option>
                 <option className='w-full bg-[#F8F9FB]' value="">اسقراین</option>
                 <option className='w-full bg-[#F8F9FB]' value="">اسقراین</option>
                </select>
              </div>
          </div>
         <div className='flex items-start justify-start flex-col gap-2 w-full lg:w-[23%] xl:w-[19%] mt-2'>
             <label className='font-YekanBakh' htmlFor="">خیابان <span className='text-red-500'>*</span></label>
             <input type="text" className='bg-[#F8F9FB] p-3 outline-none font-Kalame border-none rounded-md w-[100%]' placeholder='نمونه : ک شهید اکبری - پ 6 - طبقه همکف'/>
        </div>
      </div>
   </div>
  )
}
