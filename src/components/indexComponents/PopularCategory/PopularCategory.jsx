import React from "react";
import TitleBox from "../TitleBox/TitleBox";
import PopularCategoryBox from "./PopularCategoryBox/PopularCategoryBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SlideButtons from "../../sharedComponents/SlideButtons/SlideButtons";

import "swiper/css";
import 'swiper/css/navigation';

export default function PopularCategory() {
  return (
    <section className="mt-20 xl:mt-10">
      <TitleBox title={"دسته بندی های محبوب"} link={"مشاهده همه"} />
        <div className="flex items-center justify-between relative mt-12 w-[90%] mx-auto">
        <Swiper
          direction="horizontal"
          className="p-3"
          modules={[Navigation]}
          navigation={{
            nextEl : ".swiper-button-next",
            prevEl : ".swiper-button-prev"
          }}
          slidesPerView={2}
          breakpoints={{
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 8,
              width:1500
            },
          }}
        >
          <SwiperSlide>
            <PopularCategoryBox />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCategoryBox />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCategoryBox />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCategoryBox />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCategoryBox />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCategoryBox />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCategoryBox />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCategoryBox />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCategoryBox />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCategoryBox />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCategoryBox />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCategoryBox />
          </SwiperSlide>
          <SlideButtons />
        </Swiper>
      </div>
    </section>
  );
}
