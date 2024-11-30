import React, { useState } from "react";
import AddModal from "../AddModal/AddModal";
import PagesTitle from "../PagesTitle/PagesTitle";
import Panelboxes from "../PanelBoxes/Panelboxes";
import NotifTable from "./NotifTable/NotifTable";

export default function PanelNotifs() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openNotifModal = () => {
    setIsOpenModal(true);
  };

  const closeNotifModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div className="w-[100%] min-h-screen bg-[#F9FAFB] p-0 lg:p-4 dark:bg-[#111827]">
        <div className="mt-[7rem] w-full mr-auto lg:w-[80%] px-4 text-white">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-3 items-center justify-between">
            <PagesTitle title={"پیام همگانی"}/>
            <div className="flex items-center justify-center gap-2 w-full lg:w-[60%] xl:w-[50%]">
              <div className='flex items-center flex-col justify-end lg:flex-row w-full gap-5 lg:gap-2'>
               <div className="flex items-center justify-end w-full">
               <div onClick={openNotifModal} className='bg-white dark:bg-[#1B2631] p-4 rounded-xl'>
                <span className='font-Kalame hover:bg-blue-600 hover:text-white text-black dark:text-white cursor-pointer transition-all dark:hover:bg-blue-600 dark:bg-[#2C3D4F] bg-[#F9FAFB] rounded-xl px-4 p-1'>اضافه کردن پیام</span>
               </div>
               </div>
               <div className="flex items-center justify-end w-full">
               <div className='flex bg-white dark:bg-[#1B2631] p-2 px-3 rounded-xl'>
               <div className='bg-white dark:bg-[#1B2631] p-2 rounded-xl'>
                <span className='font-Kalame hover:bg-blue-600 hover:text-white text-black dark:text-white px-4 cursor-pointer transition-all dark:hover:bg-blue-600 dark:bg-[#2C3D4F] bg-[#F9FAFB] rounded-xl p-1'>موفق</span>
               </div>
               <div className='bg-white dark:bg-[#1B2631] p-2 rounded-xl'>
                <span className='font-Kalame hover:bg-blue-600 hover:text-white text-black dark:text-white px-4 cursor-pointer transition-all dark:hover:bg-blue-600 dark:bg-[#2C3D4F] bg-[#F9FAFB] rounded-xl p-1'>هشدار</span>
               </div>
               <div className='bg-white dark:bg-[#1B2631] p-2 rounded-xl'>
                <span className='font-Kalame hover:bg-blue-600 hover:text-white text-black dark:text-white px-4 cursor-pointer transition-all dark:hover:bg-blue-600 dark:bg-[#2C3D4F] bg-[#F9FAFB] rounded-xl p-1'>خطا</span>
               </div>
               <div className='bg-white dark:bg-[#1B2631] p-2 rounded-xl'>
                 <span className='font-Kalame hover:bg-blue-600 hover:text-white text-black dark:text-white cursor-pointer transition-all dark:hover:bg-blue-600 dark:bg-[#2C3D4F] bg-[#F9FAFB] rounded-xl px-4 p-1'>همه</span>
               </div>
               </div>
              </div>
             </div>
            </div>
          </div>
          <div className='my-10 flex-wrap gap-4 sm:gap-12 xl:flex-nowrap xl:gap-3 flex w-full items-center justify-between'>
            <Panelboxes>
            <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
            </div>
            <div className='flex font-Kalame flex-col gap-2'>
              <span className='text-black dark:text-[#BFBFD6]'>پیام ها</span>
              <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>5 پیام</span>
            </div>
            </Panelboxes>
            <Panelboxes>
            <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-300"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
            </div>
            <div className='flex font-Kalame flex-col gap-2'>
              <span className='text-black dark:text-[#BFBFD6]'>پیام موفق</span>
              <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>4 پیام</span>
            </div>
            </Panelboxes>
            <Panelboxes>
            <div className='w-16 h-16 bg-red-400 rounded-full flex items-center justify-center'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-700"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>
            </div>
            <div className='flex font-Kalame flex-col gap-2'>
              <span className='text-black dark:text-[#BFBFD6]'>پیام ناموفق</span>
              <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>0 پیام</span>
            </div>
            </Panelboxes>
            <Panelboxes>
            <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
            </div>
            <div className='flex font-Kalame flex-col gap-2'>
              <span className='text-black dark:text-[#BFBFD6]'>پیام هشدار</span>
              <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>1 پیام</span>
            </div>
            </Panelboxes>
          </div>
          <div className="mt-10">
            <NotifTable />
          </div>
        </div>
      </div>
      {isOpenModal && <AddModal closeModal={closeNotifModal} />}
    </>
  );
}
