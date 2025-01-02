import React from "react";

function NavbarRightBox() {
  return (
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
  );
}

export default NavbarRightBox;
