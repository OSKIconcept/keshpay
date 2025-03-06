import Image from "next/image";
import React from "react";
import frame from "@/assets/frame.png";

export default function Pop() {
  return (
    <div className="bg-green-600 flex items-center justify-center absolute md:opacity-0 group-hover:opacity-100  transition-opacity duration-500 opacity-100 z-30 rounded-[42px] p-3 w-[320px]">
      <div className="flex items-center justify-center gap-x-3">
        <div className="rounded-[30px]">
          <Image src={frame} alt="" className="w-[60px] h-[60px]" />
        </div>
        <div className="flex flex-col items-start justify-center text-left gap-1">
          <p className="text-[#7A7A7A] text-[15px]">You paid Ruth B</p>
          <div className="flex justify-center items-center">
            <p className="text-[#000000] text-xl">Hangout at the park </p>
            {/* bucket */}
          </div>
        </div>
      </div>
    </div>
  );
}
