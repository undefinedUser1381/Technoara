import React from "react";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  console.log("render scroll progress");

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const scrollBarFunc = () => {
    const winScroll = document.documentElement.scrollTop;
    const documentHieght =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPercent = (winScroll / documentHieght) * 100;

    setScrollPercentage(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollBarFunc);

    return () => {
      window.removeEventListener("scroll", scrollBarFunc);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 left-0 w-[100%] rounded-lg bg-slate-200 h-1 shadow-lg`}
    >
      <div style={{width : `${scrollPercentage}%`}} className={`bg-primary h-full`}></div>
    </div>
  );
}
