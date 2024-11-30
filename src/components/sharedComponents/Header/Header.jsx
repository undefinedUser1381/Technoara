import React, { useContext } from "react";
import { useState , memo } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext/AuthContext";
import Cookies from "js-cookie";

const Header = memo(() => {

  const auth = useContext(AuthContext);

  console.log(auth.isLoggedIn);

  const [openMobileMenu,setOpenMobileMenu] = useState(false);

  return(
    <header className="px-4 py-4 bg-white w-full text-center shadow-lg">
    {/* Topbar */}
    <div className="hidden lg:flex pb-8 items-center justify-between border-[#eeeff4] border-b-2 ">
      <div className="flex items-center justify-between w-[45%]">
        <div className="w-[15%]">
          <div className="logo">
            <span>تکنو</span>
            <span>آرا</span>
          </div>
        </div>
        <div className="w-[75%]">
          <input
            type="text"
            placeholder="جستجوی محصول و برند محصول ..."
            className="p-3 border-2 transition-all outline-none focus:border-2 focus:border-primary font-YekanBakh font-bold text-secondary w-full bg-[#F3F5F8]"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 w-[19rem]">
        {
          auth.isLoggedIn === true ? (
           <Link to={"dashboard/index"} className="w-[45%] font-YekanBakh bg-white rounded-lg shadow-lg p-3">
             {/* {auth.userInformation.user_info.first_name} */}یسلسسل
           </Link>
          ) : (
          <Link to={"register"} className="w-[45%] font-YekanBakh bg-white rounded-lg shadow-lg p-3">
             ورود / عضویت
          </Link>
          )
        }
        <button className="w-[45%] font-YekanBakh bg-primary shadow-md shadow-primary text-white rounded-md p-3">
          <span className="font-Kalame">سبد خرید <span>0</span></span>
        </button>
      </div>
    </div>
    {/* Navbar */}
    <div className="hidden lg:flex items-center mt-5 p-3 pb-4 justify-between">
      <nav className="lg:w-[54rem] xl:w-[57rem]">
        <ul className="*:font-YekanBakh *:text-secondary *:font-semibold *:p-2 flex items-center justify-between">
          <li className="group border-l-2 flex pl-5 cursor-pointer relative items-center justify-between w-[22%]">
            <svg
              fill="#021959"
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M13,4 L13,11 L20,11 L20,4 L13,4 Z M11,4 L4,4 L4,11 L11,11 L11,4 Z M13,20 L20,20 L20,13 L13,13 L13,20 Z M11,20 L11,13 L4,13 L4,20 L11,20 Z M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z"
              />
            </svg>
            <p>دسته بندی محصولات</p>
            <ul className="absolute z-50 transition-all opacity-0 w-48 top-[4.5rem] right-0 invisible hover:opacity-100 hover:visible group-hover:visible group-hover:opacity-100 *:w-full *:p-3 text-right bg-[#eef0f4]">
              <li className="hover:bg-white">موبایل</li>
              <li className="hover:bg-white">گیمینگ</li>
              <li className="hover:bg-white">پاور بانک</li>
              <li className="hover:bg-white">اسپیکر</li>
              <li className="hover:bg-white">کامپیوتر</li>
              <li className="hover:bg-white">تبلت</li>
              <li className="hover:bg-white">هدفون</li>
              <li className="hover:bg-white">لپ تاپ</li>
            </ul>
          </li>
          <li>صفحه اصلی</li>
          <li>فروشگاه</li>
          <li>صفحه محصول</li>
          <li>وبلاگ</li>
          <li>سوالات متداول</li>
          <li>تماس با ما</li>
          <li>درباره ما</li>
        </ul>
      </nav>
        <h3 className="font-Dorna text-primary text-[1.1rem] font-bold">
          شگفت انگیز شو
        </h3>
    </div>

    {/* Mobile */}
    <div className="fixed top-0 left-0 right-0 z-20 p-5 shadow-lg bg-white flex flex-col lg:hidden">
      <div className="flex items-center justify-between w-full">
        <div onClick={() => setOpenMobileMenu(true)} className="w-13 h-11 cursor-pointer shadow-lg p-2 rounded-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-full h-full">
          <path fillRule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm6 4.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
        </svg>
        </div>
        <div className="logo text-[1.5rem]">
          <span>تکنو</span>
          <span>آرا</span>
        </div>
      </div>
      <div className="flex items-center mt-4 mb-2 justify-between w-full flex-wrap">
         <div className="w-[100%] xs:w-[45%] relative shadow-md">
           <input type="text" className="w-full font-YekanBakh outline-none transition-all border-2 focus:border-2 focus:border-primary p-3" placeholder="جستجو ..."/>
           <div className="absolute left-4 top-3 w-6 h-6">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-full h-full">
            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" />
          </svg>
           </div>
         </div>
         <div className="w-[100%] mt-4 xs:mt-0 xs:w-[35%] flex items-center justify-center xs:justify-end gap-3">
          {
            auth.isLoggedIn ? (
             <Link to={"/dashboard/index"} className="w-[2.5rem] cursor-pointer rounded-md shadow-lg flex items-center justify-center p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
             </Link>
            ) : (
             <div className="w-[2.5rem] cursor-pointer rounded-md shadow-lg flex items-center justify-center p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            )
          }
          <button className="w-[6rem] md:w-[6rem] font-Kalame bg-primary shadow-md shadow-primary text-white rounded-md p-2">خرید 0</button>
         </div>
      </div>
      {/* Mobile Menu */}
      <div className={`fixed z-50 lg:hidden transition-all duration-300 p-5 ${openMobileMenu ? "right-0" : "right-[-65rem]"} top-0 bottom-0 w-full bg-[rgba(255,255,255,0.95)]`}>
        <div className="w-full flex items-center justify-end">
          <div onClick={() => setOpenMobileMenu(false)} className="w-10 h-10 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
           </svg>
          </div>
        </div>
        <div className="flex items-center justify-between my-4">
         <div className="font-Dorna text-[1.6rem]">
            <span>تکنو</span>
            <span className="text-primary">آرا</span>
          </div>
          <h3 className="font-Dorna text-primary text-[1rem] font-bold">
            شگفت انگیز شو
          </h3>
        </div>
         <div className="w-full my-4 relative shadow-md">
           <input type="text" className="w-full font-YekanBakh outline-none transition-all border-2 focus:border-2 focus:border-primary p-3" placeholder="جستجو ..."/>
            <div className="absolute left-4 top-3 w-6 h-6">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-full h-full">
              <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" />
             </svg>
            </div>
           </div>
            <ul className="transition-all w-full *:text-secondary *:w-full *:p-3 text-right font-YekanBakh *:border-b *:border-[#eaeaea]">
              <li>موبایل</li>
              <li>گیمینگ</li>
              <li>پاور بانک</li>
              <li>اسپیکر</li>
              <li>کامپیوتر</li>
              <li>تبلت</li>
              <li>هدفون</li>
              <li>لپ تاپ</li>
            </ul>
      </div>
    </div>
  </header>
  )

});


export default Header;
