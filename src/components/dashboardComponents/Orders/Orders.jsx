import React from 'react'
import OrderBox from './OrderBox/OrderBox';
import OrderTitle from './OrderBox/OrderTitle/OrderTitle';

export default function Orders() {

  console.log("orders");

  return (
    <>
     <div className='w-full lg:w-[73%] bg-white rounded-lg shadow-sm p-3 lg:p-5'>
       <OrderTitle />
        <OrderBox orderNo={"#4567"}/>
        <OrderBox orderNo={"#5577"}/>
        <OrderBox orderNo={"#3474"}/>
     </div>
    </>
  )
}
