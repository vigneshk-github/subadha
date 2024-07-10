"use client";
import styles from "./page.module.scss";
import Image from "next/image";

const images = [
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "5.png",
  "6.png",
];

export default function Testimonial() {
  return (
    <main id="testimonial" className={styles.main}>
      <div className={styles.spacer}>Testimonial</div>
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialTrack}>
          {images.concat(images).map((image, index) => (
            <div key={index} className={styles.testimonial}>
              <Image
                src={`/images/${image}`}
                alt={`Testimonial ${index}`}
                width={700}
                height={700}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
