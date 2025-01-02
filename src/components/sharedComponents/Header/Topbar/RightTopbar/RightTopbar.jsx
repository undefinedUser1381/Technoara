import React from "react";

function RightTopbar() {
  return (
    <div className="flex items-center justify-between w-[45%]">
      <div className="w-[15%]">
        <div className="logo">
          <span>تکنو</span>
          <span>آرا</span>
        </div>
      </div>
      <div className="w-[75%]">
        <input
          type="text"
          placeholder="جستجوی محصول و برند محصول ..."
          className="p-3 border-2 transition-all outline-none focus:border-2 focus:border-primary font-YekanBakh font-bold text-secondary w-full bg-[#F3F5F8]"
        />
      </div>
    </div>
  );
}

export default RightTopbar;
