import React from 'react'
import Address from "../../components/dashboardComponents/Address/Address"
import useDocumentTitle from '@/hooks/useDocumentTitle'

export default function DashboardAddress() {

  useDocumentTitle("تکنوآرا | آدرس ها")

  return (
    <>
      <Address />
    </>
  )
}
