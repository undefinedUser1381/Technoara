import React, { useState } from 'react'

export default function Questions() {

  const [isOpenQuestionBox , setIsOpenQustionBox] = useState(false);

  return (
    <div className='w-[98%] animate-showTab rounded-lg mt-10 mx-auto p-8 bg-white'>
      <div className='flex items-center justify-between border-b-2 pb-5'>
        <h4 className='font-YekanBakh text-[1.4rem] text-[#0650A3]'>پرسش پاسخ</h4>
        <p className='font-Kalame text-[#02195973]'>پرسش پاسخ 1</p>
      </div>
      <div className={`mt-10 transition-all duration-200 ${isOpenQuestionBox ? "h-[550px] xs:h-[470px] sm:h-[320px] md:h-[250px] lg:h-[230px] xl:h-[200px]" : "h-[3rem] xs:h-[2rem] overflow-hidden"}`}>
        <div className='flex items-center gap-2 justify-start cursor-pointer' onClick={() => setIsOpenQustionBox(prev => !prev)}>
           <span className='bg-[#0650A3] w-5 h-1'></span>
           <h5 className='font-YekanBakh text-[#0650A3]'>لطفا سایز رو بنویسید این طرح چه سایز هایی دارد؟</h5>
        </div>
        <div className='mt-7'>
            <p className='font-YekanBakh leading-7 text-[#021959]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله و در طر در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد</p>
            <div className='mt-7 flex flex-col sm:flex-row items-center justify-start gap-3'>
              <p className='font-YekanBakh text-[#021959]'>آیا این پاسخ برای شما مفید بوده است؟</p>
              <div className='flex items-center justify-center gap-3'>
                 <div className='flex items-center justify-center gap-2'>
                   <p className='font-YekanBakh'>بله</p>
                   <div className='font-Kalame bg-[#F1FAF3] p-1 w-8 text-[#55A96B] rounded-md h-8 flex items center justify-center'>14</div>
                 </div>
                 <div className='flex items-center justify-center gap-2'>
                   <p className='font-YekanBakh'>خیر</p>
                   <div className='font-Kalame bg-[#EAECF1] text-[#0650A3] p-1 w-8 rounded-md h-8 flex items center justify-center'>11</div>
                 </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
