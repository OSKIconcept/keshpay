import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo-black.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function RotatingLogo() {
  //   const logoRef = useRef(null);

  useGSAP(() => {
    gsap.from('.im', {
      //   scale: 0.8,
      //   repeat: -1,
      //   ease: "elastic.in",

      rotation: 360,
      repeat: -1, // Infinite loop
      duration: 4.5, // 5 seconds for one full rotation
      ease: 'none', // No easing, constant speed
      transformOrigin: 'center center', // Rotate from the center
    });
  });
  return (
    <div className=' justify-center items-center flex lg:left-[17%] lg:top-[20%] md:left-[15%] md:top-[20%] sm:left-[21%] sm:top-[20%] left-[41.5%] top-[11%]  '>
      <Image
        src={logo}
        alt='logo'
        className='w-[23px] md:w-[35px] lg:w-[48px] im sm:w-[26px]'
      />
    </div>
  );
}
