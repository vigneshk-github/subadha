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
    {
      heading: "Any other queries?",
      para: "Once the initial design and development phase is complete, we present the website to you for review. We gather your feedback and make any necessary adjustments to ensure the final product aligns with your expectations.",
    },
    {
      heading: "Schedule a consultation",
      para: "Schedule a consultation with our expert team to kickstart your project. Let's collaborate to craft a detailed and stunning solution tailored just for you.",
    },
  ];

  return (
    <>
      <h1 className="text-white text-5xl font-bold flex items-center justify-center my-20">
        Our Proven Process for Website Results
      </h1>
      <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto mb-10">
        Discover our detailed process for presenting innovative designs and
        successful solutions. Every project showcases our dedication to
        creativity, functionality, and client satisfaction.
      </p>
      <div className={style.App}>
        {items.map((item, i) => (
          <Card key={i} heading={item.heading} para={item.para} index={i} />
        ))}
      </div>
    </>
  );
}

function Card({ heading, para, index }) {
  return (
    <motion.div
      className={style.card}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 2,
        },
      }}
      viewport={{ once: true }}
    >
      <h1 className={style.cardheading}>{heading}</h1>
      <p className={style.cardpara}>{para}</p>
    </motion.div>
  );
}
