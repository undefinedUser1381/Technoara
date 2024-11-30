import { memo } from "react";

const OrderTitle = memo(() => {

  console.log("Order title rendered");

  return(
    <>
     {/* Title */}
      <div className='flex my-3 text-[#021959] border-b pb-6 items-center justify-between'>
       <div className='flex items-center justify-start gap-4'>
         <div className='w-7 h-7'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
           <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
          </svg>
         </div>
         <p className='font-YekanBakh'>سفارش های من</p>
       </div>
       <p className='font-Kalame text-[0.9rerem] text-gray-400'>تعداد سفارش 1</p>
    </div>
    </>
  )

})

export default OrderTitle