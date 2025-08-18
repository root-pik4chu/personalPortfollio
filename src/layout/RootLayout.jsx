import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Lenis from "lenis";
import SplitButton from "../components/anotherButton/SplitButton";
const RootLayout = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  //
  return (
    <div className="bg-[#0D0D0D]">
      <Navbar />
      <div className="w-full px-[1vw]">
        <Outlet />
      </div>
      <footer className="w-full h-[60vh] relative px-[1vw]">
        <div className="w-full h-full">
          <div className="w-full h-[70%] ">
            <h1 className="w-[80%]">
              do you have <span className="font-[s3]">a question, an idea, or a project</span> you need help with?
              contact us!
            </h1>
            <div className="space_1"></div>
            <SplitButton />
          </div>
          <div className="w-full h-[20%] flex">
            <div className="w-[33%] h-full flex justify-end flex-col">
              <h5>sahilsaundale@gmail.com</h5>
            <h5>+91 9284916631</h5>
            </div>
           <div className="w-[33%] h-full flex justify-end flex-col">
              <h5>LinkedIn</h5>
            <h5>x [twittttr]</h5>

            </div>
            <div className="w-[33%] h-full flex justify-end flex-col">
              <h5>Instagram - [ it's not working]</h5>
            <h5>What's App -[see that number in left corner]</h5>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
