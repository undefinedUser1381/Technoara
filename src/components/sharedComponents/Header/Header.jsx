import React from "react";
import { useState } from "react";
import Topbar from "./Topbar/Topbar";
import Navbar from "./Navbar/Navbar";
import MobileHeader from "./MobileHeader/MobileHeader";

export default function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const openMobileFn = () => {
    setOpenMobileMenu(true);
  }

  const closeMobileFn = () => {
    setOpenMobileMenu(false);
  }

  return (
    <header className="px-4 py-4 bg-white w-full text-center shadow-lg">
      <Topbar />
      <Navbar />
      <MobileHeader openMobileState={openMobileMenu} closeMobileFn={closeMobileFn} openMobileMenu={openMobileFn}/>
    </header>
  );
}
