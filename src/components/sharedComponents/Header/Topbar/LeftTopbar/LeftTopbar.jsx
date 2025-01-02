import React from "react";
import { Link } from "react-router-dom";

export default function LeftTopbar() {
  return (
    <div className="flex items-center justify-center gap-4 w-[19rem]">
      <Link
        to={"register"}
        className="w-[45%] font-YekanBakh bg-white rounded-lg shadow-lg p-3"
      >
        ورود / عضویت
      </Link>
      <button className="w-[45%] font-YekanBakh bg-primary shadow-md shadow-primary text-white rounded-md p-3">
        <span className="font-Kalame">
          سبد خرید <span>0</span>
        </span>
      </button>
    </div>
  );
}
