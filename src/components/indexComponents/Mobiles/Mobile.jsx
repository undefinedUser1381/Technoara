import React from 'react'
import TitleBox from '../TitleBox/TitleBox'
import ProductsWithDiscount from '../../sharedComponents/ProductsWithDiscount/ProductsWithDiscount'
import ProductsWithNoDiscounts from '../../sharedComponents/ProductsWithNoDiscounts/ProductsWithNoDiscounts'
import {Swiper,SwiperSlide} from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css"

export default function Mobile() {
  return (
    <section className='mt-10 lg:mt-10 p-1 sm:p-5'>
      <TitleBox title={"موبایل ها"} link={"مشاهده همه"} />
      <div className='flex flex-col lg:flex-row items-center lg:mt-2 xl:mt-16 justify-between w-[100%] h-full'>
       <div className='w-full hidden lg:block lg:w-[20%] xl:w-[25%] h-[40rem] lg:h-[38rem] xl:h-[33rem] rounded-3xl overflow-hidden shadow-[#DF2648] shadow-xl'>
         <div className='w-[100%] h-[100%]'>
            <img src="/images/mobile/Mobile.jpg" className='w-[100%] h-[100%]' alt="" />
         </div>
       </div>
       <div className='w-[100%] h-[35rem] lg:h-[auto] xl:w-[70%] mx-auto flex items-center justify-between'>
           <Swiper
            className='p-5'
            modules={[Autoplay]}
            slidesPerView={1}
            breakpoints={{
              576:{
                slidesPerView:1
              },
              768:{
                slidesPerView:2
              },
              // 1024:{
              //   slidesPerView:2,
              // },
              1200:{
                slidesPerView:3,
                width:1200
              }
            }}
            spaceBetween={30}
            loop="true"
            autoplay={{
                delay:3000
            }}
           >
             <SwiperSlide><ProductsWithDiscount/></SwiperSlide>
             <SwiperSlide><ProductsWithNoDiscounts/></SwiperSlide>
             <SwiperSlide><ProductsWithDiscount/></SwiperSlide>
             <SwiperSlide><ProductsWithNoDiscounts/></SwiperSlide>
             <SwiperSlide><ProductsWithDiscount/></SwiperSlide>
           </Swiper>
       </div>
      </div>
    </section>
  )
}
