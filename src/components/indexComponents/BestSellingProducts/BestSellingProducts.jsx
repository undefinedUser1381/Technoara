import React from 'react'
import TitleBox from '../TitleBox/TitleBox'
import ProductsWithDiscount from '../../sharedComponents/ProductsWithDiscount/ProductsWithDiscount';
import ProductsWithNoDiscounts from '../../sharedComponents/ProductsWithNoDiscounts/ProductsWithNoDiscounts';
import SlideButtons from '../../sharedComponents/SlideButtons/SlideButtons';
import {Swiper,SwiperSlide} from "swiper/react";
import { Autoplay,Navigation } from 'swiper/modules';
import "swiper/css"

export default function BestSellingProducts() {
  return (
    <section className='mt-1 lg:mt-20 p-2 sm:p-5'>
      <TitleBox title={"پرفروش ترین ها"} link={"مشاهده همه"}/>
      <div className="flex items-center justify-between w-[100%] mx-auto mt-5">
        <Swiper 
        className="p-2" 
        direction="horizontal" 
        loop="true" 
        spaceBetween={35} 
        navigation={{nextEl : ".swiper-button-next",prevEl:".swiper-button-prev"}}
        modules={[Navigation,Autoplay]} 
        autoplay={{delay : 3000}} 
        slidesPerView={1}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween:20
          },
          1200: {
            slidesPerView: 4,
            spaceBetween:25,
            width:1600
          },
        }}
        >
          <SwiperSlide className="w-[100%]"><ProductsWithDiscount /></SwiperSlide>
          <SwiperSlide className="w-[100%]"><ProductsWithNoDiscounts /></SwiperSlide>
          <SwiperSlide className="w-[100%]"><ProductsWithDiscount /></SwiperSlide>
          <SwiperSlide className="w-[100%]"><ProductsWithNoDiscounts /></SwiperSlide>
          <SwiperSlide className="w-[100%]"><ProductsWithDiscount /></SwiperSlide>
          <SwiperSlide className="w-[100%]"><ProductsWithNoDiscounts /></SwiperSlide>
          <SwiperSlide className="w-[100%]"><ProductsWithDiscount /></SwiperSlide>
          <SwiperSlide className="w-[100%]"><ProductsWithDiscount /></SwiperSlide>
          <SwiperSlide className="w-[100%]"><ProductsWithNoDiscounts /></SwiperSlide>
          <SlideButtons />
        </Swiper>
      </div>
    </section>
  )
}
