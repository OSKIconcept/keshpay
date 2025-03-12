import React from "react";
import Button from "./button";
import Image from "next/image";
import kesh from "@/assets/kesh.png";
import localeFont from "next/font/local";

const geistMono = localeFont({
  src: "../fonts/Gilroy-Regular.ttf",
});

export default function Get() {
  return (
    <div
      id="Help"
      className="bg-white md:py-[128px] py-[60px] px-[40px] z-30 relative mx-auto"
    >
      <div className="bg-[#EDF4FC] rounded-3xl max-w-[1360px] w-full mx-auto flex items-center justify-center">
        <div className="md:pt-[64px] pt-[30px] px-[20px] md:px-[120px] flex md:gap-20 lg:gap-24 gap-6  items-end">
          <div className="flex flex-col items-start gap-6 ">
            <h2
              className={`${geistMono.className} md:text-[62px] lg:text-[82px] xl:text-[96] text-[32px] leading-[32px] md:leading-[62px] lg:leading-[96px] max-w-[585px]`}
            >
              Get the Keshpay App
            </h2>
            <Button className="md:mb-[76px] mb-[30px] text-xs">
              Get Keshpay
            </Button>
          </div>

          <div>
            <Image
              src={kesh}
              width={110}
              alt=""
              className="md:w-[520px] w-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
