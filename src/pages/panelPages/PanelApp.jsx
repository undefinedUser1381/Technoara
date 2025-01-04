import useDocumentTitle from "@/hooks/useDocumentTitle"
import PanelDashboard from "../../components/panelComponents/PanelDashboard/PanelDashboard"

export default function PanelApp() {

  useDocumentTitle("تکنوآرا | داشبورد")

  return (
    <PanelDashboard />
  )
}
