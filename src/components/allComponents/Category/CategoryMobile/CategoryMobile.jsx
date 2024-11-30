import React, {memo} from 'react'
import SortProducts from './SortProducts/SortProducts';
import CategoryMobileBrand from './CateogoryMobileBrand/CategoryMobileBrand';
import CategoryMobileResult from './CategoryMobileResult/CategoryMobileResult';

const CategoryMobile = memo(({onClick,status}) => {
  
  console.log("category mobile rendred");

  return (
    <div className={`bg-white overflow-y-scroll shadow-custom rounded-lg p-5 transition-all duration-200 lg:hidden fixed left-0 right-0 ${status ? "bottom-0" : "bottom-[-30rem]"} h-[30rem]`}>
        {/* Close button */}
       <div onClick={onClick} className='w-full cursor-pointer flex items-center justify-start gap-2'>
         <div className='w-6 h-6 text-red-700'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
           </svg>
         </div>
         <p className='font-bold font-YekanBakh'>بستن</p>
       </div>  

       <SortProducts/>
       <CategoryMobileResult/>
       <CategoryMobileBrand/> 
    </div>
  )
});

export default CategoryMobile;
