import React, { memo } from 'react'

const OrderDetails = memo(() => {
  console.log("order details render");

  return(
    <>
      <div className='mt-8 flex border-b pb-6 flex-col items-start'>
        <div className='flex flex-col sm:flex-row items-center w-full justify-between'>
          <div className='flex items-center justify-start gap-5'>
            <div className='w-16 h-16'>
               <img src="/images/products/1.jpg" className='w-full h-full' alt="" />
             </div>
             <p className='font-YekanBakh'>اسم محصول محصول محصول</p>
           </div>
              <p className='font-Kalame'>9,000,000 اومان</p>
          </div>
       </div>
    </>
  )
}); 

export default OrderDetails;
