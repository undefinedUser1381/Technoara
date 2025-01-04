import React from "react";
import { useContext } from "react";
import TopSection from "./TopSection/TopSection";
import BottomSection from "./BottomSection/BottomSection";
import dataContext from '@/context/dataContext/dataContext';

export default function LocationAddress() {

  const dataBasket = useContext(dataContext)

  console.log(dataBasket.basketData.postWay , "sas");

  console.log("location address");

  return (
     <>
     <TopSection />
     <BottomSection />
     </>
  );
}
