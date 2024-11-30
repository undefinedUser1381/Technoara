import React from 'react'
import { useState } from 'react';
import OrderDetails from './OrderDetails/OrderDetails';
import OrderSections from "./OrderSections/OrderSections"

export default function OrderBox({orderNo}) {

 console.log("Order box rendered");

 const [isOpenOrderBox , setIsOpenOrderBox] = useState(false); 

 const openOrderBox = () => {
    setIsOpenOrderBox(prev => !prev);
    console.log("Order box func rendred");
  }

  return (
    <>
      {/* Order box */}
      <div className={`p-2 transition-all duration-200 ${isOpenOrderBox ? "h-auto " : "h-[5rem]"} overflow-hidden`}>
      <div onClick={openOrderBox} className='bg-primary text-white p-4 cursor-pointer rounded-lg flex items-center justify-between'>
        <div>
          <p className='font-Kalame'>جزییات سفارش {orderNo}</p>
        </div>
        <div className='w-5 h-5'>
          {!isOpenOrderBox ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>          
          )}
        </div>
      </div>
      <OrderSections />
      {/* Order box details */}
      <div className='mt-5'>
         <h4 className='font-YekanBakh text-[1.1rem]'>جزییات آیتم های سفارش</h4>
         <OrderDetails />
         <OrderDetails />
      </div>
      </div></>
  )
}
