import React from 'react'
import { useContext } from 'react'
import dataContext from '../../../../../context/dataContext/dataContext';

export default function BottomSection() {

  const stepContext = useContext(dataContext);

  console.log("bottom sec");

  return (
    <>
      <div className='bg-white w-[95%] p-4 rounded-lg mx-auto h-auto mt-14'>
        <h3 className='font-YekanBakh text-[1.1rem] py-4 border-b font-semibold'>اطلاعات بیشتر</h3>
         <div className='mt-6'>
            <textarea name="" className='font-Kalame w-full resize-none border-none outline-none rounded-md bg-[#F8F9FB] p-3' placeholder='برای مثال فلان فلان فلان فلان فلان' id="" rows={5}></textarea>
           </div>
          </div>
          <div className='mt-10 w-[95%] p-4 flex items-center mx-auto justify-end'>
            <button onClick={() => stepContext.nextStep()} className='bg-green-500 p-3 w-full md:w-[23%] text-[1.1rem] font-Kalame text-white rounded-md'>ثبت سفارش</button>
         </div>
    </>
  )
}
