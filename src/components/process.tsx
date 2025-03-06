"use client";

import Image from "next/image";
import React, { useRef } from "react";
import send from "@/assets/send.png";
import check from "@/assets/Check icon.png";
import localeFont from "next/font/local";
import get from "@/assets/get.png";
import take from "@/assets/take.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const geistMono = localeFont({
  src: "../fonts/Gilroy-SemiBold.ttf",
});

export default function Process() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  // const imageRef = useRef(null);
  // const textRef = useRef(null);
  // const wordRef = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   ScrollTrigger.create({
  //     trigger: "#process",
  //     start: "top top",
  //     pinSpacing: false,
  //     pin: true,
  //   });
  // }, []);
  // Register ScrollTrigger plugin
  // gsap.registerPlugin(ScrollTrigger);

  // // Set up the scroll-triggered animation for each text
  // gsap.from(".reveal-text", {
  //   opacity: 0,
  //   y: 100, // Start from below
  //   duration: 6,
  //   stagger: 0.3,
  //   ease: "power3.out",
  //   scrollTrigger: {
  //     trigger: ".reveal-container",
  //     start: "top bottom", // Animation starts when the top of the trigger hits the bottom of the viewport
  //     end: "bottom top", // Animation ends when the bottom of the trigger hits the top of the viewport
  //     scrub: true, // Scrub the animation to the scroll position
  //     markers: true, // This will show visual markers for debugging (you can remove it later)

  useGSAP(() => {
    gsap.utils
      .toArray<NodeListOf<HTMLImageElement>>(".imgz")
      .forEach((imgz) => {
        gsap.from(imgz, {
          scale: 0.92,
          delay: 0.6,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: imgz,
            start: "-10% 80%",
            end: "10% 20%",
            scrub: true,
          },
        });
      });

    // gsap.utils
    //   .toArray<NodeListOf<HTMLImageElement>>(".txtuu")
    //   .forEach((txt) => {
    //     gsap.from(txt, {
    //       x: 50,
    //       opacity: 0.8,
    //       delay: 0.2,
    //       duration: 0.8,
    //       stagger: 0.2,
    //       ease: "elastic.in",
    //       scrollTrigger: {
    //         trigger: ".txt",
    //         start: "top 50%",
    //         markers: true,
    //         // end: "10% 20%",
    //         scrub: true,
    //       },
    //     });
    //   });

    gsap.from(".txt", {
      opacity: 0,
      x: 30,
      // duration: 1,
      stagger: 0.1, // Stagger animation for each element with a 0.3s

      ease: "power3.out",

      scrollTrigger: {
        trigger: textRef.current,
        start: "-20% 70%",
        scrub: true,
      },
    });

    gsap.from(".snd", {
      opacity: 0,
      y: 50,

      delay: 0.1,
      // duration: 1,
      stagger: 0.1, // Stagger animation for each element with a 0.3s

      ease: "power3.out",

      scrollTrigger: {
        trigger: textRef.current,
        start: "-20% 70%",
        scrub: true,
      },
    });

    gsap.from(".icon", {
      scale: 0.75,
      ease: "power3.in",
      stagger: 0.02,
      delay: 0.6,

      scrollTrigger: {
        trigger: textRef.current,
        start: "-30% 70%",
        scrub: true,
        // markers: true,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "53% 50%",
        // markers: true,
        scrub: true,
      },
    });

    tl.from(
      ".animated-",
      {
        opacity: 0,
        y: 50,
        ease: "power3.out",
      },
      "a"
    ).to(containerRef.current, {
      y: 200,
    });
  });

  return (
    <div ref={containerRef} id="features" className=" z-10 relative">
      <div className="reveal-text max-w-[1360px] py-[80px] lg:py-[256px] px-[40px] flex flex-col  items-center lg:gap-[112px] mx-auto md:gap-[90px] gap-[72px] w-full md:py-[192px] ">
        <div className="flex flex-col lg:flex-row justify-center items-center xl:gap-[112px] lg:gap-[96px] md:gap-[68px] sm:gap-[48px] gap-[40px]">
          <Image
            src={send}
            alt="$640"
            className="max-w-[624px] max-h-[624px] w-full imgz "
          />
          <div
            ref={textRef}
            className="flex flex-col items-center md:items-start gap-[36px] "
          >
            <div className="w-[300px] sm:w-[400px] md:w-full scroll">
              <h3
                className={`${geistMono.className} lg:text-[46px] lg:leading-[55.2px] text-[#0C141D] md:text-[40px] sm:text-[32px] text-[30px] leading-8 text-center md:text-left animatet snd`}
              >
                Send money instantly with low fees
              </h3>
            </div>
            <div className="flex flex-col gap-[14px] text-[16px] md:text-[20.5px] text-left  items-start scroll">
              <div className="flex gap-[14px]   text-[#566576] items-start justify-center">
                <Image
                  src={check}
                  alt="tick"
                  className="md:w-[23px] w-[18px] object-contain icon"
                />{" "}
                <p className="txt">Send to names, not numbers.</p>
              </div>

              <div className="flex gap-[14px] items-start justify-center text-[#566576]">
                <Image
                  src={check}
                  alt="tick"
                  className="md:w-[23px] w-[18px] text-[18px] icon"
                />{" "}
                <p className="txt">Send money to people not on Keshpay.</p>
              </div>

              <div className="flex gap-[14px] items-start justify-center text-[#566576] ">
                <Image
                  src={check}
                  alt="tick"
                  className="md:w-[23px] w-[18px] text-[18px] icon"
                />
                <p className="txt">
                  Choose the currency and amount you want to send.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row-reverse justify-center items-center xl:gap-[112px] lg:gap-[96px] md:gap-[68px] sm:gap-[48px] gap-[40px]">
          <Image
            src={get}
            alt="$400"
            className="max-w-[624px] max-h-[624px] w-full imgz "
          />
          <div className="flex flex-col items-center md:items-start gap-[36px] ">
            <div className="w-[300px] sm:w-[400px] md:w-full">
              <h3
                className={`${geistMono.className} lg:text-[46px] lg:leading-[55.2px] text-[#0C141D] md:text-[40px] sm:text-[32px] text-[30px] leading-8 text-center md:text-left  `}
              >
                Get paid instantly with Keshpay
              </h3>
            </div>
            <div className="flex flex-col gap-y-[14px] text-[16px] md:text-[20.5px] text-left  items-start">
              <div className="flex gap-[14px]   text-[#566576] items-start justify-center">
                <Image
                  src={check}
                  alt="tick"
                  className="md:w-[23px] w-[18px] object-contain"
                />{" "}
                <p>Send an invoice using Kehpay.</p>
              </div>

              <div className="flex gap-[14px] items-start justify-center text-[#566576]">
                <Image
                  src={check}
                  alt="tick"
                  className="md:w-[23px] w-[18px] text-[18px]"
                />{" "}
                <p>Receive your money in less than 5 seconds.</p>
              </div>

              <div className="flex gap-[14px] items-start justify-center text-[#566576] ">
                <Image
                  src={check}
                  alt="tick"
                  className="md:w-[23px] w-[18px] text-[18px]"
                />
                <p>Withdraw directly to your bank account or in USDC.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center xl:gap-[112px] lg:gap-[96px] md:gap-[68px] sm:gap-[48px] gap-[40px]">
          <Image
            src={take}
            alt="$4800"
            className="max-w-[624px] max-h-[624px] w-full  imgz"
          />
          <div className="flex flex-col items-center md:items-start gap-[36px] ">
            <div className="w-[300px] sm:w-[400px] md:w-full">
              <h3
                className={`${geistMono.className} lg:text-[46px] lg:leading-[55.2px] text-[#0C141D] md:text-[40px] sm:text-[32px] text-[30px] leading-8 text-center md:text-left  `}
              >
                Take full control of your money
              </h3>
            </div>
            <div className="flex flex-col gap-y-[14px] text-[16px] md:text-[20.5px] text-left  items-start">
              <div className="flex gap-[14px]   text-[#566576] items-start justify-center">
                <Image
                  src={check}
                  alt="tick"
                  className="md:w-[23px] w-[18px] object-contain"
                />{" "}
                <p>Complete ownership and control over your money.</p>
              </div>

              <div className="flex gap-[14px] items-start justify-center text-[#566576]">
                <Image
                  src={check}
                  alt="tick"
                  className="md:w-[23px] w-[18px] text-[18px]"
                />{" "}
                <p>
                  Your wallet is self-custodial, so we can’t access your funds.
                </p>
              </div>

              <div className="flex gap-[14px] items-start justify-center text-[#566576] ">
                <Image
                  src={check}
                  alt="tick"
                  className="md:w-[23px] w-[18px] text-[18px]"
                />
                <p>
                  Your private key lets you move your funds to another platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
