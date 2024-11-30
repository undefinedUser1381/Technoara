import React from "react";

export default function CategoryBrandsBox({ brand , className }) {
  return (
    <div className={className}>
      <div className="font-YekanBakh">
        <p>{brand}</p>
      </div>
    </div>
  );
}
