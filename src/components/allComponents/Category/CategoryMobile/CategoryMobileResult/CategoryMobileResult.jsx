import React, { memo } from "react";
import CategoryResultItems from "../../CategoryResultItems/CategoryResultItems";

const CategoryMobileResult = memo(() => {
  console.log("Cateogry mobile result ");

  return (
    <div className="bg-[#EFF1F5] p-5 h-100 mt-8 rounded-lg">
       <h4 className="font-YekanBakh text-[#021959] font-bold">دسته بندی نتایج</h4>
       <div className='flex flex-col gap-2 mt-5 items-start p-3'>
          <CategoryResultItems className={"mb-2 text-[#021959] flex items-center justify-between w-full hover:text-[#1b3374] cursor-pointer transition-all font-bold"} text={"اسپیکر"} href={"speaker"}/>
          <CategoryResultItems className={"mb-2 text-[#021959] flex items-center justify-between w-full hover:text-[#1b3374] cursor-pointer transition-all font-bold"} text={"کامپیوتر"} href={"computer"}/>
          <CategoryResultItems className={"mb-2 text-[#021959] flex items-center justify-between w-full hover:text-[#1b3374] cursor-pointer transition-all font-bold"} text={"لپ تاپ"} href={"laptop"}/>
          <CategoryResultItems className={"mb-2 text-[#021959] flex items-center justify-between w-full hover:text-[#1b3374] cursor-pointer transition-all font-bold"} text={"کنسول بازی"} href={"console"}/>
          <CategoryResultItems className={"mb-2 text-[#021959] flex items-center justify-between w-full hover:text-[#1b3374] cursor-pointer transition-all font-bold"} text={"هدفون"} href={"headphone"}/>
          <CategoryResultItems className={"mb-2 text-[#021959] flex items-center justify-between w-full hover:text-[#1b3374] cursor-pointer transition-all font-bold"} text={"موبایل"} href={"mobile"}/>
          <CategoryResultItems className={"mb-2 text-[#021959] flex items-center justify-between w-full hover:text-[#1b3374] cursor-pointer transition-all font-bold"} text={"ساعت"} href={"watch"}/>
          <CategoryResultItems className={"mb-2 text-[#021959] flex items-center justify-between w-full hover:text-[#1b3374] cursor-pointer transition-all font-bold"} text={"تبلت"} href={"tablet"}/>
          <CategoryResultItems className={"mb-2 text-[#021959] flex items-center justify-between w-full hover:text-[#1b3374] cursor-pointer transition-all font-bold"} text={"پاوربانک"} href={"powerbank"}/>
       </div>
    </div>
  )
});

export default CategoryMobileResult;
