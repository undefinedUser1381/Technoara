import React from 'react'
import { memo } from 'react'
import FooterFeatures from './FooterFeatures/FooterFeatures'

const Footer = memo(() => {
  console.log("Footer");
  return(
    <footer className='mt-10 lg:mt-24 p-4 bg-white'>
    <div className='flex flex-col'>
      <div className='flex flex-col lg:flex-row gap-14 items-center justify-between'>    
         <div className='w-full lg:w-[40%] flex gap-5 flex-col *:text-secondary'>
          <div className='flex flex-col text-center sm:text-right gap-5 mt-3 sm:flex-row sm:gap-0 items-center justify-between'>
              <p className='font-YekanBakh font-bold'>مرکز تماس مشتریان</p>
              <div className='flex items-center gap-3 justify-between'>
                <span className='font-Kalame'>051-44112233</span>
                <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                </div>
              </div>
           </div>
          <div className='flex flex-col text-center sm:text-right gap-5 mt-3 sm:flex-row sm:gap-0 items-center justify-between'>
              <p className='font-YekanBakh'>به صورت شبانه روزی پشتیبان شما هستیم</p>
              <div className='flex items-center gap-3 justify-between'>
                <span className='font-Kalame'>nfo@ishop.com</span>
                <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                </div>
              </div>
            </div>
            <div className='flex flex-col text-center sm:text-right gap-5 mt-3 sm:flex-row sm:gap-0 items-center justify-between'>
              <p className='font-YekanBakh'>رضایت مشتری برای ما در اولویت استت</p>
               <div className='flex items-center justify-between gap-3'>
                <span className='font-Kalame'>سبزوار-سبزوار-سبزوار</span>
                 <div className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                 </svg>
                </div>
              </div>
          </div>
         </div>
         <div className='w-full lg:w-[56%] flex flex-wrap gap-5 mt-2 md:mt-10 items-center justify-between shadow-lg p-5'>
            <FooterFeatures title={"پتل"} src={"/images/features/1-4.png"}/>
            <FooterFeatures title={"پشتیبانی"} src={"/images/features/2-4.png"}/>
            <FooterFeatures title={"ثبت"} src={"/images/features/3-3.png"}/>
            <FooterFeatures title={"اعلانات"} src={"/images/features/4-3.png"}/>
            <FooterFeatures title={"خبرنامه"} src={"/images/features/5-3.png"}/>
            <FooterFeatures title={"امنیت"} src={"/images/features/6-3.png"}/>
            <FooterFeatures title={"سبد خرید"} src={"/images/features/7-1.png"}/>
            <FooterFeatures title={"پرداخت"} src={"/images/features/8.png"}/>
        </div>
      </div>
      <div className='flex gap-10 flex-col-reverse lg:flex-row items-center border-b pb-5 mt-14 justify-between'>
          <div className='w-full sm:w-[10%]'>
            <div className='logo text-center'>
              <span className='text-secondary'>تکنو</span>
              <span>آرا</span>
            </div>
          </div>
          <div className='w-full text-center lg:text-right lg:w-[65%]'>
            <p className='font-YekanBakh text-secondary'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
          </div>
          <div className='w-[65%] lg:w-[20%] flex items-center justify-between'>
              <div className='w-[5rem] h-[5rem]'>
               <img src="/images/logo.png" className='w-[100%] h-[100%]' alt="" />
              </div>
              <div className='w-[5rem] h-[6rem]'>
               <img src="/images/kasbokar-1.webp" className='w-[100%] h-[100%]' alt="image" />
              </div>
              <div className='w-[5rem] h-[5rem]'>
               <img src="/images/rezi-1.webp" className='w-[100%] h-[100%]' alt="" />
             </div>
          </div>
      </div>
      <div className='text-center flex flex-col gap-5 mt-10'>
         <p className='font-YekanBakh text-[0.7rem]'>تمامی حقوق محفوظ است</p>
         <p className='font-YekanBakh text-[0.8rem]'>ساخته شده توسط <span className='font-Dorna text-primary'>سید عرفان قزی</span></p>
      </div>
    </div>
  </footer>
  )
})

export default Footer;
