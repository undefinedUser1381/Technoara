import React, { useEffect } from "react";
import Header from "../../../components/sharedComponents/Header/Header";
import Footer from "../../../components/sharedComponents/Footer/Footer";
import CategoryBox from "../../../components/indexComponents/CategoryBox/CategoryBox";
import PopularCategory from "../../../components/indexComponents/PopularCategory/PopularCategory";
import NewProducts from "../../../components/indexComponents/NewProducts/NewProducts";
import Mobile from "../../../components/indexComponents/Mobiles/Mobile";
import BestSellingProducts from "../../../components/indexComponents/BestSellingProducts/BestSellingProducts";
import LapTop from "../../../components/indexComponents/LapTops/LapTop";
import Articles from "../../../components/indexComponents/Articles/Articles";
import DiscountCarts from "../../../components/indexComponents/DiscountCarts/DiscountCarts";
import Banner from "../../../components/indexComponents/Banner/Banner";
import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function Index() {
  useDocumentTitle("تکنوآرا | صفحه اصلی");

  return (
    <>
      <Header />
      <main className="mt-10 px-1 w-full py-4">
        <Banner />
        <div className="flex flex-col xl:flex-row mt-10 items-start h-auto xl:h-[25.5rem] justify-between">
          <DiscountCarts />
          <CategoryBox />
        </div>
        <PopularCategory />
        <NewProducts />
        <Mobile />
        <BestSellingProducts />
        <LapTop />
        <Articles />
      </main>
      <Footer />
    </>
  );
}
