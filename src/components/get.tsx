"use client";

import React, { useRef } from "react";
import Button from "./button";
import Image from "next/image";
import kesh from "@/assets/kesh.png";
import localeFont from "next/font/local";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const geistMono = localeFont({
  src: "../fonts/Gilroy-Medium.ttf",
});

export default function Get() {
  const photoRef = useRef(null);

  useGSAP(() => {
    gsap.from(".get", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2, // Stagger animation for each element with a 0.3s
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".get",
        start: "-60% 90%",

        scrub: true,
      },
    });

    gsap.from(photoRef.current, {
      scale: 0.6,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: photoRef.current,
        start: "-60% 90%",
        scrub: true,
      },
    });
  });
  return (
    <div
      id="Help"
      className=" bg-white md:py-[128px] py-[60px] px-[40px] z-30 relative mx-auto"
    >
      <div className="bg-[#EDF4FC] rounded-3xl max-w-[1360px] w-full mx-auto flex items-center justify-center">
        <div className="md:pt-[64px] pt-[30px] px-[20px] md:px-[120px] flex md:gap-20 lg:gap-24 gap-6  items-end">
          <div className="flex flex-col items-start gap-6 ">
            <h2
              className={`${geistMono.className} font-bold md:text-[62px] lg:text-[82px] xl:text-[96] text-[32px] leading-[32px] md:leading-[76px] max-w-[585px] get`}
            >
              Get the Keshpay App
            </h2>
            <Button className="get  md:mb-[76px] mb-[30px] text-xs">
              Get Keshpay
            </Button>
          </div>

          <div ref={photoRef}>
            <Image
              src={kesh}
              width={110}
              alt=""
              className="md:w-[520px] w-[100%] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
