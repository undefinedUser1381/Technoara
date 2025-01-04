import React from 'react'
import PanelCateogry from '@/components/panelComponents/PanelCategory/PanelCategory'
import useDocumentTitle from '@/hooks/useDocumentTitle'

export default function PanelCategory() {

  useDocumentTitle("تکنوآرا | دسته بندی")

  return (
    <><PanelCateogry /></>
  )
}
