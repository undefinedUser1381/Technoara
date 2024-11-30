import React, { memo } from 'react';

const CategoryMobileBtn = memo(({onClick}) => {
  console.log("Category Mobile btn");

  return (
    <div onClick={onClick} className={`flex lg:hidden shadow-custom items-center justify-center bg-[#0650A3] rounded-lg w-[3rem] h-[3rem] fixed bottom-3 right-3 cursor-pointer`}>
      <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 2.64286C1.5 3.01057 1.5 4.70931 1.5 5.87377C1.5 6.57346 1.86565 7.22137 2.46419 7.58375L4.90316 9.06035C5.42264 9.37486 5.77109 9.90835 5.85028 10.5104L6.22751 13.3786C6.30587 13.9744 6.88821 14.367 7.46988 14.2162L9.26154 13.7518C9.67371 13.645 9.97303 13.2889 10.0074 12.8645L10.1925 10.5776C10.2443 9.93727 10.6006 9.3608 11.1501 9.02808L13.5358 7.58375C14.1344 7.22137 14.5 6.57329 14.5 5.8736C14.5 4.83391 14.5 3.34771 14.5 2.64286M1.5 2.64286C1.5 3.7888 5 4.5 8 4.5C11 4.5 14.5 3.21737 14.5 2.64286M1.5 2.64286C1.5 2.07143 3.86364 1 8 1C12.143 1 14.5 2.07143 14.5 2.64286" stroke="#ffffff" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M7.9668 3.78571C3.85099 3.78572 1.5 3.78573 1.5 2.64286C1.5 2.07143 3.86364 1.5 8 1.5C12.143 1.5 14.5 2.07143 14.5 2.64286C14.5 3.21737 12.1364 3.78571 8 3.78571H7.9668Z" fill="#ffffff" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    </div>
  )
})

export default CategoryMobileBtn;
