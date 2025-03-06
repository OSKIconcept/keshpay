"use client";

import gsap from "gsap";
import { useRef } from "react";

type TButton = {
  children: React.ReactNode;
  className?: string;
  handleClick?: () => void;
};

export default function Button({ children, className }: TButton) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  function handleClick() {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      duration: 0.1,
      ease: "Power3.out",
      onComplete: () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          duration: 0.2,
          ease: "power4.inOut",
          onComplete: () => {
            vibrateButton();
          },
        });
      },
    });
    // console.log("yes");
  }

  const vibrateButton = () => {
    // Create a vibration effect by rotating and moving the button
    gsap.to(buttonRef.current, {
      rotation: 10, // Slight rotation
      x: -5, // Small horizontal shift
      y: 5, // Small vertical shift
      duration: 0.1, // Duration for one vibration step
      repeat: 3, // Repeat the vibration effect 5 times
      yoyo: true, // The effect should reverse on each repetition
      ease: "none", // No easing to make it look like a quick shake
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={` ${className} hover:bg-[#EBF4FF] hover:text-[#001C3D] items-center justify-center bg-[#1474E1] text-white rounded-[8px] px-[22px] py-[11px] md:flex transition-colors ease-in-out duration-300 text-sm`}
    >
      {children}
    </button>
  );
}
