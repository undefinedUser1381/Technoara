import React from 'react'
import Notification from '../../components/dashboardComponents/Notification/Notification'
import useDocumentTitle from '@/hooks/useDocumentTitle'

export default function DashboardNotifications() {

  useDocumentTitle("تکنو آرا | پیام ها")

  return (
    <>
      <Notification />
    </>
  )
}
