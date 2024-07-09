"use client";
import { useEffect } from "react";
import Comp from "../components/Intro/Comp";
import Description from "@/components/Description/Description";
import Header from "@/components/Header/Header";
import Project from "@/components/Projects/Project";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";
import Testimonial from "@/components/Testimonials/Testimonial";
import Prices from "@/components/Prices/Prices";
import Services from "@/components/Services1/Services";
import ContactUs from "@/components/Contact/ContactUs";
import Team from "@/components/Team/Team";
import Timeline from "@/components/Timeline/Timeline";
import Faq from "@/components/FAQ/Faq";
import Clientform from "@/components/ClientForm/Clientform";
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

  //Other feature

  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />
      {/* <Description />  */}
      <Project />
      <Services/>
      <Testimonial />
      <Prices/>
      <Timeline/>
      <Team/>
      <ContactUs/>
      <Clientform/>
      <Faq/>
      <Footer />
    </>
  );
}
