import React from 'react'
import PanelProductDetail from '@/components/panelComponents/PanelProductDetail/PanelProductDetail'
import useDocumentTitle from '@/hooks/useDocumentTitle'

export default function PanelProductDetails() {

  useDocumentTitle("تکنوآرا | جزییات محصول")

  return (
    <><PanelProductDetail/></>
  )
}
