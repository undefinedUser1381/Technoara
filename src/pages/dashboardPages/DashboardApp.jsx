import React from "react";
import Sidebar from "../../components/dashboardComponents/Sidebar/Sidebar";
import Header from "../../components/sharedComponents/Header/Header";
import Footer from "../../components/sharedComponents/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function DashboardApp() {

  return (
    <div className="bg-[#F8F9FB]">
      <Header />
      <div className="flex flex-col gap-16 lg:gap-0 lg:flex-row items-start justify-between mt-40 lg:mt-12 px-8">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
