import PagesTitle from "@/components/panelComponents/PagesTitle/PagesTitle";
import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Panelboxes from "@/components/panelComponents/PanelBoxes/Panelboxes";
import UserPurchases from "./UserPurchases/UserPurchases";
import UserTickets from "./UserTickets/UserTickets";
import EditUserBox from "./EditUserBox/EditUserBox";

export default function PanelUserDetails() {
  // const param = useParams();
  // console.log(param , ": param"); // id : userID
  return (
    <div className="w-[100%] min-h-screen bg-[#F9FAFB] p-0 lg:p-4 dark:bg-[#111827]">
      <div className="mt-[7rem] w-full mr-auto lg:w-[80%] px-4 text-white">
        <div className="flex items-center justify-between">
          <PagesTitle title={"جزییات کاربر"}/>
          <Link to={"/panel/users"} className="rounded-full w-10 h-10 flex items-center dark:bg-[#1B2631] bg-white border border-gray-300 dark:border-gray-400 text-black dark:text-white justify-center">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
          </Link>
        </div>
        {/* Top Sections */}
        <div className="mt-10 mb-5 flex-wrap gap-4 sm:gap-12 xl:flex-nowrap xl:gap-3 flex w-full items-center justify-between">
         <Panelboxes>
           <div className='w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center'> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-700"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
           </div>
           <div className='flex font-Kalame flex-col gap-2'>
           <span className='text-black dark:text-[#BFBFD6]'>نام کاربر</span>
           <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>کاربر جدید</span>
          </div>
         </Panelboxes>
         <Panelboxes>
           <div className='w-16 h-16 bg-green-300 rounded-full flex items-center justify-center'> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-700"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
           </div>
           <div className='flex font-Kalame flex-col gap-2'>
           <span className='text-black dark:text-[#BFBFD6]'>شماره همراه کاربر</span>
           <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>0999999999</span>
          </div>
         </Panelboxes>
         <Panelboxes>
           <div className='w-16 h-16 bg-red-300 rounded-full flex items-center justify-center'> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-700"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" /></svg>
           </div>
           <div className='flex font-Kalame flex-col gap-2'>
           <span className='text-black dark:text-[#BFBFD6]'>ایمیل کاربر</span>
           <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>ندارد</span>
          </div>
         </Panelboxes>
         <Panelboxes>
           <div className='w-16 h-16 bg-purple-300 rounded-full flex items-center justify-center'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-700"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" /></svg>
           </div>
           <div className='flex font-Kalame flex-col gap-2'>
           <span className='text-black dark:text-[#BFBFD6]'>نقش کاربر</span>
           <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>کاربر</span>
          </div>
         </Panelboxes>
        </div>
        {/* Bottom Sections */}
        <div className="flex-wrap gap-4 sm:gap-12 xl:flex-nowrap xl:gap-3 flex w-full items-center justify-between">
         <Panelboxes>
           <div className='w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center'> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-700"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
           </div>
           <div className='flex font-Kalame flex-col gap-2'>
           <span className='text-black dark:text-[#BFBFD6]'>تعداد خرید ها</span>
           <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>1</span>
          </div>
         </Panelboxes>
         <Panelboxes>
           <div className='w-16 h-16 bg-green-300 rounded-full flex items-center justify-center'> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-700"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>
           </div>
           <div className='flex font-Kalame flex-col gap-2'>
           <span className='text-black dark:text-[#BFBFD6]'>کل مبلغ خرید</span>
           <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>0 تومان</span>
          </div>
         </Panelboxes>
         <Panelboxes>
           <div className='w-16 h-16 bg-red-300 rounded-full flex items-center justify-center'> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-700"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" /></svg>
           </div>
           <div className='flex font-Kalame flex-col gap-2'>
           <span className='text-black dark:text-[#BFBFD6]'>تعداد تیکت ها</span>
           <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>1 تیکت</span>
          </div>
         </Panelboxes>
         <Panelboxes>
           <div className='w-16 h-16 bg-purple-300 rounded-full flex items-center justify-center'> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-700"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" /></svg>
           </div>
           <div className='flex font-Kalame flex-col gap-2'>
           <span className='text-black dark:text-[#BFBFD6]'>موجودی ولت</span>
           <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>0 تومان</span>
          </div>
         </Panelboxes>
        </div>
        <div className="mt-16 shadow-md p-5 rounded-lg bg-white dark:bg-[#1B2631]">
           <h3 className="font-Kalame text-[1.1rem] text-black dark:text-white pr-8 relative">خرید های کاربر
             <span className="w-6 h-6 rounded-full bg-blue-500 absolute top-0 right-0"></span>
           </h3>
           <div className="mt-8 pr-5">
             <UserPurchases />
           </div>
        </div>
        <div className="mt-16 shadow-md p-5 rounded-lg bg-white dark:bg-[#1B2631]">
           <h3 className="font-Kalame text-[1.1rem] pr-8 text-black dark:text-white relative">تیکت های کاربر
             <span className="w-6 h-6 rounded-full bg-blue-500 absolute top-0 right-0"></span>
           </h3>
           <div className="mt-8 pr-5">
             <UserTickets />
           </div>
        </div>
        <div className="mt-16 shadow-md p-5 rounded-lg bg-white dark:bg-[#1B2631]">
          <h3 className="font-Kalame text-[1.1rem] pr-8 text-black dark:text-white relative">فرم ویرایش کاربر
             <span className="w-6 h-6 rounded-full bg-blue-500 absolute top-0 right-0"></span>
          </h3>
          <div className="mt-8 pr-5">
             <EditUserBox />
           </div>
        </div>
      </div>
    </div>
  );
}