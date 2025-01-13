import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ReactLogo from "../assets/images/react.png";

const CardComponet = ({ defaultState }) => {
  const redCardRef = useRef();
  const smallHeadingRef = useRef();

  const [isDivCliked, setIsDivCliked] = useState(false);

  useEffect(() => {
    if (defaultState) {
      setIsDivCliked(true);
    }
  }, [defaultState]);

  useGSAP(() => {
    if (isDivCliked) {
      gsap.to(smallHeadingRef.current, {
        duration: 1,
        x: 10,
        y: 20,
        rotate: 0,
      });
    } else {
      gsap.to(smallHeadingRef.current, {
        duration: 1,
        x: 0,
        y: 0,
        rotate: -90,
      });
    }
  }, [isDivCliked]);

  return (
    <section className="w-full h-[70vh]  mt-10 1">
      <motion.div
        ref={redCardRef}
        onClick={() => setIsDivCliked(!isDivCliked)}
        initial={{}}
        animate={{
          background: isDivCliked ? "#c33241" : "#f9ebec",
        }}
        className={`bg-[#f9ebec] ${
          isDivCliked && "  text-white  min-w-[500px]"
        } text-[#c33241]  rounded-2xl h-full py-4 px-8  flex flex-col  items-center justify-center gap-10 cursor-pointer transition-colors duration-500 ease-in-out`}
      >
        {/* div to display view course */}

        <div
          className={` w-full text-right ${isDivCliked ? "block" : "hidden"}`}
        >
          <p>View Course </p>
        </div>

        {/* div to display images */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: isDivCliked ? 1 : 0,
            x: isDivCliked ? 0 : -50,
          }}
          transition={{ duration: 0.5 }}
          className={`grid grid-cols-4 gap-4  w-full ${
            isDivCliked ? "block" : "hidden"
          }`}
        >
          <div>
            <img src={ReactLogo} />
          </div>
          <div>
            <img src={ReactLogo} />
          </div>
          <div>
            <img src={ReactLogo} />
          </div>
          <div>
            <img src={ReactLogo} />
          </div>
        </motion.div>

        <div
          className={`${
            isDivCliked
              ? "flex items-center justify-center gap-8"
              : "flex flex-col"
          } `}
        >
          <motion.div
            ref={smallHeadingRef}
            className={`text-xl max-w-[300px]  ${
              isDivCliked ? " order-2" : "-rotate-90"
            } select-none `}
          >
            <p className="font-bold text-2xl">All Courses</p>
            <p className="text-sm">
              Courses you're powering
              <br />
              through right now.
            </p>
          </motion.div>

          <div
            className={`mt-0   items-center justify-center select-none ${
              isDivCliked ? "order-1" : ""
            }`}
          >
            <p className=" ">
              <span className="font-bold  text-[150px]  ">23</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CardComponet;
