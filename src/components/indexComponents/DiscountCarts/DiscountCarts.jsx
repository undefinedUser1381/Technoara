import React from 'react'
import CartDiscount from '../CartDiscount/CartDiscount';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import { Autoplay } from 'swiper/modules';

export default function DiscountCarts() {
  return (
    <div className='w-full sm:w-[90%] lg:w-[100%] sm:mx-auto lg:mx-0 h-auto xl:w-[45%] bg-white relative lg:h-[100%]'>
    <Swiper 
    className='h-[100%]'
    direction='horizontal'
    modules={[Autoplay]}
    autoplay={{delay:2500}}
    breakpoints={
        {
          1200 : {
            direction : "vertical"
          }
        }
    }
    slidesPerView={1}
    loop="true"
   >
      <SwiperSlide>
        <CartDiscount />
      </SwiperSlide>
      <SwiperSlide>
        <CartDiscount />
      </SwiperSlide>
      <SwiperSlide>
        <CartDiscount />
      </SwiperSlide>
   </Swiper>
    </div>
 
  )
}
