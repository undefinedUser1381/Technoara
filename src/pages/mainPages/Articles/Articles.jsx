import React from 'react'
import Header from "../../../components/sharedComponents/Header/Header.jsx"
import Footer from "../../../components/sharedComponents/Footer/Footer.jsx"
import LeftBox from '../../../components/allComponents/Article/LeftBox/LeftBox.jsx'
import RightBox from '../../../components/allComponents/Article/RightBox/RightBox.jsx'
import TitleBox from '../../../components/indexComponents/TitleBox/TitleBox.jsx'
import ScrollProgress from '../../../components/allComponents/Article/ScrollProgress/ScrollProgress.jsx'
import ArticleUserComment from '../../../components/allComponents/ArticleUserComment/ArticleUserComment.jsx'

export default function Articles() {
  return (
    <div className='bg-[#F8F9FB]'>
     <ScrollProgress/>
     <Header />  
     <div className='p-4 mt-36 sm:mt-32 lg:mt-8 flex flex-col lg:flex-row items-start justify-between w-full'>
        <RightBox/>
        <LeftBox/>
     </div>
     <div className='px-2 mx-auto mt-5 w-[98%]'>
      <TitleBox title={"مطالب مرتبط"} link={"مشاهده همه"}/>
     </div>
     <div className='flex items-center p-6 px-3 w-[98%] mx-auto mt-5 bg-white rounded-lg justify-between'>
        <h4 className='font-YekanBakh text-[#0650A3] text-[1.1rem] font-bold'>نطرات کاربران</h4>
        <p className='font-YekanBakh text-[#02195973] text-[0.9rem] font-bold'>بذون دیدگاه</p>
     </div>
     <ArticleUserComment/>
     <Footer/>    
    </div>
  )
}
