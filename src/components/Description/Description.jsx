"use client";
import style from "./style.module.css";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Description() {
  const phrases = [
    "Our team crafts beautiful and functional",
    "websites that not only attract visitors ",
    "but also convert them into loyal customers.",
    "Let's take your digital presence to next level."
  ];

  return (
    <div className={style.description}>
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({ children }) {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        x: -200, // Starting position
        opacity: 0, // Starting opacity
      },
      {
        x: 0, // Ending position
        opacity: 1, // Ending opacity
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom", // Start when the top of the element hits the bottom of the viewport
          end: "top 75%", // End when the top of the element hits 75% of the viewport height
          scrub: true,
          // markers: true, // For debugging purposes
        },
        ease: "power3.out",
      }
    );
  }, []);

  return <p ref={textRef}>{children}</p>;
}