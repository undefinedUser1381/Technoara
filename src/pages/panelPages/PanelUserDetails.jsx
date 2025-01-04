import React from 'react'
import PanelUserDetail from '@/components/panelComponents/PanelUserDetail/PanelUserDetail'
import useDocumentTitle from '@/hooks/useDocumentTitle'

export default function PanelUserDetails() {

  useDocumentTitle("تکنوآرا | جزییات کاربر")

  return (
    <><PanelUserDetail /></>
  )
}

