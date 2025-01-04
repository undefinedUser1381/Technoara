import React from 'react'
import Favorites from '../../components/dashboardComponents/Favorites/Favorites'
import useDocumentTitle from '@/hooks/useDocumentTitle'

export default function DashboardFavorites() {

  useDocumentTitle("تکنو آرا | علاقه مندی ها")

  return (
    <>
     <Favorites />
    </>
  )
}
