import React from 'react'
import PanelRecentOrder from '../../components/panelComponents/PanelRecentOrder/PanelRecentOrder'
import useDocumentTitle from '@/hooks/useDocumentTitle'

export default function PanelRecentOrders() {

  useDocumentTitle("تکنوآرا | سفارشات")


  return (
    <>
     <PanelRecentOrder />
    </>
  )
}
