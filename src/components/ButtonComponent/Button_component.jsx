import React from "react";

const Button_component = () => {
  return (
    <>
      <style>{`
         *, *::before, *::after {
            box-sizing: border-box;
         }
         html {
            color-scheme: light dark;
         }

       
          button {
            position: relative;
            padding: 0.75rem 1.5rem;
            font-size: 1vw;
            text-transform: uppercase;
            border: none;
            cursor: pointer;
            background: color-mix(in oklch, canvas, canvasText 4%);
            color: color-mix(in oklch, canvasText, #0000 25%);
            transition: background 0.26s ease-out, color 0.26s ease-out;
            
          }

          button:focus-visible {
            outline: color-mix(in oklch, canvasText, #0000) dashed 1px;
            outline-offset: 0.5rem;
          }

          button:is(:hover, :focus-visible) {
            color: canvasText;
            background: color-mix(in oklch, canvas, canvasText 10%);
          }

          button:is(:hover, :focus-visible) .corners span:nth-of-type(even) {
            transform: translateY(100cqh);
          }

          button:is(:hover, :focus-visible) .corners span:nth-of-type(odd) {
            transform: translateX(100cqi);
          }

          button:is(:hover, :focus-visible) .corners span {
            transition: transform 0.26s 0.12s ease-out;
          }

          button:is(:hover, :focus-visible) .corners span svg {
            rotate: 360deg;
            transition: rotate 0.26s 0.12s ease-out;
          }

          .corners {
            pointer-events: none;
            container-type: size;
            position: absolute;
            inset: 0;
            z-index: 3;
          }

          .corners span {
            width: 10px;
            height: 10px;
            display: grid;
            place-items: center;
            offset-path: border-box;
          }

          .corners span svg {
            width: 100%;
          }

          .corners span:nth-of-type(1) {
            offset-distance: 0;
          }

          .corners span:nth-of-type(2) {
            offset-distance: 100cqi;
          }

          .corners span:nth-of-type(3) {
            offset-rotate: 180deg;
            offset-distance: calc(100cqi + 100cqh);
          }

          .corners span:nth-of-type(4) {
            offset-rotate: 180deg;
            offset-distance: -100cqh;
          }

      `}</style>

      <button aria-label="Get access">
        <span className="corners">
          {[...Array(4)].map((_, i) => (
            <span key={i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </span>
          ))}
        </span>
        <span className="font-[s2]">Contact</span>
      </button>
    </>
  );
};

export default Button_component;
