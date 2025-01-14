import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ReactLogo from "../assets/images/react.png";
import VueLogo from "../assets/images/vue1.png";
import LikeCmt from "../assets/images/like-cmt.webp";
import DownArrow from "../assets/images/down-arrow.png";
import PenLogo from "../assets/images/pen-logo.jpg";
import { FaArrowRight } from "react-icons/fa";

const CardComponet = ({ defaultState, onClick, numbers, title, subtitle }) => {
  const redCardRef = useRef();
  const smallHeadingRef = useRef();
  const imageDivRef = useRef();
  const numberRef = useRef();
  const arrowRef = useRef();

  const [isDivCliked, setIsDivCliked] = useState(false);

  useGSAP(() => {
    if (isDivCliked) {
      gsap.to(smallHeadingRef.current, {
        duration: 1,
        x: 120,
        y: 30,
        rotate: 0,
      });

      gsap.to(redCardRef.current, {
        minWidth: 500,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
        // transformOrigin: "right right",
      });

      gsap.from(imageDivRef.current, {
        x: -220,
        duration: 1,
        opacity: 0,

      });

      gsap.to(imageDivRef.current, {
        x: 0,
        duration: 1,
        opacity: 1,
    
      });

      gsap.to(numberRef.current, {
        x: -130,
        y: -100,
      });

      gsap.to(redCardRef.current, {
        background: "#c33241",
      });
    } else {
      gsap.to(smallHeadingRef.current, {
        duration: 1,
        x: 0,
        y: 0,
        rotate: -90,
      });

      gsap.to(redCardRef.current, {
        duration: 1,
        minWidth: 0,
      });

      gsap.to(numberRef.current, {
        x: 0,
        y: 70,
      });

      gsap.to(redCardRef.current, {
        background: "#f9ebec",
      });
    }
  }, [isDivCliked]);

  useGSAP(() => {
    const handleMouseEnter = () => {
      gsap.to(arrowRef.current, {
        opacity: 1,
        scale: 1.5,
        duration: 0.5,
      });
    };

    const handeleMouseLeave = () => {
      gsap.to(arrowRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
      });
    };

    redCardRef.current.addEventListener("mouseenter", handleMouseEnter);
    redCardRef.current.addEventListener("mouseleave", handeleMouseLeave);

    return () => {
      redCardRef.current.removeEventListener("mouseenter", handleMouseEnter);
      redCardRef.current.removeEventListener("mouseleave", handeleMouseLeave);
    };
  });

  useEffect(() => {
    if (defaultState) {
      setIsDivCliked(true);
    }
  }, [defaultState]);

  useEffect(() => {
    if (!defaultState) {
      setIsDivCliked(false);
    }

    gsap.to(arrowRef.current, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
    });
  }, [defaultState]);

  return (
    <section className="w-full h-[70vh]  mt-10 1">
      <div
        ref={redCardRef}
        onClick={() => {
          if (!isDivCliked) {
            setIsDivCliked(!isDivCliked);
          }
          onClick();
        }}
        // initial={{}}
        // animate={{
        //   background: isDivCliked ? "#c33241" : "#f9ebec",
        // }}
        className={`bg-[#f9ebec] ${
          isDivCliked && "  text-white  "
        } text-[#c33241]  rounded-3xl h-full py-4 px-8  flex flex-col  items-center justify-center gap-10 cursor-pointer transition-colors duration-500 ease-in-out overflow-hidden relative`}
      >
        {/* div to display view course */}

        <div
          className={` w-full text-right ${
            isDivCliked ? "block group" : "hidden"
          } mt-20`}
        >
          <p className="  flex items-center gap-2 text-right  justify-end">
            View all Courses{" "}
            <FaArrowRight className="group-hover:animate-bounce" />
          </p>
        </div>

        {/* div to display images */}
        <div
          ref={imageDivRef}
          className={`grid grid-cols-4 gap-4  w-full ${
            isDivCliked ? "block" : "hidden"
          }`}
        >
          <div className=" max-h-24 max-w-24 rounded-xl overflow-hidden -rotate-12">
            <img src={ReactLogo} className="object-scale-down h-full w-full " />
          </div>
          <div className="rotate-12 max-h-24 max-w-24">
            <img src={LikeCmt} className="object-scale-down h-full w-full" />
          </div>
          <div className=" -rotate-12 max-h-26 max-w-26 ">
            <img src={VueLogo} className="object-scale-down h-full w-full" />
          </div>
          <div className=" max-h-20 max-w-20 rounded-xl overflow-hidden rotate-12 relative">
            <img
              src={PenLogo}
              className="object-scale-down h-full w-full  "
            />
          </div>
        </div>

        <div ref={smallHeadingRef} className=" max-w-64 select-none  ">
          <p className="text-2xl font-bold">{title}</p>
          <p className=" text-wrap">{subtitle}</p>
        </div>

        <div ref={numberRef} className=" relative select-none">
          <p className="text-9xl font-bold">
            {numbers}
            <sup className="absolute text-5xl -top-4 -right-4">+</sup>
          </p>
        </div>
      </div>

      {[Array(3)].map((_, i) => (
        <div
          ref={arrowRef}
          className={`absolute top-32 left-${30 + i * 10} h-6 w-fit `}
          key={i}
        >
          {/* <span className="text-xs text-neutral-600 ">Click here</span> */}
          <img src={DownArrow} className="object-scale-down h-full w-full" />
        </div>
      ))}
    </section>
  );
};

export default CardComponet;
