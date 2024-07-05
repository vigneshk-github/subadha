"use client";
import { useEffect } from "react";
import Comp from "../components/Intro/Comp";
import Description from "@/components/Description/Description";
import Header from "@/components/Header/Header";
import Project from "@/components/Projects/Project"
import Footer from "@/components/Footer/Footer";
export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  //Other feature

  return (
    <>
      <Header/>
      <Description />
      <Project/>
      {/* <Comp /> */}
      <Footer/>
    </>
  );
}
