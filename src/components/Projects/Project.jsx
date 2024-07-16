"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Project = () => {
  return (
    <div id="projects">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["36%", "-38%"]);

  return (
    <section ref={targetRef} className="text-black bg-white dark:bg-black dark:text-white -mt-[103px] -mb-40 sm:mb-20 sm:mt-0 relative h-[300vh]">
      <div className="flex-col sticky top-0 flex h-screen items-center overflow-hidden">
        <div className=" px-4 mx-auto max-w-screen-md sm:py-4 sm:px-4 flex flex-col sm:pb-[-10px] items-center justify-center">
          <span className="font-semibold mb-20 text-6xl sm:text-7xl">
            Projects
          </span>
          <p className="mb-5 px-4 py-4 font-normal text-center text-2xl sm:text-2xl">
            Explore our diverse portfolio showcasing innovative web solutions
            across various industries, each tailored to meet unique client
            needs.
          </p>
        </div>
        <motion.div style={{ x }} className="flex gap-10">
          {cards.map((card) => {
            return <Card card={card} key={card.id} link={card.link} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[300px] w-[530px] sm:h-[365px] sm:w-[730px] overflow-hidden"
    >
      <a href={card.link} target="_blank">
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
      </a>
    </div>
  );
};

export default Project;

const cards = [
  {
    url: "/images/p1.png",
    title: "Title 1",
    id: 1,
    link: "https://savegreenecobags.com/",
  },
  {
    url: "/images/p2.png",
    title: "Title 2",
    id: 2,
    link: "https://esratechedu.com/",
  },
  {
    url: "/images/p3.png",
    title: "Title 3",
    id: 3,
    link: "https://fmgreenindustry.com/",
  },
  {
    url: "/images/p4.png",
    title: "Title 4",
    id: 4,
    link: "https://sricmrinfra.com/",
  },
  {
    url: "/images/p5.png",
    title: "Title 5",
    id: 5,
    link: "https://gfemsolutions.com/",
  },
  {
    url: "/images/p6.png",
    title: "Title 6",
    id: 6,
    link: "https://accugenediagnostics.com/",
  },
];
