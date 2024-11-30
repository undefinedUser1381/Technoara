import React from 'react'
import AddressTitle from './AdressTitle/AddressTitle';
import AddressBox from './AddressBox/AddressBox';
import AddNewAdress from './AddNewAddress/AddNewAdress';

export default function Address() {
  console.log("Address");
  return (
    <div className='w-full lg:w-[73%] bg-white rounded-lg p-5 shadow-sm'>
       <AddressTitle/>
       <AddressBox />
       <div className='mt-10 pb-5 border-b'>
         <h3 className='font-YekanBakh text-[1.1rem] pr-7 text-[#021959]'>افزودن آدرس جدید</h3>
       </div>
       <AddNewAdress />
    </div>
  )
}
