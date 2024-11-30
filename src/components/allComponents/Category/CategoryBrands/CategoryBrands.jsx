import React , {memo} from 'react'
import CategoryBrandsBox from "../CategoryBrandsBox/CategoryBrandsBox";

const CategoryBrands = memo(() => {
  return (
    <div className='hidden lg:flex lg:flex-col lg:gap-3 bg-white lg:mt-10 lg:p-3 shadow-lg rounded-md'>
       <div className='flex items-center pb-3 border-b-[2px] justify-between'>
         <h4 className='font-YekanBakh'>برندها</h4>
         <div className='relative'>
            <input type="text" className='font-YekanBakh outline-none p-1' placeholder='جستجوی برند...'/>
            <div className='absolute top-1 text-gray-400 right-[-35px] w-6 h-6'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
         </div>
       </div>
       <div className='overflow-y-scroll h-[20rem]'>
         <CategoryBrandsBox className={"mb-4 text-[#021959] font-bold"} brand={"اپل"}/>
         <CategoryBrandsBox className={"mb-4 text-[#021959] font-bold"} brand={"سامسونگ"}/>
         <CategoryBrandsBox className={"mb-4 text-[#021959] font-bold"} brand={"شیاعومی"}/>
         <CategoryBrandsBox className={"mb-4 text-[#021959] font-bold"} brand={"نوکیا"}/>
         <CategoryBrandsBox className={"mb-4 text-[#021959] font-bold"} brand={"شیاعومی"}/>
         <CategoryBrandsBox className={"mb-4 text-[#021959] font-bold"} brand={"بلنسیاگا"}/>
         <CategoryBrandsBox className={"mb-4 text-[#021959] font-bold"} brand={"شیاعومی"}/>
         <CategoryBrandsBox className={"mb-4 text-[#021959] font-bold"} brand={"گوچی"}/>
         <CategoryBrandsBox className={"mb-4 text-[#021959] font-bold"} brand={"گوچی"}/>
         <CategoryBrandsBox className={"mb-4 text-[#021959] font-bold"} brand={"گوچی"}/>
         <CategoryBrandsBox className={"mb-4 text-[#021959] font-bold"} brand={"گوچی"}/>
         <CategoryBrandsBox className={"mb-4 text-[#021959] font-bold"} brand={"گوچی"}/>
         <CategoryBrandsBox className={"mb-4 text-[#021959] font-bold"} brand={"فندی"}/>
       </div>
    </div>
  ) 
})

export default CategoryBrands;