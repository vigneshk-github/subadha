"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";
import Image from "next/image";

const images = [
  "4(1).png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "5.png",
  "6.png",
];

export default function Testimonial() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main id="testimonial" className={styles.main}>
      <div className={styles.spacer}>Testimonial</div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={images.slice(1, 3)} />
        <Column images={images.slice(4, 6)} />
        <Column images={images.slice(6, 9)} />
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
}

const Column = ({ images }) => {
  return (
    <div className={styles.column}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={`/images/${src}`} alt="image" fill />
          </div>
        );
      })}
    </div>
  );
};
