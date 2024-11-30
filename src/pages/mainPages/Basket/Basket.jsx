import React, { useContext, useState } from "react";
import Header from "../../../components/sharedComponents/Header/Header";
import Footer from "../../../components/sharedComponents/Footer/Footer";
import OrderProgress from "../../../components/allComponents/Basket/OrderProgress/OrderProgress";
import BasketDetails from "../../../components/allComponents/Basket/BasketDetails/BasketDetails";
import LocationAddress from "../../../components/allComponents/Basket/LocationAddress/LocationAddress";
import OrderCompelete from "../../../components/allComponents/Basket/OrderCompelete/OrderCompelete";
import EndOrder from "../../../components/allComponents/Basket/EndOrder/EndOrder";
import dataContext from "@/context/dataContext/dataContext";

export default function Basket() {

  const [postStatus, setPostStatus] = useState("پست عادی");
  const [basketSteps, setBasketSteps] = useState(1);

  const changeStep = (index) => {
    setBasketSteps(index);
  };

  const updatePostStatus = (e) => {
    setPostStatus(e.target.innerHTML);
  };

  const nextStep = () => {
    setBasketSteps(basketSteps + 1);
  };

  return (
    <div className="bg-[#F8F9FB]">
      <Header />
      <dataContext.Provider value={{changeStep , updatePostStatus , nextStep , postStatus}}>
        <OrderProgress step={basketSteps} />

        {basketSteps == 1 && <BasketDetails />}

        {basketSteps == 2 && <LocationAddress />}

        {basketSteps == 3 && <OrderCompelete />}

        {basketSteps == 4 && <EndOrder />}
      </dataContext.Provider>
      <Footer />
    </div>
  );
}
