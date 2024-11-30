import React,{memo} from 'react'

const SortProducts = memo(() => {
  console.log("Sort products rendered");
  return (
    <div className='bg-[#EFF1F5] font-YekanBakh rounded-xl mt-8 p-3'>
        <h4 className='text-[#021959] font-bold'>مرتب سازی بر اساس : </h4>
        <ul className='flex items-center h-10 mt-6 mb-4 text-[#021959] font-bold *:cursor-pointer justify-around flex-wrap'>
            <li className='transition-all hover:text-[#0650A3]'>ارزان ترین</li>
            <li className='transition-all hover:text-[#0650A3]'>گرانترین</li>
            <li className='transition-all hover:text-[#0650A3]'>رایگان</li>
            <li className='transition-all hover:text-[#0650A3]'>غیررایگان</li>
        </ul>
    </div>
  )
}) 

export default SortProducts;
