// import Image from "next/image";
"use client";

import Footer from "@/components/footer";
import Get from "@/components/get";
import Global from "@/components/global";
import Header from "@/components/header";
import Process from "@/components/process";
import Why from "@/components/why";
import Lenis from "lenis";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

// import Update from "@/components/update";

// import Button from "@/components/button";

export default function Home() {
  useEffect(() => {
    // Initialize a new Lenis instance for smooth scrolling
    const lenis = new Lenis();

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);
  }, []);
  // const containerRef = useRef(null);

  // useGSAP(() => {
  //   gsap.utils.toArray<HTMLElement>(".scroll").forEach((el) => {
  //     gsap.fromTo(
  //       el,
  //       {
  //         opacity: 0,
  //         y: 50,
  //       },
  //       {
  //         scrollTrigger: {
  //           trigger: el, // Trigger the animation when the element enters the viewport
  //           start: "top 80%", // Animation starts when the top of the element hits the bottom of the viewport
  //           end: "bottom 20%", // Ends when the bottom of the element reaches the top of the viewport
  //           // scrub: true, // Makes the animation progress as you scroll

  //           toggleActions: "play none none none",
  //         },
  //         opacity: 1, // Start with 0 opacity
  //         y: 0, // Start 50px below the original position
  //         // The duration of the animation
  //         // stagger: 0.3, // Stagger the animation by 0.2 seconds between each element
  //       }
  //     );
  //   });

  //   // Cleanup all ScrollTriggers when the component is unmounted
  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // });

  return (
    <div className="mx-auto">
      <Header />
      <Global />
      <Process />
      <Why />
      <Get />
      <Footer />
      {/* <Button /> */}
    </div>
  );
}
