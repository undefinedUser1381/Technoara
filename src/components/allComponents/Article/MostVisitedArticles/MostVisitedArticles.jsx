import React from 'react'
import ArticleBox from '../RightBox/ArticleBox/ArticleBox'

export default function MostVisitedArticles() {
  return (
    <div className='mt-10 bg-white p-3 rounded-lg'>
       <h4 className='font-YekanBakh mt-2 p-3 pt-2 w-full border-b text-[#021959] font-bold'>پربازدید ترین</h4>
       <div className='flex mt-5 flex-col gap-10'>
         <ArticleBox />
         <ArticleBox />
         <ArticleBox />
      </div>
    </div>
  )
}
