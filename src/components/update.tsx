import React, { useState } from "react";

export default function Update() {
  const [isOn, setIsOn] = useState("a");

  //   const toggleSwitch = () => setIsOn(!isOn);
  return (
    <div className="px-[4px] py-[4px] bg-[#EBF4FF] rounded-2xl text-[12px] md:text-[14px] text-[#2C75C9] flex justify-center items-center mx-auto">
      <div className="gap-[8px] flex justify-center items-center">
        <button
          onClick={() => setIsOn("a")}
          className={`${
            isOn == "a"
              ? "bg-white rounded-2xl px-[8px] py-[2px]"
              : "bg-none rounded-2xl px-[8px] py-[2px]"
          }`}
        >
          Update
        </button>
        <button
          onClick={() => setIsOn("b")}
          className={`${
            isOn == "b"
              ? "bg-white rounded-2xl px-[8px] py-[2px]"
              : "bg-none rounded-2xl px-[8px] py-[2px]"
          }`}
        >
          Check out our new features
        </button>
      </div>
    </div>
  );
}
