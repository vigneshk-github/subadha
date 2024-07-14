"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { useContext } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { ThemeContext } from "../ThemeProvider.js";

export default function Header() {

  const ctx = useContext(ThemeContext);

  useGSAP(() => {
    gsap.fromTo(
      "#img",
      {
        x: 100,
        rotateY:0
      },
      {
        x: 105,
        repeat: -1,
        yoyo:true,
        rotateY:180,
        duration: 4,
        ease: "bounce.in",
      }
    );
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
            <h1 className={`sm:px-4  mx-20 ${styles.intro}`}>We Build Websites</h1>
            <h1 className={`sm:px-4 mx-20 ${styles.intro}`}>For Your Brands</h1>
            <div className="but">
              <a href="https://calendly.com/subadha-co-in/subadha">
                <button
                  type="button"
                  className="sm:ml-24 mt-6 -ml-4 bg-slate-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xl  px-2 py-2 sm:px-5 sm:py-2.5 text-center sm:me-2 sm:mb-2 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                >
                  Book a free Call
                </button>
              </a>
              <a href="#projects">
                <button
                  type="button"
                  className="ml-10 bg-slate-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xl px-2 py-2 sm:px-5 sm:py-2.5 text-center sm:me-2 sm:mb-2 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                >
                  Projects
                </button>
              </a>
            </div>
            <script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            ></script>
            <div className="flex flex-col md:flex-row mt-8 w-full">
              <div className="flex-1 mb-4 md:mb-0 ">
                <p className="flex px-10 mx-4 sm:text-left text-center py-4   justify-center items-center pl-4 m-4 sm:px-50 sm:mr-50 text-2xl sm:pl-15 sm:ml-20 font-normal">
                  Explore our diverse portfolio of innovative web designs and
                  successful projects. Each piece reflects our commitment to
                  quality, creativity, and client satisfaction.
                </p>
              </div>
              <div
                id="img"
                className="flex-1 justify-end -mt-10 md:-mt-32 top-30 right-20"
              >
                <Image
                  src="/images/logo.png"
                  height={250}
                  width={250}
                  alt="Logo"
                  className={styles.responsiveImage}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
