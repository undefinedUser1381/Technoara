import React from 'react'
import Login from "../../../components/allComponents/Auth/Login/Login"
import useDocumentTitle from '@/hooks/useDocumentTitle'

export default function LoginPage() {

  useDocumentTitle("تکنو آرا | ورود")

  return (
    <Login />
  )
}
