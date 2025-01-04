import PanelNotifs from '@/components/panelComponents/PanelNotifs/PanelNotifs'
import useDocumentTitle from '@/hooks/useDocumentTitle'
import React from 'react'

export default function PanelNotifications() {

  useDocumentTitle("تکنوآرا | پیام ها")

  return (
    <><PanelNotifs /></>
  )
}
