'use client';

import Update from './update';
import Button from './button';
import localeFont from 'next/font/local';
import Image from 'next/image';
import global from '@/assets/frame.png';
// import Pop from "./pop";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Logo from './logo';
import TextWithSpinner from './TextWithSpinner';

const geistMono = localeFont({
  src: '../fonts/Gilroy-SemiBold.ttf',
});

export default function Global() {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(imageRef.current, {
      scale: 0.92,
      delay: 1,
      ease: 'expo.inOut',
    });

    gsap.from('.animated', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3, // Stagger animation for each element with a 0.3s
      delay: 0.3,
      ease: 'power3.out',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: '53% 50%',
        scrub: true,
      },
    });

    tl.to(containerRef.current, {
      y: 200,
    });
  });

  return (
    <div ref={containerRef} className=' px-[40px] z-0 '>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col gap-[12px] md:gap-[24px]  mx-auto items-center justify-center  max-w-[980px] '>
          <Update />
          <div
            className={`${geistMono.className} text-center lg:text-[112px] md:text-[84px] md:leading-[84px] lg:leading-[112px] md:text- text-[56px] leading-[56px] text-[#001329] animated fle items-baseline justify-around `}>
            {/* <div className='relative'>
              Gl&nbsp;&nbsp;bal payments made effortless <Logo />
            </div> */}

            <h1 className='relative flex w-full flex-wrap justify-center gap-x-4 md:gap-x-6 lg:gap-x-8'>
              <TextWithSpinner /> <span className=' bordr'>payments</span>
              <span>made</span> <span>effortless</span>
            </h1>
          </div>
          <p className='text-[#3E5066] c text-[16px] md:text-[22px] lg:text-[24px] text-center leading-[23.04px] max-w-[560px] md:leading-[34.56px] animated'>
            Enjoy an affordable and speedy way to send and receive money
            globally.
          </p>
          <Button className='animated'>Get Keshpay</Button>
        </div>

        <div className='relative group  lg:mb-[128px]  lg:mt-[80px] md:mt-[48px]  md:mb-[68px] mt-[36px] mb-[50px]'>
          <Image
            ref={imageRef}
            src={global}
            quality={100}
            alt='global'
            className=' min-w-[320px] lg:rounded-[12px] rounded-[3px] sm:roundd '
          />

          {/* <Pop /> */}
        </div>
      </div>
    </div>
  );
}
