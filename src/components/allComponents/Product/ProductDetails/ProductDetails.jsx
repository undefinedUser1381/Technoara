import React , {memo} from 'react'

const ProductDetails = memo(() => {
    console.log("product details render");
    return (
      <div className='w-full lg:w-[55%] mt-[3rem] lg:mt-0 flex flex-col gap-8'>
         <h4 className='font-YekanBakh text-[#021959] text-[1rem] xs:text-[1.2rem] font-bold'>گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو</h4>
         <div className='flex flex-col gap-2'>
           <span className='font-YekanBakh font-bold text-[#02195999] text-[1rem]'>توضیحات محصول</span>
           <p className='font-YekanBakh leading-7'>گوشی موبایل iPhone 13 CH پرچم‌دار جدید شرکت اپل است که با چند ویژگی جدید و دوربین دوگانه روانه بازار شده است. نمایشگر آیفون 13 به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 460 پیکسل را در هر اینچ جا داده است. امکان شارژ بی‌‌سیم باتری در این گوشی وجود دارد. تشخیص چهره با استفاده از دوربین جلو دیگر ویژگی است که در آیفون جدید اپل به کار گرفته شده است. از نظر سخت‌‌افزاری این گوشی از تراشه­‌ی جدید A15 بهره می‌برد که دارای 15 میلیارد ترانزیستور است که دارای کنترل گرمای مطلوبی بوده که تا بتواند علاوه بر کارهای معمول، از قابلیت‌های جدید واقعیت مجازی که اپل این روزها روی آن تمرکز خاصی دارد، پشتیبانی کند. به گفته خود شرکت اپل این گوشی دارای سرعتی 50 برابر نسخه 12 خود است. پردازنده دارای ماژولار جدیدی است که مصرف باتری را بسیار پایین‌تر آورده است و شما دارای حفظ باتری بالاتری هستید. کیفیت</p>
         </div>
         <div className='flex flex-col gap-2'>
          <span className='font-YekanBakh font-bold text-[1rem] text-[#02195999]'>ویژگی محصول</span>
          <div className='flex flex-wrap sm:flex-nowrap mt-5 items-center gap-4 justify-between'>
           <div className='flex w-[40%] xs:w-[30%] items-center justify-center gap-1'>
              <p className='font-Kalame text-[0.9rem]'>جزییات</p>
              <span className='text-secondary font-YekanBakh font-bold'>جزییات</span>
           </div>
           <div className='flex w-[40%] xs:w-[30%] items-center justify-center gap-1'>
              <p className='font-Kalame text-[0.9rem]'>جزییات</p>
              <span className='text-secondary font-YekanBakh font-bold'>جزییات</span>
           </div> 
           <div className='flex w-[40%] xs:w-[30%] items-center justify-center gap-1'>
              <p className='font-Kalame text-[0.9rem]'>حزییات</p>
              <span className='text-secondary font-YekanBakh font-bold'>جزییات</span>
           </div>
            <div className='flex w-[40%] xs:w-[30%] items-center justify-center gap-1'>
               <p className='font-Kalame text-[0.9rem]'>جزییات</p>
              <span className='text-secondary font-YekanBakh font-bold'>جزییات</span>
           </div>
          </div>
         </div>
         <div className='flex items-center flex-col-reverse md:flex-row lg:px-3 gap-5 mt-5 justify-between'>
           <div className='flex w-[50%] xs:w-[27%] md:w-[15%] p-3 bg-[#F3F5F8] font-Kalame items-center gap-4 justify-between'>
              <div className='font-bold text-[#021959]'>+</div>
              <input type="text" className='w-[10%] bg-transparent text-center' value={"1"} />
              <div className='font-bold text-[#021959]'>-</div>
           </div>
           <div className='flex bg-[#F04055] cursor-pointer transition-all w-full xs:w-[60%] duration-150 shadow-md hover:shadow-lg hover:shadow-[#F04055] p-4 rounded-lg text-white items-center justify-between md:w-[30%] lg:w-[40%] xl:w-[30%]'>
            <p className='font-Kalame'>افزودن به سبد خرید</p>
            <div className='w-5 h-5'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </div>
           </div>
           <div className='flex items-center text-[#021959] w-[15%] justify-center gap-3'>
              <span className='font-Kalame font-bold text-[1.1rem]'>38,900,000</span>
              <span className='font-YekanBakh text-[0.8rem] rounded-md bg-[#021959] text-white p-1'>تومان</span>
           </div>
         </div>
      </div>
    )
});

export default ProductDetails;
