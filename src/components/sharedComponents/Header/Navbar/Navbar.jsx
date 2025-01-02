import React from "react";
import { memo } from "react";
import NavbarRightBox from "./NavbarRightBox/NavbarRightBox";
import NavbarLeftBox from "./NavbarLeftBox/NavbarLeftBox";

export const Navbar = memo(() => {
  return (
    <div className="hidden lg:flex items-center mt-5 p-3 pb-4 justify-between">
      <NavbarRightBox />
      <NavbarLeftBox />
    </div>
  );
});

export default Navbar;
