import React from 'react'
import Dashboard from "../../components/dashboardComponents/Dashboard/Dashboard"
import useDocumentTitle from '@/hooks/useDocumentTitle'

export default function DashboardPage() {

  useDocumentTitle("تکنو آرا | داشبورد")

  return (
    <Dashboard />
  )
}
