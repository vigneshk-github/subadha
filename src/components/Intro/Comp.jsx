"use client";
import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Comp() {
  const background = useRef(null);
  const homeHeader = useRef(null);
  const introText = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top top",
        end: "+=300px",
      },
    });

    timeline
      .fromTo(
        background.current,
        { clipPath: `inset(15%)` },
        { clipPath: `inset(0%)` }
      )
      .to(background.current, { scale: 1 }, 0)
      .to(introText.current, { y: -200 }, 0); // Animate the text
  }, []);

  return (
    <div ref={homeHeader} className={styles.homeHeader}>
      <div className={styles.backgroundImage} ref={background}>
        <Image
          src={"/images/kalki.jpg"}
          fill={true}
          alt="background image"
          priority={true}
        />
      </div>
      <div className={styles.intro}>
        <h1 ref={introText} data-scroll data-scroll-speed="0.3">
          ABOUT US
        </h1>
      </div>
    </div>
  );
}
