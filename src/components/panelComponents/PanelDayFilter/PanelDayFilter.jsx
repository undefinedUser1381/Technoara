import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function PanelDayFilter() {

  const [serachParams , setSearchParams] = useSearchParams();
  const searchedParam = serachParams.get("days");

  return (
    <div className="flex items-center self-end lg:self-auto justify-center bg-white border dark:bg-[#1B2631] p-3 rounded-lg dark:border-gray-600 gap-3">
      <Link to={"?days=7"} className={`${+searchedParam == 7 ? "dark:bg-blue-500" : "bg-[#F9FAFB]"} font-Kalame p-2 px-5 rounded-xl cursor-pointer transition-all duration-200 dark:hover:bg-blue-500 hover:bg-blue-600 *:hover:text-white dark:bg-[#2C3D4F]`}>
        <span className="text-black dark:text-white">7 روز</span>
      </Link>
      <Link to={"?days=15"} className={`${+searchedParam == 15 ? "dark:bg-blue-500" : "bg-[#F9FAFB]"} font-Kalame p-2 px-5 rounded-xl cursor-pointer transition-all duration-200 dark:hover:bg-blue-500 hover:bg-blue-600 *:hover:text-white dark:bg-[#2C3D4F]`}>
        <span className="text-black dark:text-white">
          15 روز
        </span>
      </Link>
      <Link to={"?days=30"} className={`${+searchedParam == 30 ? "dark:bg-blue-500" : "bg-[#F9FAFB]"} font-Kalame p-2 px-5 rounded-xl cursor-pointer transition-all duration-200 dark:hover:bg-blue-500 hover:bg-blue-600 *:hover:text-white dark:bg-[#2C3D4F]`}>
        <span className="text-black dark:text-white">
          30 روز
        </span>
      </Link>
    </div>
  );
}
