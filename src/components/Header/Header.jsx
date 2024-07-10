"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

export default function Header() {
  const transition = { duration: 2, type: "spring" };
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-300px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    gsap.set(thirdText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.5 * direction;
  };

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
            duration: 2,
          },
        }}
        viewport={{ once: true }}
      >
        <div data-scroll data-scroll-speed="0.3" className={styles.header}>
          <div className={styles.container}>
            <h1 className={styles.intro}>We Build Websites For</h1>
            <h1 className={styles.intro}>For Your Brands</h1>
            <a href="https://calendly.com/subadha-co-in/subadha">
              <button
                type="button"
                className="ml-10 bg-slate-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
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
            <script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            ></script>
            <div className="flex flex-col md:flex-row mt-8 w-full">
              <div className="flex-1 mb-4 md:mb-0 ">
                <p className="px-50 mr-50 text-2xl pl-10">
                  Explore our diverse portfolio of innovative web designs and
                  successful projects.Each piece reflects our commitment to
                  quality, creativity, and client satisfaction.
                </p>
              </div>
              <div
                id="img"
                className="flex-1 justify-end -mt-10 md:-mt-32 top-40 right-20"
              >
                <Image
                  src="/images/emoji1.png"
                  height={400}
                  width={400}
                  alt="Logo"
                  className={styles.responsiveImage}  
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.sliderContainer}>
          <div ref={slider} className={styles.slider}>
            <p ref={firstText}>Subadha SERVICES FOR YOU -</p>
            <p ref={secondText}>Subadha SERVICES FOR YOU -</p>
            <p ref={thirdText}>Subadha SERVICES FOR YOU -</p>
          </div>
        </div> */}
      </motion.div>
    </div>
  );
}
