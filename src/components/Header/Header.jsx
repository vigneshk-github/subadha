"use client";
import { Suspense, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../ThemeProvider.js";
import Scene from "../../../public/images/Scene";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Header() {
  const ctx = useContext(ThemeContext);

  const textOptions = ["Business", "Ecommerce", "and More"];

  const [currentText, setCurrentText] = useState(textOptions[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(
        (prevText) =>
          textOptions[(textOptions.indexOf(prevText) + 1) % textOptions.length]
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="home"
      className="font-body text-black bg-white dark:text-green-50 dark:bg-black relative flex pb-10 overflow-hidden z-10"
    >
      {/* Header Content */}
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center justify-between pt-[20vh] px-6 md:px-10 lg:px-20 xl:px-40 w-full"
      >
        {/* Left Side: Text and Buttons */}
        <div className="relative w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Light Effect */}
          <div className="absolute ml-[650px] -mt-[70px] mb-[100px] -bottom-[100px] w-[500px] h-[100px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400   rounded-full opacity-80 blur-2xl"></div>

          {/* Content */}
          <div className="z-10">
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold mb-4 sm:mb-2">
              We Provide Services For Your
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6">
              <motion.span
                key={currentText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
              >
                {` ${currentText}`}
              </motion.span>
            </h1>
            <div className="flex lg:justify-normal sm:justify-center sm:items-center flex-col sm:flex-row mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Book a Free Call Button */}
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ29kzqxxw-Hydb2sSIvA7OOfBHr_QLI7Nssa6k0JdMx6Za8dFuKKuLb68B60h94nzM4H-qPOB0U"
                className="relative inline-block text-sm group"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-[1000px] h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">Book a Free Call</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
              {/* Projects Button */}
              <a
                href="#projects"
                className="relative inline-block text-sm group"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-[1000px] h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">Projects</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </div>
            <p className="mt-4 text-xl">8/12 projects successfully delivered</p>
            <p className="mt-4 text-lg sm:text-xl">
              Explore our diverse portfolio of innovative web designs and
              successful projects. Each piece reflects our commitment to
              quality, creativity, and client satisfaction.
            </p>
          </div>
        </div>

        {/* Right Side: 3D Object */}
        <div className="w-full h-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center ">
          <div className="w-full h-full flex justify-center items-center transform sm:-translate-y-[100px] ">
            <Canvas className="w-full h-full">
              <ambientLight intensity={1.2} />
              <OrbitControls enableZoom={false} />
              <Suspense fallback={null}>
                <Scene scale={[0.19, 0.19, 0.19]} />
              </Suspense>
              <Environment preset="sunset" />
            </Canvas>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
