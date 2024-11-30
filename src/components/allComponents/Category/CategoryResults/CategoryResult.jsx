import React , {memo} from 'react'
import CategoryResultItems from '../CategoryResultItems/CategoryResultItems';

const CategoryResult = memo(() => {
  console.log("category result");
  return (
    <div className='hidden lg:flex lg:flex-col lg:w-full bg-white rounded-md shadow-lg lg:p-5 lg:h-auto'>
       <h4 className='font-YekanBakh text-[0.9rem] border-b-[2px] pb-4'>دسته بندی نتایج</h4>
       <div className='flex flex-col gap-2 items-start p-3'>
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
})

export default CategoryResult;