import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div className='bg-[#044EA3] flex items-center justify-center h-[100vh]'>
      <div className='flex flex-col items-center'>
          <h1 className='font-Kalame text-white text-[12rem]'>404</h1>
          <p className='font-Kalame text-white font-bold text-[1.3rem]'>متاسفانه صفحه مورد نظر پیدا نشد</p>
          <Link className='font-Kalame mt-14 bg-white text-black p-3 rounded-lg' to={"/"}>بازگشت صفحه اصلی</Link>
      </div>
    </div>
  )
}
