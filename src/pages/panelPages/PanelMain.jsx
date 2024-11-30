import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import PanelSidebar from "../../components/panelComponents/PanelSidebar/PanelSidebar";
import PanelHeader from "../../components/panelComponents/PanelHeader/PanelHeader";
import { ThemeContext } from "@/context/ThemeContext/ThemeContext";

export default function PanelMain() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  const changeTheTheme = () => {
    setIsDark((prev) => !prev);
    isDark
      ? localStorage.setItem("theme", "ligth")
      : localStorage.setItem("theme", "dark");
  };

  return (
    <ThemeContext.Provider value={{ isDark, changeTheTheme }}>
      <div
        className={`${
          isDark ? "dark" : "ligth"
        } flex items-start justify-between h-screen`}
      >
        <PanelHeader />
        <PanelSidebar />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}
