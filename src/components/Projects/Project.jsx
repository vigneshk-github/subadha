import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-scroll";


const Project = () => {
  return (
    <div id="projects">
      <div className="flex my-100 items-center justify-center">
        <span
          data-scroll
          data-scroll-speed="0.1"
          className="font-semibold uppercase text-white text-5xl"
        >
          Projects
        </span>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10">
          {cards.map((card) => {
            return (
              <Card card={card} key={card.id} link={card.link}/>
            );
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
      className="group relative h-[350px] w-[550px] overflow-hidden"
    >
      <a href={card.link} target="_blank">
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
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
];
