import React from "react";
import { Link } from "react-router-dom";
import Cat1Src from "/public/images/category-box/cat3-1.jpg"
import Cat2Src from "/public/images/category-box/cat6.jpg"
import Cat3Src from "/public/images/category-box/headphone.jpg"

export default function CategoryBox() {
  return (
    <div className="flex items-start justify-between mt-[80px] w-[100%] xl:w-[53%] xl:mt-0 h-[95%]">
      <div className="h-[100%] w-[30%]">
      <Link to={"category/speaker"}>
        <div className="overflow-hidden rounded-3xl h-[100%]">
          <img
            className="w-full h-full"
            src={Cat1Src}
            alt=""
          />
        </div>
      </Link>
      </div>
      <div className="h-[100%] w-[30%]">
      <Link to={"category/powerbank"}>
        <div className="overflow-hidden rounded-3xl h-[100%]">
          <img
            className="w-full h-full"
            src={Cat2Src}
            alt=""
          />
        </div>
      </Link>
      </div>
      <div className="h-[100%] w-[30%]">
      <Link to={"category/game"}>
        <div className="overflow-hidden rounded-3xl h-[100%]">
          <img
            className="w-full h-full"
            src={Cat3Src}
            alt=""
          />
        </div>
      </Link>
      </div>
    </div>
  );
}
