import React from 'react'

export default function AddModal({closeModal}) {
  return (
    <div className='fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 h-[100%] bg-[rgba(0,0,0,0.8)] w-full z-20'>
      <div className='bg-white w-[95%] md:w-[60%] dark:bg-[#1B2631] flex flex-col items-center justify-center rounded-xl p-3'>
        <div className='w-10 h-10 bg-blue-600 rounded-full p-2 flex items-center justify-center my-4'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-blue-200">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
         </svg>
        </div>
        <h4 className='font-Kalame text-black dark:text-white mb-5'>اضافه کردن دسته بندی</h4>
        <div className='flex flex-wrap w-full gap-2'>
            <div className='font-Kalame flex gap-2 flex-col w-full sm:w-[49%]'>
                <label className='text-black dark:text-white' htmlFor="">عنوان دسته بندی</label>
                <input type="text" name="" className='py-2 px-3 bg-transparent border border-gray-500 dark:border-gray-600' placeholder='عنوان' id="" />
            </div>
            <div className='font-Kalame flex gap-2 flex-col w-full sm:w-[49%]'>
                <label className='text-black dark:text-white' htmlFor="">عنوان لاتین</label>
                <input type="text" name="" className='py-2 px-3 bg-transparent border border-gray-500 dark:border-gray-600' placeholder='عنوان' id="" />
            </div>
            <div className='font-Kalame flex gap-2 flex-col w-full sm:w-[49%]'>
                <label className='text-black dark:text-white' htmlFor="">لینک دسته بندی</label>
                <input type="text" name="" className='py-2 px-3 bg-transparent border border-gray-500 dark:border-gray-600' placeholder='لینک' id="" />
            </div>
        </div>
        <div className='flex items-center justify-start gap-2 w-full mt-10'>
           <button className='font-Kalame bg-green-700 text-white py-3 px-6 rounded-lg'>اضافه کن</button>
           <button onClick={closeModal} className='font-Kalame bg-red-700 text-white py-3 px-6 rounded-lg'>بیخیال</button>
        </div>
      </div>
    </div>
  )
}
