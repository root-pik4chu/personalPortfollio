// SplitButton.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, CustomEase);
CustomEase.create("customEase", "0.65, 0.05, 0, 1");

const SplitButton = ({ text = "Button Text", variant = "primary" }) => {
  const textRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(textRef.current, {
      type: "chars",
      charsClass: "single-letter"
    });

    const chars = split.chars;
    gsap.set(chars, { y: 0 });

    const tl = gsap.timeline({ paused: true });
    tl.to(chars, {
      y: "-1.25em",
      duration: 0.735,
      stagger: 0.01,
      ease: "customEase"
    });

    timelineRef.current = tl;

    return () => {
      split.revert(); // clean up on unmount
    };
  }, []);

  const handleEnter = () => {
    timelineRef.current?.play();
  };

  const handleLeave = () => {
    timelineRef.current?.reverse();
  };

  return (
    <a
      href="#"
      className={`button ${variant === "secondary" ? "secondary" : ""} `}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="u--clip u--rel">
        <p ref={textRef} className="p-reg font-[s2] " data-split="letters">
          {text}
        </p>
      </div>
      <div className="button-bg" />
    </a>
  );
};

export default SplitButton;
