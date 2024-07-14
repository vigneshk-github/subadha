// /pages/index.js or /pages/Home.js
"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Project from "../components/Projects/Project";
import Services from "../components/Services1/Services";
import Testimonial from "../components/Testimonials/Testimonial";
import Prices from "../components/Prices/Prices";
import Timeline from "../components/Timeline/Timeline";
import Team from "../components/Team/Team";
import Clientform from "../components/ClientForm/Clientform";
import Faq from "../components/FAQ/Faq";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      ></link>
      <Header />
      <Project />
      <Services />
      <Testimonial />
      <Prices />
      <Timeline />
      <Team />
      <Clientform />
      <Faq />
    </>
  );
}
