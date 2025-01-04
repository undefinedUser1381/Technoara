import React from 'react'
import PanelTicket from '@/components/panelComponents/PanelTicket/PanelTicket'
import useDocumentTitle from '@/hooks/useDocumentTitle'

export default function PanelTickets() {

  useDocumentTitle("تکنوآرا | تیکت ها")

  return ( <PanelTicket /> )
}
