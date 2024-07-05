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
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />
      <Description />
      <Project />
      <Testimonial />
      {/* <Comp /> */}
      <Footer />
    </>
  );
}
