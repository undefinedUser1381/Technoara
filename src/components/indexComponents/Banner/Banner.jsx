import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination , Autoplay} from "swiper/modules"
import banner1 from "images/banner/newSlider2-1.jpg"
import banner2 from "images/banner/newSlider3-1.jpg"
import banner3 from "images/banner/newSlider4-1.jpg"
import "swiper/css";
import 'swiper/css/pagination';

export default function Banner() {
  return (
    <div className="w-[100%] h-[11rem] mt-[10rem] xs:h-[15rem] xs:mt-[6rem] sm:h-[20rem] lg:h-[30rem] lg:mt-0">
      <Swiper
        className="h-[100%]"
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination , Autoplay]}
        direction="horizontal"
        autoplay={{delay:1500}}
        loop={true}
        pagination={{ clickable: true , bulletclassName : "swiper-pagination-bullet" , bulletActiveclassName:"swiper-pagination-bullet-active"}}
      >
        <SwiperSlide className="h-[100%]">
          <div className="h-[100%] overflow-hidden rounded-xl">
            <img
              src={banner1}
              className="w-[100%] h-[100%]"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[100%]">
          <div className="overflow-hidden h-[100%] rounded-xl">
            <img
              src={banner2}
              className="w-[100%] h-[100%]"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[100%]">
          <div className="overflow-hidden h-[100%] rounded-xl">
            <img
              src={banner3}
              className="w-[100%] h-[100%]"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
