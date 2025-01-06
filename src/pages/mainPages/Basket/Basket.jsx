import React, { useContext, useState } from "react";
import Header from "../../../components/sharedComponents/Header/Header";
import Footer from "../../../components/sharedComponents/Footer/Footer";
import OrderProgress from "../../../components/allComponents/Basket/OrderProgress/OrderProgress";
import BasketDetails from "../../../components/allComponents/Basket/BasketDetails/BasketDetails";
import LocationAddress from "../../../components/allComponents/Basket/LocationAddress/LocationAddress";
import OrderCompelete from "../../../components/allComponents/Basket/OrderCompelete/OrderCompelete";
import EndOrder from "../../../components/allComponents/Basket/EndOrder/EndOrder";
import dataContext from "@/context/dataContext/dataContext";
import useDocumentTitle from '@/hooks/useDocumentTitle.jsx'

export default function Basket() {

  console.log("Basket");

  useDocumentTitle("تکنو آرا | سبد خرید")

  const [postStatus, setPostStatus] = useState("پست عادی");
  const [basketSteps, setBasketSteps] = useState(1);

  // این بسکت برای اینه که بتونیم تمام ازلاعاتمون رو در سراسر استپ کامپوننتمون بتونیم داشته باشیم تا بتونیم جزییات فاکتور رو نشون بدیم
  // و در نهایت با نشون دادن فاکنور و زدن دکمه خرید بتونیم آبجکت رو به بکند بفرستیم
  const basketData = {
     products : [],
     postWay : postStatus ,
     locationData : {name : "", family : "" , country : "" , city : "" , province : "" , street : ""},
     moreInfos : {}
  };

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
      <dataContext.Provider value={{changeStep , basketData , updatePostStatus , nextStep , postStatus}}>
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
