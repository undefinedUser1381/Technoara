import React from "react";
import { memo } from "react";

const TopDetails = memo(() => {
  return (
    <div className="bg-[#F8F9FB] mt-[9rem] p-5 lg:mt-5">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex w-full lg:w-[50%] text-secondary font-YekanBakh items-center justify-start gap-2">
          <p>خانه</p>
          <div>-</div>
          <p>موبایل</p>
          <div>-</div>
          <p>گوشی فلان و فلان مدل</p>
        </div>
        <div className="flex items-center justify-between w-full mt-8 md:mt-5 md:w-[25rem] lg:w-[25%] xl:w-[17rem]">
          <div className="font-YekanBakh flex items-center justify-center gap-2 text-[1rem]">
            <p>علاقه مندی</p>
            <div className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </div>
          <div className="font-YekanBakh flex items-center justify-center gap-2 text-[1rem]">
            <p>اشتراک گداری</p>
            <div className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TopDetails;
