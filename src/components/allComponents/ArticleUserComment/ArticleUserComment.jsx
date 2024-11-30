import React from 'react'

export default function ArticleUserComment() {
  return (
    <div className='p-6 mt-5 bg-white w-[98%] mx-auto rounded-lg'>
        <h3 className='font-YekanBakh text-[#021959] font-bold'>ثبت کامنت</h3>
        <div className='flex flex-col gap-3 mt-7'>
            <label className='font-YekanBakh text-[0.8rem]' htmlFor="textarea">دیدگاه*</label>
            <textarea name="" id="textarea" cols="30" className='article-inputs resize-none' rows="10"></textarea>
        </div>
        <div className='flex flex-col gap-3 mt-7'>
            <label className='font-YekanBakh text-[0.8rem]' htmlFor="">نام*</label>
            <input className='article-inputs' type="text" />
        </div>
        <div className='flex flex-col gap-3 mt-7'>
            <label className='font-YekanBakh text-[0.8rem]' htmlFor="">ایمیل*</label>
            <input className='article-inputs' type="text"/>
        </div>
        <div className='mt-16 w-[100%]'>
            <button className='bg-[#0650A3] font-YekanBakh p-3 text-white rounded-lg font-bold w-full'>ارسال نظر</button>
        </div>
    </div>
  )
}
