import React, { useState } from 'react'
import PagesTitle from '../PagesTitle/PagesTitle'
import Panelboxes from '../PanelBoxes/Panelboxes'
import ProductsTable from './ProductsTable/ProductsTable'
import ProductEdit from './ProductEdit/ProductEdit'

export default function PanelProducts() {

  const [formStatus , setFormStatus] = useState("اضافه محصول")

  return (
    <div className='w-[100%] min-h-screen bg-[#F9FAFB] p-0 lg:p-4 dark:bg-[#111827]'>
     <div className='mt-[7rem] w-full mr-auto lg:w-[80%] px-4 text-white'>
       <div className='flex gap-6 lg:gap-0 flex-col lg:flex-row items-center justify-between'>
         <PagesTitle title={"محصولات"}/>
         <div className='flex items-center justify-end w-full gap-3'>
          <div className='bg-white sm:flex-row flex-col sm:w-[75%] lg:w-[50%] w-full border border-gray-200 dark:border-gray-600 dark:bg-[#1B2631] p-3 rounded-lg flex items-center gap-4 justify-between font-Kalame'>
          <div className='bg-[#F9FAFB] w-full sm:w-[45%] lg:w-[35%] py-2 text-center text-black hover:text-white dark:text-white dark:bg-[#2C3D4F] rounded-xl transition-all dark:hover:bg-blue-600 hover:bg-blue-600 cursor-pointer p-2 px-4'><span>رایگان</span></div>
          <div className='bg-[#F9FAFB] w-full sm:w-[45%] lg:w-[45%] py-2 text-center text-black hover:text-white dark:text-white dark:bg-[#2C3D4F] rounded-xl transition-all dark:hover:bg-blue-600 hover:bg-blue-600 cursor-pointer p-2 px-4'><span>رایگان غیر</span></div>
          <div className='bg-[#F9FAFB] w-full sm:w-[45%] lg:w-[45%] py-2 text-center text-black hover:text-white dark:text-white dark:bg-[#2C3D4F] rounded-xl transition-all dark:hover:bg-blue-600 hover:bg-blue-600 cursor-pointer p-2 px-4'><span>در پلن ویژه</span></div>
          <div className='bg-[#F9FAFB] w-full sm:w-[45%] lg:w-[35%] py-2 text-center text-black hover:text-white dark:text-white dark:bg-[#2C3D4F] rounded-xl transition-all dark:hover:bg-blue-600 hover:bg-blue-600 cursor-pointer p-2 px-4'><span>همه</span></div>
         </div>
        </div>
       </div>
       <div className='mt-12 flex-wrap gap-4 sm:gap-12 xl:flex-nowrap xl:gap-3 flex w-full items-center justify-between'>
         <Panelboxes>
           <div className='w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-300"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
           </div>
           <div className='flex font-Kalame flex-col gap-2'>
            <span className='text-black dark:text-[#BFBFD6]'>محصول ها</span>
            <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>11 محصول</span>
           </div>
         </Panelboxes>
         <Panelboxes>
           <div className='w-16 h-16 bg-green-700 rounded-full flex items-center justify-center'> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-300"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" /></svg>
           </div>
           <div className='flex font-Kalame flex-col gap-2'>
            <span className='text-black dark:text-[#BFBFD6]'>محصول رایگان</span>
            <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>2 محصول</span>
           </div>
         </Panelboxes>
         <Panelboxes>
           <div className='w-16 h-16 bg-red-700 rounded-full flex items-center justify-center'> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-300"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>

           </div>
           <div className='flex font-Kalame flex-col gap-2'>
            <span className='text-black dark:text-[#BFBFD6]'>محصول رایگان</span>
            <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>2 محصول</span>
           </div>
         </Panelboxes>
         <Panelboxes>
           <div className='w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center'> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-300"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>
           </div>
           <div className='flex font-Kalame flex-col gap-2'>
            <span className='text-black dark:text-[#BFBFD6]'>پلن ویژه</span>
            <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>12 محصول</span>
           </div>
         </Panelboxes>
       </div>
       <div className='mt-10'>
         <ProductsTable/>
       </div>
       <div className='mt-9 bg-white dark:bg-[#1B2631] p-5 rounded-lg'>
         <div className='flex items-center justify-between'>
           <h4 className='font-Kalame w-full text-[1.1rem] relative text-black pr-8 dark:text-white'> فرم ویرایش و اضافه محصول
            <div className='bg-blue-600 w-5 h-5 rounded-full absolute top-1 right-0'></div>
           </h4>
         </div>
         <div className='flex w-full mt-5 lg:mt-0 p-2 items-center justify-end'>
              <span onClick={(e) => setFormStatus(e.target.innerHTML)} className='font-Kalame dark:text-white bg-blue-600 p-1 rounded-tr-xl rounded-br-xl py-2 cursor-pointer border-l-8 border-white dark:border-[#1B2631] px-3'>ادیت محصول</span>
              <span onClick={(e) => setFormStatus(e.target.innerHTML)} className='font-Kalame dark:text-white bg-blue-600 p-1 rounded-tl-xl rounded-bl-xl px-3 py-2 cursor-pointer'>اضافه محصول</span>
           </div>
         <ProductEdit submit={formStatus}/>
       </div>
     </div>
    </div>
  )
}
