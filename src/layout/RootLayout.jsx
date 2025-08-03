import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Lenis from "lenis";
const RootLayout = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      
    });
    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () =>{
      lenis.destroy();
    }

  }, []);

  return (
    <div className="bg-black">
      <Navbar />
      <div className="w-full px-[1vw]">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
