"use client";

import React from "react";
import localeFont from "next/font/local";
import Image from "next/image";
import secure from "@/assets/secure.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const geistMono = localeFont({
  src: "../fonts/Gilroy-SemiBold.ttf",
});

export default function Why() {
  // const boxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".anima", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3, // Stagger animation for each element with a 0.3s
      delay: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".anima",
        start: "-50% 80%",
        scrub: true,
      },
    });

    gsap.to(containerRef.current, {
      y: 300,
    });
  }, {});

  return (
    <div
      id="About"
      className="bg-[#101419] text-white mx-auto flex z-20 relative"
    >
      <div className="flex flex-col xl:py-[120px] md:py-[96px] py-[56px] gap-[48px] md:gap-[70px] lg:gap-[80px] max-w-[1360px] mx-auto items-center justify-center ">
        <div className="flex flex-col gap-[12px] md:gap-[16px] text-center items-center">
          <h3
            className={`${geistMono.className} lg:text-[46px] lg:leading-[55.2px] md:text-[40px] sm:text-[32px] text-[30px] leading-8 w-[300px] sm:w-[400px] md:w-full anima `}
          >
            Why Keshpay is the smart choice
          </h3>
          <p className="text-[#C0CAD8] text-[14px] md:text-[20.5px] md:w-[600px] w-[250px] anima">
            Experience secure, affordable, and convenient financial services
            designed to fit your everyday needs
          </p>
        </div>
        <div className="flex gap-[20px] md:gap-[24px]  items-center justify-center flex-wrap flex-1 group">
          <div
            // ref={boxRef}
            className="bg-[#181E25] rounded-3xl py-16 px-20 flex flex-col md:gap-[85.78px] gap-[50px] items-center justify-center group-hover:none hover:scale-105 transition-all ease-out duration-200   "
          >
            <Image src={secure} alt="" className="w-[180px]" />
            <p>Secure and Reliable</p>
          </div>

          <div className="bg-[#181E25] rounded-3xl py-16 px-20 flex flex-col md:gap-[85.78px] gap-[50px] items-center justify-center group-hover:none hover:scale-105 transition-all ease-out duration-200   ">
            <Image src={secure} alt="" className="w-[180px]" />
            <p>Fast transactions</p>
          </div>

          <div className="bg-[#181E25] rounded-3xl py-16 px-20 flex flex-col md:gap-[85.78px] gap-[50px] items-center justify-center group-hover:none hover:scale-105 transition-all ease-out duration-200   ">
            <Image src={secure} alt="" className="w-[180px]" />
            <p>Low transactiobns fees</p>
          </div>
        </div>
      </div>
    </div>
  );
}
