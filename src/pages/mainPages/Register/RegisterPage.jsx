import React from 'react'
import Register from '../../../components/allComponents/Auth/Register/Register'
import useDocumentTitle from '@/hooks/useDocumentTitle'

export default function RegisterPage() {

  useDocumentTitle("تکنو آرا | ثبت نام")

  return (
     <Register />
  )
}
