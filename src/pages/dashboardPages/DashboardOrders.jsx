import React from 'react'
import Orders from "../../components/dashboardComponents/Orders/Orders";
import useDocumentTitle from '@/hooks/useDocumentTitle';

export default function DashboardOrders() {

  useDocumentTitle("تکنوآرا | سفارشات")

  return (
    <> 
      <Orders />
    </>

  )
}
