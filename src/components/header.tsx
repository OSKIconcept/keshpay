"use client";

import React, { useEffect, useState } from "react";
import Button from "./button";
import logo from "@/assets/keshpay.png";
import Image from "next/image";
import { CircleDot, Menu, X } from "lucide-react";

export default function Header() {
  // const navLinks = [
  //     {href: "/" , label: Features},
  // ]

  //get selected Option
  const savedOption = localStorage.getItem("selected");
  const initialOption = savedOption ? savedOption : "a";

  const [navOn, setNavOn] = useState(false);
  const [selected, setSelected] = useState(initialOption);

  //store selected Option
  useEffect(() => {
    if (localStorage !== undefined) {
      localStorage.setItem("selected", selected);
    }
  }, [selected]);

  return (
    <div className="text-[#001C3D] text-[16px]  sticky top-0 bg-white  z-40 backdrop-blur-sm bg-opacity-70">
      <div className="max-w-[1360px]  flex justify-between items-center px-[40px] py-[27px] mx-auto ">
        <div className="flex justify-center items-center  gap-2">
          <Image src={logo} alt="keshpayLogo" className="w-[26px]" />
          <p className="text-[24px]">Kespay</p>
        </div>
        <nav className="">
          <ul className="md:gap-[40px] md:justify-center md:items-center md:flex hidden ">
            <li>
              <a
                href="#features"
                className="cursor-pointer"
                // onClick={() => {
                //   featuresRef.current?.scrollIntoView({
                //     behavior: "smooth",
                //   });
                // }}
              >
                Features
              </a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Help">Help</a>
            </li>
          </ul>
        </nav>
        <Button className="hidden">Get Kashpay</Button>
        <div
          onClick={() => setNavOn(!navOn)}
          className="cursor-pointer md:hidden block transition-all ease-in-out duration-500 "
        >
          {navOn ? <X /> : <Menu />}
        </div>

        {/* side bar */}

        {navOn && (
          <nav
            className={`animate-slide-up md:hidden fixed bottom-0 top-0 left-0 right-0 w-full bg-[#EBF4FF] min-h-screen  transform transition-all duration-500  ease-in px-[40px] py-[27px] ${
              navOn ? "translate-y-0 z-50 " : "translate-y-full z-50 "
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center  gap-2">
                <Image src={logo} alt="keshpayLogo" className="w-[26px]" />
                <p className="text-[24px]">Kespay</p>
              </div>

              <div
                onClick={() => setNavOn(!navOn)}
                className="cursor-pointer md:hidden block "
              >
                {navOn ? <X /> : <Menu />}
              </div>
            </div>
            <ul className="text-[16px] gap-[14px] justify-center flex flex-col items-center py-[120px] font-bold">
              <li
                onClick={() => {
                  setSelected("a");
                  setNavOn(!navOn);
                }}
                className="cursor-pointer"
              >
                <a href="#features">
                  {selected === "a" ? (
                    <div className="flex gap-1 justify-center items-center">
                      <CircleDot size={14} />
                      <p>Features</p>
                    </div>
                  ) : (
                    "Features"
                  )}
                </a>
              </li>
              <li
                onClick={() => {
                  setSelected("b");
                  setNavOn(!navOn);
                }}
                className="cursor-pointer"
              >
                <a href="About">
                  {selected === "b" ? (
                    <div className="flex gap-1 justify-center items-center">
                      <CircleDot size={14} />
                      <p>About</p>
                    </div>
                  ) : (
                    "About"
                  )}
                </a>
              </li>
              <li
                onClick={() => {
                  setSelected("c");
                  setNavOn(!navOn);
                }}
                className="cursor-pointer"
              >
                <a href="#Help">
                  {selected === "c" ? (
                    <div className="flex gap-1 justify-center items-center">
                      <CircleDot size={14} />
                      <p>Help</p>
                    </div>
                  ) : (
                    "Help"
                  )}
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
