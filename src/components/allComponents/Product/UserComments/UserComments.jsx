import React from 'react'

export default function UserComments() {
  return (
    <div className='w-[98%] animate-showTab rounded-lg mt-10 mx-auto p-8 bg-white'>
       <div className='flex items-center justify-between'>
          <h3 className='font-YekanBakh text-[#0650A3] text-[1.4rem]'>نظرات کاربران</h3>
          <p className='font-YekanBakh text-[#02195973]'>بدون دیدگاه</p>
       </div>
       <div className='flex items-center justify-center mt-10'>
         <div className='bg-[#E5E8EE] text-center w-[28rem] p-2'>
          <p className='font-YekanBakh font-bold text-[#02195973]'>برای ثبت دیدگاه، باید محصول مورد نظر را خریداری کرده باشید</p>
         </div>
       </div>
    </div>
  )
}
