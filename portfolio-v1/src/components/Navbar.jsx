import React from "react";
import Sahil from "../../public/Sahil.svg";
import { NavLink } from "react-router";
import ButtonComponent from "./ButtonComponent";

const Navbar = () => {
  return (
    <div className="w-full h-[20vh]  flex items-center justify-between font-[s2]">
      <div className="w-1/6 h-full customFlex ">
        <img className="h-[90%]" src={Sahil} alt="img" />
      </div>
      <div className="w-full h-full customFlex  gap-[2vw]">
        {["Home", "Projects", "About", "Contact"].map((item, index) => {
         const path = item === "Home" ? '/' : `/${item}`
          return (
            <div className="">
              <NavLink to={path}>
                <h1 className="text-white">{item} 
                  
                </h1>
              </NavLink>
            </div>
          );
        })}
      </div>
      <div className="w-1/6  h-[20vh] customFlex text-white">
        {/* <button className="border px-[1.5vw] py-[1vh] rounded-full">contact us</button> */}
        <ButtonComponent />
      </div>
    </div>
  );
};

export default Navbar;
