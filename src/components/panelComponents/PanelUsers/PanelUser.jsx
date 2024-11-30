import React from "react";
import PagesTitle from "../PagesTitle/PagesTitle";
import Panelboxes from "../PanelBoxes/Panelboxes";
import UsersTable from "./UsersTable/UsersTable";

export default function PanelUser() {
  return (
    <div className="w-[100%] min-h-screen bg-[#F9FAFB] p-0 lg:p-4 dark:bg-[#111827]">
      <div className="mt-[7rem] w-full mr-auto lg:w-[80%] px-4 text-white">
        <PagesTitle title={"کاربران"}/>
       <div className="my-10 flex-wrap gap-4 sm:gap-12 xl:flex-nowrap xl:gap-3 flex w-full items-center justify-between">
         <Panelboxes>
          <div className='w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center'> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-700"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
          </div>
          <div className='flex font-Kalame flex-col gap-2'>
           <span className='text-black dark:text-[#BFBFD6]'>کاربران</span>
           <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>18 کاربر</span>
         </div>
         </Panelboxes>
         <Panelboxes>
          <div className='w-16 h-16 bg-green-300 rounded-full flex items-center justify-center'> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-700"> <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>
          </div>
          <div className='flex font-Kalame flex-col gap-2'>
           <span className='text-black dark:text-[#BFBFD6]'>کاربران مدیر</span>
           <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>3 مدیر</span>
         </div>
         </Panelboxes>
         <Panelboxes>
          <div className='w-16 h-16 bg-red-300 rounded-full flex items-center justify-center'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-700"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" /></svg>
          </div>
          <div className='flex font-Kalame flex-col gap-2'>
           <span className='text-black dark:text-[#BFBFD6]'>کاربران مسدود</span>
           <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>3 کاربر</span>
         </div>
         </Panelboxes>
         <Panelboxes>
          <div className='w-16 h-16 bg-purple-300 rounded-full flex items-center justify-center'> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-700"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>
          </div>
          <div className='flex font-Kalame flex-col gap-2'>
           <span className='text-black dark:text-[#BFBFD6]'>همه کاربران</span>
           <span className='text-black text-[1.1rem] dark:text-[#BFBFD6]'>18 کاربر</span>
         </div>
         </Panelboxes>
      </div>
      <div className="mt-10">
       <UsersTable />
      </div>
     </div>
    </div>
  );
}
