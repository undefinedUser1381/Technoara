import React from 'react'
import { Table , TableRow , TableHead , TableHeader, TableBody , TableCell} from "@/components/ui/table";
import { Link } from 'react-router-dom';

export default function ProductsTable() {

  const product = [
      {id:1, row : "1" , title : "محصول 1", price : "239,000", category : "دسته بندی" , off : true , free : false , specialPlan : false},
      {id:2, row : "1" , title : "محصول 2", price : "274,000", category : "دسته بندی" , off : false , free : false , specialPlan : true},
      {id:3, row : "1" , title : "محصول 3", price : "254,000", category : "دسته بندی" , off : false , free : true , specialPlan : true},
      {id:4, row : "1" , title : "محصول 4", price : "224,000", category : "دسته بندی" , off : true , free : false , specialPlan : false},
      {id:5, row : "1" , title : "محصول 5", price : "214,000", category : "دسته بندی" , off : false , free : true , specialPlan : true},
      {id:6, row : "1" , title : "محصول 6", price : "264,000", category : "دسته بندی" , off : true , free : true , specialPlan : false},
      {id:7, row : "1" , title : "محصول 7", price : "284,000", category : "دسته بندی" , off : true , free : false , specialPlan : true},
   ]

  return (
   <Table className="overflow-scroll lg:overflow-hidden border dark:border-gray-600 rounded-2xl">
    <TableHeader className="bg-white text-black dark:bg-[#1B2631] dark:text-white">
      <TableRow className="font-Kalame text-[0.9rem] border-gray-300 dark:border-gray-600 *:p-4 lg:text-[1rem]">
        <TableHead className="text-right">ردیف</TableHead>
        <TableHead className="text-right">عنوان</TableHead>
        <TableHead className="text-right">قیمت</TableHead>
        <TableHead className="text-right">دسته بندی</TableHead>
        <TableHead className="text-right">تخفیف</TableHead>
        <TableHead className="text-right">رایگان</TableHead>
        <TableHead className="text-right w-[4rem]">ویژه</TableHead>
        <TableHead className="text-right">بیشتر</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody className="bg-white text-black font-Kalame text-right dark:bg-[#1B2631] dark:text-white">
      {product.map(item => (
        <TableRow key={item.row} className="border font-Kalame border-gray-300 dark:border-gray-600">
          <TableCell className="font-medium"><span className="text-black dark:text-white">{item.row}</span></TableCell>
          <TableCell className="font-medium"><span className="text-black block w-[4rem] dark:text-white">{item.title}</span></TableCell>
          <TableCell className="font-medium"><span className="text-black dark:text-white">{item.price}</span></TableCell>
          <TableCell className="font-medium text-right w-[170px]"><div className='w-[6rem]'><span className="bg-green-800 text-white px-4 rounded-xl">{item.category}</span></div></TableCell>
          <TableCell className="font-medium text-right"> 
            {
             item.off ? (<div className='bg-green-800 p-1 flex items-center justify-center rounded-full w-7 h-7'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
               <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
             </div>) : (<div className='bg-red-800 p-1 items-center justify-center rounded-full flex w-7 h-7'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
             </svg>
            </div>)
           }
          </TableCell>
          <TableCell className="text-right">
            {item.free ? (
               <div className='bg-green-800 p-1 items-center justify-center rounded-full flex w-7 h-7'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
               </svg>
              </div>
            ) : (
                <div className='bg-red-800 p-1 items-center justify-center rounded-full flex w-7 h-7'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
             </svg>
            </div>
            )}
          </TableCell>
          <TableCell className="font-medium w-[160px] text-right"> 
            <div className='w-full'>
              {item.specialPlan ? (
                 <div className='bg-green-800 p-1 items-center justify-center rounded-full flex w-7 h-7'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                   <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
               ) : (
                <div className='bg-red-800 p-1 items-center justify-center rounded-full flex w-7 h-7'>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
              </div>
             )}   
            </div>      
          </TableCell>
          <TableCell className="text-right w-[90px]">
           <Link to={`${item.id}`}>
           <button className="bg-blue-700 p-1 w-7 h-7 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-blue-300"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
            </button>
           </Link>
         </TableCell>
        </TableRow>
       ))}
    </TableBody>
  </Table>
  )
}
