import React from "react";
import { Link } from "react-router-dom";

export default function PanelDayFilter() {
  return (
    <div className="flex items-center self-end lg:self-auto justify-center bg-white border dark:bg-[#1B2631] p-3 rounded-lg dark:border-gray-600 gap-3">
      <Link to={"?days=7"} className="font-Kalame p-2 px-5 rounded-xl bg-[#F9FAFB] cursor-pointer transition-all duration-200 dark:hover:bg-blue-500 hover:bg-blue-600 *:hover:text-white dark:bg-[#2C3D4F]">
        <span className="text-black dark:text-white">7 روز</span>
      </Link>
      <Link to={"?days=15"} className="font-Kalame p-2 px-5 rounded-xl bg-[#F9FAFB] cursor-pointer transition-all duration-200 dark:hover:bg-blue-500 hover:bg-blue-600 *:hover:text-white dark:bg-[#2C3D4F]">
        <spa className="text-black dark:text-white" n>
          15 روز
        </spa>
      </Link>
      <Link to={"?days=30"} className="font-Kalame p-2 px-5 rounded-xl bg-[#F9FAFB] cursor-pointer transition-all duration-200 dark:hover:bg-blue-500 hover:bg-blue-600 *:hover:text-white dark:bg-[#2C3D4F]">
        <spa className="text-black dark:text-white" n>
          30 روز
        </spa>
      </Link>
    </div>
  );
}
