import React from "react";
import { useState } from "react";

function InputLabel({
  label,
  inputClassName,
  labelClassname,
  placeholder,
  type,
  isNeedToBeCheck,
}) {
  const [isChecked, setIsChecked] = useState(false);

  const checkFn = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      {!isNeedToBeCheck ? (
        <div className="flex flex-col w-full md:w-[48%] items-start gap-3">
          <label className={labelClassname} htmlFor="">
            {label}
          </label>
          {
            type === "checkbox" ? (
             <div className='flex items-center w-full p-2 justify-start gap-2 border dark:border-gray-700'>
               <input onChange={(e) => {console.log(e.target.checked)}} type="checkbox" className='w-[20px] h-[1rem]'/>
               <label htmlFor="">رایکان باشد</label>
             </div>
            ) : (
              <input
              type={type}
              className={inputClassName}
              placeholder={placeholder}
            />
            )
          }
        </div>
      ) : (
        <div className="flex flex-col w-full md:w-[48%] items-start gap-3">
          <label className={labelClassname} htmlFor="">
            {label}
          </label>
          <div className="flex items-center w-full p-2 justify-start gap-2 border dark:border-gray-700">
            <input
              onChange={(e) => checkFn(e)}
              type="checkbox"
              className={`${isChecked ? "hidden" : ""} w-[20px] h-[1rem]`}
            />
            {isChecked && (
              <input
                type="text"
                className="w-[100%] bg-transparent outline-none transition-all focus:border-primary"
                placeholder="مقدار تخفیف ..."
              />
            )}
            <label className={`${isChecked ? "hidden" : ""}`} htmlFor="">
              دارای تخفیف باشد
            </label>
          </div>
        </div>
      )}
    </>
  );
}

export default InputLabel;
