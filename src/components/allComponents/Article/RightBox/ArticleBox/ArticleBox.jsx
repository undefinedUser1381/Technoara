import React from 'react'

export default function ArticleBox(){
  return (
    <div className='*:font-YekanBakh w-full p-5 bg-white'>
        <div className='w-full h-[10rem] xs:h-[10rem] md:h-[15rem] lg:h-[16rem] mb-4 overflow-hidden rounded-md'>
            <img className='w-full object-cover h-full' src="/images/articles/mobo.png" alt="" />
        </div>
        <h3 className='mb-4'>اندروید باکس نت باکس موبوادیشن ، تلویزیون هوشمند ارزان</h3>
        <p className='mb-6 leading-7 text-[#02195983]'>در دنیای پیشرفته فناوری امروز، لپ تاپ‌ها نقشی اساسی در زندگی روزمره و حرفه‌ای ما ایفا کرده و انتخاب یک لپ تاپ مناسب تأثیر قابل توجهی بر بهره‌وری، خلاقیت و حتی سرگرمی کاربران دارد.</p>
        <div className='flex *:text-[0.8rem] items-center font-bold justify-between'>
            <div className='flex items-center gap-2 justify-center'>
               <p className='text-[#02195980]'>نویسنده :</p>
               <p className='text-[#021959]'>مدیر سایت</p>
            </div>
            <div className='flex gap-1 items-center justify-center'>
              <p className='text-[#02195980]'>دیدگاه کاربران :</p>
              <p className='font-Kalame text-[#021959]'>0</p>
            </div>
        </div>
        <div className='flex items-center *:text-[0.8rem] font-bold justify-between mt-5'> 
            <div className='flex items-center gap-2 justify-center'>
               <p className='text-[#02195980]'>تاریخ :</p>
               <p className='text-[#021959] font-Kalame'>۱۲ تیر ۱۴۰۳</p>
            </div>
            <div className='flex gap-1 items-center justify-center'>
              <p className='text-[#02195980]'>تایم مقاله :</p>
              <p className='font-Kalame text-[#021959]'>14:22 دقیقه</p>
            </div>
        </div>
    </div>
  )
}
