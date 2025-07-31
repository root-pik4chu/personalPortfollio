import React, { useRef } from 'react';
import gsap from 'gsap';

export default function ButtonComponent() {
  const buttonRef = useRef(null);
  const flairRef = useRef(null);

  const handleMouseEnter = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.set(flairRef.current, {
      left: x,
      top: y,
    });

    gsap.to(flairRef.current, {
      width: "30vw",
      height: "30vw",
      duration: 0.8,
      ease: 'power2.out',
    });
  };

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.set(flairRef.current, {
      left: x,
      top: y,
    });
  };

  const handleMouseLeave = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.set(flairRef.current, {
      left: x,
      top: y,
    });

    gsap.to(flairRef.current, {
      width: 0,
      height: 0,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <button
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative px-[2vw] py-[0.5vw] text-white  text-lg border border-white rounded-full overflow-hidden hover:text-black"
      >
        <span
          ref={flairRef}
          className="absolute bg-white  rounded-full pointer-events-none"
          style={{
            width: 0,
            height: 0,
            transform: 'translate(-50%, -50%)',
          }}
        ></span>
        <span className="relative z-10 transition-colors duration-300 ">
          Get Vanilla
        </span>
      </button>
    </div>
  );
}
