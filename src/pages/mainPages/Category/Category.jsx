import React, { useState , memo } from "react";
import Header from "../../../components/sharedComponents/Header/Header";
import Footer from "../../../components/sharedComponents/Footer/Footer";
import ProductsWithNoDiscounts from "../../../components/sharedComponents/ProductsWithNoDiscounts/ProductsWithNoDiscounts";
import CategoryResult from "../../../components/allComponents/Category/CategoryResults/CategoryResult";
import CategoryBrands from "../../../components/allComponents/Category/CategoryBrands/CategoryBrands";
import ProductsWithDiscount from "../../../components/sharedComponents/ProductsWithDiscount/ProductsWithDiscount";
import CategoryMobile from "../../../components/allComponents/Category/CategoryMobile/CategoryMobile";
import CategoryMobileBtn from "../../../components/allComponents/Category/CategoryMobileBtn/CategoryMobileBtn";

const Category = memo(() => {

  const [btnStatus , setBtnStatus] = useState(false);

  console.log("category renders");

  const openMobileCategory = () => {
      setBtnStatus(true);
  }

  const closeMobileCategory = () => {
    setBtnStatus(false);
}

  return (
    <>
      <Header />

      <section className="my-10 p-2 bg-[#F8F9FB]">

         {/* Top div */}
         <div className="flex items-center mt-[10rem] xs:mt-[7rem] sm:mt-[7rem] md:mt-0 mb-7 justify-between">
          <div className="flex text-secondary font-YekanBakh items-center justify-center gap-2">
            <p>خانه</p>
            <div>-</div>
            <p>فروشگاه</p>
          </div>
          <div className="font-Kalame text-secondary">
            <span>9 محصول</span>
          </div>
         </div>

         <div className="flex items-start mt-2 justify-between">
          
          {/* Right div */}
          <div className="w-[25%] hidden lg:block">
            <CategoryResult />
            <CategoryBrands/>
          </div>

          {/* Left div */}
          <div className="w-[100%] lg:w-[70%]">
            <div className="flex flex-col">
              {/* Select navbar */}
               <div className="hidden lg:flex lg:items-center shadow-lg bg-white lg:p-5 rounded-lg lg:justify-between">
                <div className="flex *:font-YekanBakh gap-5 items-center justify-start">
                 <span>انتخاب بر اساس : </span>
                 <ul className="flex items-center *:transition-all *:duration-300 *:text-[#9AA3BD] *:cursor-pointer gap-8 justify-between">
                 <li className="hover:text-secondary">ارزان ترین</li>
                 <li className="hover:text-secondary">گران ترین</li>
                 <li className="hover:text-secondary">رایگان</li>
                 <li className="hover:text-secondary">غیر رایگان</li>
                 </ul>
                </div>
                <div className="w-6 h-6 cursor-pointer">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#9AA3BD" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                 </svg>
                </div>
                </div>
              {/* Products */}
               <div className="flex flex-col items-center gap-5 my-8 flex-grow justify-between w-full md:flex-row lg:flex-col sm:flex-wrap lg:flex-nowrap xl:flex-row xl:flex-wrap">
                  <div className="w-full sm:w-[47%] lg:w-[100%] xl:w-[320px]">
                  <ProductsWithDiscount/>
                  </div>
                  <div className="w-full sm:w-[47%] lg:w-[100%] xl:w-[320px]">
                   <ProductsWithNoDiscounts/>
                  </div>
                  <div className="w-full sm:w-[47%] lg:w-[100%] xl:w-[320px]">
                   <ProductsWithDiscount/>
                  </div>
                  <div className="w-full sm:w-[47%] lg:w-[100%] xl:w-[320px]">
                   <ProductsWithNoDiscounts/>
                  </div>
                  <div className="w-full sm:w-[47%] lg:w-[100%] xl:w-[320px]">
                  <ProductsWithDiscount/>
                  </div>
                  <div className="w-full sm:w-[47%] lg:w-[100%] xl:w-[320px]">
                   <ProductsWithDiscount/>
                  </div>
              </div>
            </div>
          </div>

           {/* Button for open mobile categoty */}
           <CategoryMobileBtn onClick={openMobileCategory} status={btnStatus}/>

           {/* Filtering options for mobile */}
          <CategoryMobile onClick={closeMobileCategory} status={btnStatus}/>

        </div>

      </section>

      <Footer />
    </>
  );
})

export default Category;