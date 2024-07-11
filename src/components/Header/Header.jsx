"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

export default function Header() {
  useGSAP(() => {
    gsap.fromTo(
      "#img",
      {
        x: 100,
      },
      {
        x: 300,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "bounce.in",
      }
    );
  }, []);

  return (
    <div id="home" className={styles.main}>
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
            <h1 className={styles.intro}>We Build Websites</h1>
            <h1 className={styles.intro}>For Your Brands</h1>
            <div className="but"> 
              <a href="https://calendly.com/subadha-co-in/subadha">
                <button
                  type="button"
                  className="ml-10 bg-slate-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg sm:text-2xl px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                >
                  Book a Call
                </button>
              </a>
              <a href="#projects">
                <button
                  type="button"
                  className="ml-10 bg-slate-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
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
                <p className="flex justify-center items-center pl-4 m-4 sm:px-50 sm:mr-50 text-2xl sm:pl-10 font-normal">
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
