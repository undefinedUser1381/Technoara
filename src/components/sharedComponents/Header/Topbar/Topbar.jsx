import React, { memo } from "react";
import LeftTopbar from "./LeftTopbar/LeftTopbar";
import RightTopbar from "./RightTopbar/RightTopbar";

export const Topbar = memo(() => {
  return (
    <div className="hidden lg:flex pb-8 items-center justify-between border-[#eeeff4] border-b-2 ">
      <RightTopbar />
      <LeftTopbar />
    </div>
  );
});

export default Topbar;
