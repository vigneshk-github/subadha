"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Header() {
  const firstText = useRef(null);
  const secondText = useRef(null);
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
    requestAnimationFrame(animate);
    xPercent += 0.05 * direction;
  };

  return (
    <div id="home" className={styles.main}>
      <div data-scroll data-scroll-speed="0.3" className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.intro}>We Build Websites For</h1>
          <h1 className={styles.intro}>E-commerce Brands</h1>
          <a href="https://calendly.com/subadha-co-in/subadha">
            <button
              className={`btn ${styles.callBtn} ${styles.btnSm} ${styles.btnMd} ${styles.btnLg}`}
            >
              Book a Call
            </button>
          </a>
          <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          ></script>
          <div className="flex flex-col md:flex-row mt-8 w-full">
            <div className="flex-1 mb-4 md:mb-0 md:mr-4">
              <p className="text-lg">
                Explore our diverse portfolio of innovative web designs and
                successful projects.
                <p>
                  Each piece reflects our commitment to quality, creativity, and
                  client satisfaction.
                </p>
              </p>
            </div>
            <div className=" flex-2 justify-end -mt-10 md:-mt-32 top-30 right-10">
              <Image
                src="/images/logo.png"
                height={400}
                width={400}
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Freelance Developer -</p>
          <p ref={secondText}>Freelance Developer -</p>
        </div>
      </div>
    </div>
  );
}
