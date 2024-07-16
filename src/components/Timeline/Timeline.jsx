import { motion } from "framer-motion";
import style from "./style.module.css";

export default function Timeline() {
  const items = [
    {
      heading: "Preliminary Meeting and Discovery Phase",
      para: "Discover our detailed process for presenting innovative designs and successful solutions. Every project showcases our dedication to creativity, functionality, and client satisfaction.",
    },
    {
      heading: "Analysis and Strategy Development",
      para: "We start by understanding your business goals, target audience, and specific requirements. This allows us to tailor our approach to best meet your needs.",
    },
    {
      heading: "Website Prototype",
      para: "Our team conducts comprehensive research on your industry, competitors, and market trends. We then formulate a detailed project plan and strategy to ensure alignment with your vision.",
    },
    {
      heading: "Design and Implementation",
      para: "We create wireframes and design mockups that visually depict the structure and layout of your new website, providing a clear representation of the user experience and design direction.",
    },
    {
      heading: "Review and Response",
      para: "Our designers and developers collaborate to bring the mock-up to life, focusing on creating a responsive, aesthetically pleasing, and functional website that meets your specifications.",
    },
  ];

  return (
    <div className="font-body dark:text-white dark:bg-black text-black bg-white">
      <h1 className={style.mainHeading}>
        Our Proven Process for Website Results
      </h1>
      <p className={`text-center ${style.subHeading}`}>
        Discover our detailed process for presenting innovative designs and
        successful solutions. Every project showcases our dedication to
        creativity, functionality, and client satisfaction.
      </p>
      <div className={style.App}>
        <div
          className="absolute left-1/2 top-1/2 w-[50vw] h-[25vh] -z-10 rounded-t-full"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #4A249D, #009FBD, #F9E2AF)",
            filter: "blur(100px)",
            transform: "translate(-50%, -50%)", // Center the element
          }}
        ></div>
        {items.map((item, i) => (
          <Card key={i} heading={item.heading} para={item.para} index={i} />
        ))}
      </div>
    </div>
  );
}

function Card({ heading, para, index }) {
  return (
    <motion.div
      className={`bg-black text-white text-center dark:bg-white dark:text-black ${style.card} `}
      initial={{
        opacity: 0,
        // x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      <h1 className={`font-body ${style.cardheading}`}>{heading}</h1>
      <p className={`font-body ${style.cardpara}`}>{para}</p>
    </motion.div>
  );
}
