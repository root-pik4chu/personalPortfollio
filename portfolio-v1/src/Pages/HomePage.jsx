import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import cat from "../../public/cat-hack.gif";
import gsap from "../assets/gsap.svg";
import images from "../images/heroSectionImages";
import imagesData from "../images/heroSectionImages";
const HomePage = () => {
  return (
    <div>
      <div className="w-full h-[80vh]  text-zinc-50">
        <div className="w-full h-[15vh] "></div>
        <div className="flex w-full h-[16vw]">
          <div className="w-[78vw] h-full ">
            {[
              "Just Me, My Keyboard,",
              "and a Whole Lot of ",
              "React/Animation stuff ",
            ].map((item, index) => {
              return (
                <div className="text-[6vw] leading-[5.5vw] font-extralight ">
                  <h1 className="font-[s2] uppercase">{item}</h1>
                </div>
              );
            })}
          </div>
          <div className="">
            <div className="flex flex-col justify-end w-[23vw] h-full text-justify">
              {[ 
                "(sometimes We)/i blend bold creativity ,",
                "with strategic design to build digital",
                "experiences that captivate and",
                "convert. From identity to interaction,",
                "i/we turn attention into action.",
              ].map((item, index) => {
                return (
                  <div className="text-[1vw] leading-none text-end font-extralight w-full ">
                    <h1 className="font-[s2] uppercase  w-full">{item}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full h-[1vw] border-zinc-400 border-b-1"></div>
        <div className="w-full h-[30vh] ">
          <div className="w-full h-full flex">
            <div className="w-[80%] h-full">
              <div className="w-full h-full flex items-end">
                <div className="w-[70%] h-[35%] ">
                  <div className="w-full h-full flex gap-[1vw]">
                    {imagesData.map((item, index) => {
                      console.log(item.src);
                      const isLastThree = index > imagesData.length - 5;
                      return (
                        <div
                          className={`${
                            isLastThree ? "w-[7vw]" : "w-[3vw]"
                          } flex items-end justify-center`}
                        >
                          <img className="" src={item.src} alt="" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[20%] h-full ">
              <div className="w-full h-full  flex items-end justify-end ">
                <img src={cat} alt="" className=" h-[85%]" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
      {/* projects */}
        <div className="w-full h-screen">

        </div>

        {/* scroller */}


        {/* services */}
                    {/* yo */}

        {/* testimonials */}



        {/* footer */}
    </div>
  );
};

export default HomePage;
