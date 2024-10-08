import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Comp() {
  const background = useRef(null);
  const introText = useRef(null);
  const p1 = useRef(null);

  useEffect(() => {
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
      .to(introText.current, { y: -200 }, 0)
      .to(p1.current, { y: -600 }, 0);
  }, []);

  return (
    <>
      <div className={styles.homeHeader}>
        <div className={styles.backgroundImage} ref={background}>
          {/* <Image
          src={"/images/kalki.jpg"}
          fill={true}
          alt="background image"
          priority={true}
        /> */}
        </div>
        <div className={styles.intro}>
          <h1 ref={introText} data-scroll data-scroll-speed="0.6">
            ABOUT US
          </h1>
          <p data-scroll data-scroll-speed="0.2">
            Our team crafts beautiful and functional websites that not only
            attract visitors but also convert them into loyal customers.
            Let&apos;s take your digital presence to the next level.
          </p>
        </div>
      </div>
      <div className={styles.team}>
        <h1 data-scroll data-scroll-speed="0.3">
          Meet Our Dedicated Team of Experts
        </h1>
      </div>
    </>
  );
}
