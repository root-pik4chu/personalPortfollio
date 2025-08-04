import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import cat from "../../public/cat-hack.gif";
import gsap from "../assets/gsap.svg";
import images from "../images/heroSectionImages";
import imagesData from "../images/heroSectionImages";
import Button_component from "../components/ButtonComponent/Button_component";
import SplitButton from "../components/anotherButton/SplitButton";
import video1 from "../assets/video1.mp4";
const HomePage = () => {
  const skillsData = [
  {
    id: "01",
    title: "Frontend Development",
    stack: ["React", "Next.js", "HTML", "CSS", "JavaScript"],
    description:
      "Crafting clean, responsive, and interactive interfaces. Bringing designs to life with code that flows. Passionate about making the web feel smooth, fast, and fun.",
  },
  {
    id: "02",
    title: "UI/UX Design",
    stack: ["Figma", "Wireframes", "Prototyping", "User Flows", "Accessibility"],
    description:
      "Designing experiences that feel natural and intuitive. From wireframes to polished visuals, I focus on both aesthetics and usability to create delightful user journeys.",
  },
];
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
                  <div className=" text-end font-extralight w-full ">
                    <p className="font-[s2] uppercase  w-full">{item}</p>
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
      <div className="w-full h-[230vh] text-white">
        <div className="space"></div>
        <div className="w-full h-[15vh]">
          <div className="text-[6vw]  uppercase leading-[5.5vw] ">
            <h1>freelance projects</h1>
          </div>
          <div className="">
            <p>Whatever Client Wants i Create </p>
          </div>
      

        </div>
        <div className="space_1"></div>
                    
        <div className="w-full h-[220vh] flex flex-col gap-[1vw]">
          {[1, 2, 3].map(() => {
            return (
              <div className="w-full h-[70vh] ">
                <div className="w-full h-full flex justify-between">
                  <div className="w-[45%] h-full ">
                    <div className="w-full h-full flex flex-col justify-between">
                      <div className="up w-full h-[30%] pt-[5vw]">
                        <h2>infrawave</h2>
                      </div>
                      <div className="down w-full h-[25%] ">
                        <div className="w-full h-full flex flex-col justify-between items-start">
                          <p>
                            We blend bold creativity with strategic design to
                            build digital experiences that captivate and
                            convert. From identity to interaction, we turn
                            attention into action.
                          </p>
                          <SplitButton />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[45%] h-full bg-amber-700"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="space"></div>
      {/* more porjects */}
      

      {/* services */}
      <div className="w-full h-[130vh] text-white">
        <div className="space"></div>
        <h1>services</h1>
        {/* <p>things i can do </p> */}
        <div className="space_1"></div>

        {
            <div className="w-full text-white border-b">
      {skillsData.map((item, index) => (
        <div
          key={index}
          className="w-full h-[40vh] px-[10vw] flex border-t"
        >
          <div className="w-1/2 py-[2vw] flex items-start">
            <h2>{item.id}</h2>
          </div>
          <div className="w-1/2 flex flex-col justify-between py-[2vw]">
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {item.stack.map((tech, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <h4 className="text-sm capitalize">{tech}</h4>
                    {i < item.stack.length - 1 && (
                      <div className="w-1 h-1 rounded-full bg-white" />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
            <div>
              <SplitButton />
            </div>
          </div>
        </div>
      ))}
    </div>
          }
      </div>
      {/* yo */}

      {/* testimonials */}
      <div className="w-full h-screen bg-red-800">

          

      </div>
      {/* footer */}
    </div>
  );
};

export default HomePage;
