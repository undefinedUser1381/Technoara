import React from "react";
import PanelUser from "@/components/panelComponents/PanelUsers/PanelUser";
import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function PanelUsers() {
  
  useDocumentTitle("تکنوآرا | کاربران")

  return (
    <>
      <PanelUser />
    </>
  );
}
