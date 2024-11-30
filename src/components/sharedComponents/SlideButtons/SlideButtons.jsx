import React from "react";
import { useSwiper } from "swiper/react";

export default function SlideButtons() {
  const swiper = useSwiper();

  return (
    <>
     <button onClick={() => swiper.slideNext()} className="swiper-button-next">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      <button  onClick={() => swiper.slidePrev()} className="swiper-button-prev">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
       </svg>
      </button>
    </>
  );
}
