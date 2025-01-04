import React from 'react'
import AccountInfo from '../../components/dashboardComponents/AccountInfo/AccountInfo'
import useDocumentTitle from '@/hooks/useDocumentTitle'

export default function DashboardAccount() {

  useDocumentTitle("تکنوآرا | اطلاعات حساب")

  return (
    <>
     <AccountInfo />
    </>
  )
}
