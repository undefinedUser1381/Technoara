import { useContext, useEffect, useState } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from '@/validation/register';
import { useForm } from "react-hook-form"
import { Rings } from 'react-loader-spinner';
import { AuthContext } from '@/context/AuthContext/AuthContext';
import { useMutation } from 'react-query';
import { apiReq } from '@/services/axios/api/apiReq';

export default function Register() {

  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:yupResolver(registerSchema)
  });

  const [isShowPassword , setIsShowPassword] = useState(true); 

   // حدف آن ارور ب دلیل وجود یک باگ ریز 

   const { mutate : registerUser , isLoading} = useMutation ((dataObject) => {
        return apiReq.post("/users/create-user/", dataObject).then(data => {
           auth.login(data);
           toast.success("حساب کاربری با موفقیت ساخته شد")
           setTimeout(() => {
             navigate("/")
           }, 7000);
        })
    },
    {
    onError : (error) => {
      toast.error(error.response.data.massage)
     }
   },
  )

  const submitUser = (dataObject) => {
      registerUser(dataObject)
  }

  return (
    <div className='register-bg flex h-[100vh] items-center justify-center'>
    <div className='flex flex-col w-full justify-center items-center'>
    <div className="logo mt-3 text-[2.2rem]"><span>تکنو</span><span>آرا</span></div>
     <div className='bg-white p-5 mt-5 shadow-lg rounded-lg w-[90%] md:w-[50%] lg:w-[40%] h-auto'>
        <h4 className='font-YekanBakh mb-5 text-[1.2rem] text-center text-primary font-bold'>ثبت نام</h4>
        <form className='*:font-YekanBakh' onSubmit={handleSubmit(data => submitUser(data))}>
           <div className='flex flex-col gap-2 mb-5'>
             <label htmlFor="">نام کاربری</label>
             <input type="text" {...register("username")} className='login-inputs' placeholder='نام کاربری....'/>
           </div>
           {
            errors.username && (
             <p className='bg-red-600 text-white p-1 rounded-md my-3 font-Kalame'>
               {errors.username.message}
             </p>
            )
           }
           <div className='flex flex-col gap-2 mb-5'>
             <label htmlFor="">ایمیل</label>
             <input {...register("email")} type="email" className='login-inputs' placeholder='ایمیل...'/>
           </div>
           {
            errors.email && (
             <p className='bg-red-600 text-white p-1 rounded-md my-3 font-Kalame'>
               {errors.email.message}
             </p>
            )
           }
           <div className='flex relative flex-col gap-2 mb-5'>
             <label htmlFor="">پسورد</label>
             <input type={`${isShowPassword ? "password" : "text"}`} {...register("password")} className='login-inputs' placeholder='پسورد...'/>
             <div onClick={() => setIsShowPassword((prev) => !prev)} className='cursor-pointer absolute top-10 left-3'>
                 {
                   isShowPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                   ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                   )
                 }
               </div>
           </div>
           {
            errors.password && (
             <p className='bg-red-600 text-white p-1 rounded-md my-3 font-Kalame'>
               {errors.password.message}
             </p>
            )
           }
           <div className='flex items-center mt-10 justify-end w-full'>
             {
               isLoading ? (
                 <div className='bg-primary rounded-md p-1 w-full sm:w-[30%] flex items-center justify-center'>
                   <Rings visible={true} height="30" width="50" color="#fff" ariaLabel="rings-loading" wrapperStyle={{}} wrapperClass="" />
                 </div>
                 ) : (
                 <button type='submit' className='bg-primary rounded-md p-2 w-full sm:w-[30%] text-white'>ثبت نام</button>              
               )
             }
           </div>
           <div className='flex items-center *:font-YekanBakh justify-center mt-4 gap-1'>
               <p>قبلا عضو شدید؟</p>
               <Link className='text-blue-600' to={"/login"}>وارد شوید</Link>
           </div>
        </form>
     </div>
    </div>
    <ToastContainer rtl={true} position='top-left' autoClose={5000}/>
   </div>
  )
}
