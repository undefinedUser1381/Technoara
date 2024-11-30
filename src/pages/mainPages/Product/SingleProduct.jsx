import React, { useState } from "react";
import { memo } from "react";
import Header from "../../../components/sharedComponents/Header/Header";
import Footer from "../../../components/sharedComponents/Footer/Footer";
import TopDetails from "../../../components/allComponents/Product/TopDetails/TopDetails";
import ImageBoxDetails from "../../../components/allComponents/Product/ImageBoxDetails/ImageBoxDetails";
import ProductDetails from "../../../components/allComponents/Product/ProductDetails/ProductDetails";
import TechnicalInfos from "../../../components/allComponents/Product/TechnicalInfos/TechnicalInfos"
import Questions from "../../../components/allComponents/Product/Questions/Questions"
import CheckProductDetails from "../../../components/allComponents/Product/CheckProductDetails/CheckProductDetails";
import UserComments from "../../../components/allComponents/Product/UserComments/UserComments"
import ProductItemTabs from "../../../components/allComponents/Product/ProductItemTabs/ProductItemTabs";

const SingleProduct = memo(() => {

  console.log("single pro render");

  const [activeTab, setActiveTab] = useState(1);

  const activeTabClicked = (tanIndex) => {
     setActiveTab(tanIndex); 
  } 

  return (
    <div className="bg-[#F8F9FB]">
      <Header />
      <TopDetails />

      <div className="flex flex-col lg:flex-row bg-white items-start p-5 py-10 justify-between">
        <ImageBoxDetails />
        <ProductDetails />
      </div>
    
      <ProductItemTabs tabIndex={activeTab} onTabClick={activeTabClicked} />

      {
        activeTab == 1 && (
          <CheckProductDetails/>
        ) 
      }

      {
        activeTab == 2 && (
          <TechnicalInfos/>
        )
      }

      {
        activeTab == 3 && (
          <UserComments />
        )
      }

      {
        activeTab == 4 && (
          <Questions />
        ) 
      }

      <Footer />
    </div>
  );
});

export default SingleProduct;
