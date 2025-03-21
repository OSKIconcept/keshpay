"use client";

import Image from "next/image";
import React from "react";
import twitter from "@/assets/Vector.png";
import linkedin from "@/assets/linedIn.png";
import instagram from "@/assets/instagram.png";
import kesh from "@/assets/keshpay.png";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  useGSAP(() => {
    gsap.from(".kesh", {
      opacity: 0,

      duration: 1,
      stagger: 0.2, // Stagger animation for each element with a 0.3s
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".kesh",
        start: "-60% 90%",
        scrub: true,
      },
    });

    gsap.from(".links", {
      x: 30,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".links",
        start: "-95% 95%",
        scrub: true,
      },
    });
  });

  return (
    <div className="flex justify-center items-center bg-[#101419] text-[#76777F] py-[64px] px-10 md:text-base text-xs">
      <div className=" mx-auto flex flex-col max-w-[1360px] w-full md:gap-16 gap-8">
        <div className="md:flex-row  flex flex-col justify-between items-start gap-10 ">
          <div className="kesh flex space-x-2 items-center justify-center">
            <Image src={kesh} alt="" className="w-[26px]" />
            <p className="text-white text-2xl ">Keshpay</p>
          </div>
          <div className="flex  md:gap-8  w-full justify-between md:justify-end ">
            <div className="links flex flex-col gap-[16px] md:w-[192px] w-20  ">
              <p className="text-[#C8C9D0]">Product</p>
              <p>Overview</p>
              <p>Features</p>
              <p>Pricing</p>
            </div>

            <div className="links flex flex-col gap-[16px] md:w-[192px] w-20 ">
              <p className="text-[#C8C9D0]">Company</p>
              <p>About us</p>
              <p>Careers</p>
              <p>Press</p>
              <p>Contact</p>
            </div>

            <div className="links flex flex-col gap-[16px] md:w-[192px] w-20 ">
              <p className="text-[#C8C9D0]">Resources</p>
              <p>Blog</p>
              <p>Newsletter</p>
              <p>Events</p>
              <p>Help center</p>
              <p>Support</p>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center gap-8">
          {/* image line */}
          <div className="flex justify-between items-center w-full ">
            <p className="text-[#D0D5DD]">
              © 2025 Keshpay. All rights reserved.
            </p>
            <div className="flex md:gap-6 gap-4 items-center justify-center">
              <Image src={twitter} alt="" className=" md:w-6 w-4" />
              <Image src={linkedin} alt="" className=" md:w-6 w-4" />
              <Image src={instagram} alt="" className=" md:w-6 w-4" />

              <button
                onClick={() => {
                  window.scroll({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                {/* <span className="sticky bottom-0">top</span> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
