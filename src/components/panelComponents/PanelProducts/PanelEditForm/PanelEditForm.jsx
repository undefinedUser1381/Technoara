import React from 'react'
import InputLabel from '@/components/sharedComponents/Input/InputLabel'

function PanelEditForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className='mt-6 mb-2 font-Kalame flex flex-wrap gap-5'> 
      <InputLabel isNeedToBeCheck={false} type={"text"} label={'عنوان محصول'} labelClassname={'text-black dark:text-white'} placeholder={'عنوان ...'} inputClassName={'w-[100%] bg-transparent border dark:border-gray-700 p-2 outline-none transition-all focus:border-primary'} />
      <InputLabel isNeedToBeCheck={false} type={"text"} label={'توضیحات محصول'} labelClassname={'text-black dark:text-white'} placeholder={'نوضیحات ...'} inputClassName={'w-[100%] bg-transparent border dark:border-gray-700 p-2 outline-none transition-all focus:border-primary'} />
      <InputLabel isNeedToBeCheck={false} type={"text"} label={'لینک محصول'} labelClassname={'text-black dark:text-white'} placeholder={'لینک ...'} inputClassName={'w-[100%] bg-transparent border dark:border-gray-700 p-2 outline-none transition-all focus:border-primary'} />
      <InputLabel isNeedToBeCheck={false} type={"text"} label={'قیمت محصول'} labelClassname={'text-black dark:text-white'} placeholder={'قیمت ...'} inputClassName={'w-[100%] bg-transparent border dark:border-gray-700 p-2 outline-none transition-all focus:border-primary'} />
      <InputLabel isNeedToBeCheck={false} type={"text"} label={'موجودی محصول'} labelClassname={'text-black dark:text-white'} placeholder={'موجودی ...'} inputClassName={'w-[100%] bg-transparent border dark:border-gray-700 p-2 outline-none transition-all focus:border-primary'} />
      <InputLabel isNeedToBeCheck={false} type={"text"} label={'دسته بندی محصول'} labelClassname={'text-black dark:text-white'} placeholder={'دسته بندی ...'} inputClassName={'w-[100%] bg-transparent border dark:border-gray-700 p-2 outline-none transition-all focus:border-primary'} />
      <InputLabel isNeedToBeCheck={true} type={"text"} label={'تخفیف محصول'} labelClassname={'text-black dark:text-white'} placeholder={'تخفیف ...'} inputClassName={'w-[100%] bg-transparent border dark:border-gray-700 p-2 outline-none transition-all focus:border-primary'} />
      <InputLabel isNeedToBeCheck={false} type={"checkbox"} label={'رایگان محصول'} labelClassname={'text-black dark:text-white'} inputClassName={'w-[100%] bg-transparent border dark:border-gray-700 p-2 outline-none transition-all focus:border-primary'} />
     <div className='flex w-full justify-end lg:w-[50%] items-start lg:justify-start mt-5'>
      <button onClick={(e) => console.log("add")} className='px-6 bg-yellow-600 rounded-lg py-2 font-Kalame text-white'>ویرایش محصول</button>
    </div>
  </form>
  )
}

export default PanelEditForm