import React, { memo } from 'react'

const ImageBoxModal = memo(({status,closeModal}) => {
    console.log("Iamge box modal render");

    console.log(status);

    return (
        <div className={`fixed top-0 left-0 right-0 bottom-0 z-30 transition-all delay-200 ${status ? "visible opacity-100" : "invisible opacity-0"} p-5 top-0 right-0 bottom-0 left-0 h-[100vh] z-10 bg-[rgba(0,0,0,0.8)]`}>
           <div onClick={closeModal} className='text-[#B9B9B9] cursor-pointer w-8 h-8'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
          <div className='flex flex-col items-center h-full justify-center'>
            <div className='flex mt-6 lg:mt-24 items-center justify-center'>
              <div className='w-[20rem] h-[20rem] sm:w-[25rem] sm:h-[25rem]'>
               <img src="/images/products/1.jpg" className='w-full h-full' alt="" />
              </div>
           </div>
           <div className='flex w-[20rem] sm:w-[25rem] mx-auto items-center justify-center p-2 bg-black font-YekanBakh'>
              <p className='text-white text-[0.9rem] font-bold'>اسم محصول در اینجا قرار گیرد</p>
           </div>
          </div>
        </div>
    )
})

export default ImageBoxModal;