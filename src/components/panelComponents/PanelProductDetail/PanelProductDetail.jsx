import React from "react";
import { Link } from "react-router-dom";
import PagesTitle from "../PagesTitle/PagesTitle";
import Panelboxes from "../PanelBoxes/Panelboxes";
import ProductEdit from "../PanelProducts/ProductEdit/ProductEdit";

export default function PanelProductDetail() {
  return (
    <div className="w-[100%] min-h-screen bg-[#F9FAFB] p-0 lg:p-4 dark:bg-[#111827]">
      <div className="mt-[7rem] w-full mr-auto lg:w-[80%] px-4 text-white">
        <div className="flex items-center justify-between">
          <PagesTitle title={"جزییات محصولات"}/>
          <Link to={"/panel/products"} className="rounded-full w-10 h-10 flex items-center dark:bg-[#1B2631] bg-white border border-gray-300 dark:border-gray-400 text-black dark:text-white justify-center">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
          </Link>
        </div>
        <div className='mt-12 flex-wrap gap-4 sm:gap-12 xl:flex-nowrap xl:gap-3 flex w-full items-center justify-between'>
         <Panelboxes>
           <div className='w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-300"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
           </div>
           <div className='flex font-Kalame flex-col gap-2'>
            <span className='text-black dark:text-[#BFBFD6]'>عنوان محصول</span>
            <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>محصول 2</span>
           </div>
         </Panelboxes>
         <Panelboxes>
           <div className='w-16 h-16 bg-green-700 rounded-full flex items-center justify-center'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-300">
             <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
           </div>
           <div className='flex font-Kalame flex-col gap-2'>
            <span className='text-black dark:text-[#BFBFD6]'>قیمت محصول</span>
            <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>2,400,000 تومان</span>
           </div>
         </Panelboxes>
         <Panelboxes>
           <div className='w-16 h-16 bg-red-700 rounded-full flex items-center justify-center'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-200">
             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
           </div>
           <div className='flex font-Kalame flex-col gap-2'>
            <span className='text-black dark:text-[#BFBFD6]'>تعداد فروش</span>
            <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>0 عدد</span>
           </div>
         </Panelboxes>
         <Panelboxes>
           <div className='w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-200">
             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>
           </div>
           <div className='flex font-Kalame flex-col gap-2'>
            <span className='text-black dark:text-[#BFBFD6]'>مبلغ فروش</span>
            <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>0 تومان</span>
           </div>
         </Panelboxes>
        </div>
        <div className='mt-9 bg-white dark:bg-[#1B2631] p-5 rounded-lg'>
         <div className='flex items-center justify-between'>
           <h4 className='font-Kalame w-full text-[1.1rem] relative text-black pr-8 dark:text-white'> فرم ویرایش و اضافه محصول
            <div className='bg-blue-600 w-5 h-5 rounded-full absolute top-1 right-0'></div>
           </h4>
         </div>
         <ProductEdit submit={"ادیت محصول"}/>
       </div>
      </div>
    </div>
  );
}
