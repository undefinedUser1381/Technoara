import React from 'react'
import ArticleBox from './ArticleBox/ArticleBox';
import MostVisitedArticles from '../MostVisitedArticles/MostVisitedArticles';

export default function RightBox() {

    console.log("render right box");

  return (
      <div className='rounded-lg p-0 w-full lg:w-[25%]'>
        <ArticleBox />
        <MostVisitedArticles />
      </div>  
  )
}
