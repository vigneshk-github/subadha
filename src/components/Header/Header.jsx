"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { Suspense, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../ThemeProvider.js";
import Scene from "../../../public/images/Scene";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ambientLight } from "@react-three/drei";

export default function Header() {
  const ctx = useContext(ThemeContext);

  const textOptions = ["Hello", "World", "React"];

  const [currentText, setCurrentText] = useState(textOptions[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(
        (prevText) =>
          textOptions[(textOptions.indexOf(prevText) + 1) % textOptions.length]
      );
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="home"
      className={`text-black bg-white dark:text-green-50 dark:bg-black  ${styles.main}`}
    >
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
      >
        <div className={styles.header}>
          <div className={styles.container}>
            <h1 className={`sm:px-4  mx-20 ${styles.intro}`}>
              We Build Websites
            </h1>
            <h1 className={`sm:px-4 mx-20 ${styles.intro}`}>
              For Your
              <motion.span
                key={currentText} // Reset animation on text change
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {` ${currentText}`}
              </motion.span>
            </h1>

            <div className="but">
              <a
                href="https://calendly.com/subadha-co-in/subadha"
                className="sm:ml-28 pt-10 sm:pt-0 ml-0 relative inline-block text-lg group"
              >
                <span className="relative z-10 block px-5 pt-3 py-3 sm:px-5 sm:py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-7 sm:px-5 sm:py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">Book a Free Call </span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
              <a
                href="#projects"
                className=" ml-10 relative inline-block text-lg group"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">Projects</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </div>

            <script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            ></script>
            <div className="flex flex-col md:flex-row mt-8 w-full">
              <div className="flex-1 mb-4 md:mb-0 ">
                <p className="flex px-10 mx-4 sm:text-left text-center -py-20  justify-center items-center pl-4 m-4 sm:px-50 sm:mr-50 text-2xl sm:pl-15 sm:ml-20 sm:pr-[600px] font-normal">
                  Explore our diverse portfolio of innovative web designs and
                  successful projects. Each piece reflects our commitment to
                  quality, creativity, and client satisfaction.
                </p>
              </div>
              <div className={styles.lightFx}></div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="absolute ml-[900px] -mt-[70px] mb-[100px] top-26 w-[500px] h-[700px] ">
        <Canvas className="mb-[100px]">
          <ambientLight intensity={1.2} />
          <OrbitControls enableZoom={false}/>
          <Suspense fallback={null}>
            <Scene scale={[0.18, 0.18, 0.18]} />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </div>
    </div>
  );
}
