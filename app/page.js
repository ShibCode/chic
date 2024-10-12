import React from "react";
import Hero from "@/pages/Home/Hero";
import Gallery from "@/pages/Home/Gallery";
import EventShowcase from "@/pages/Home/EventShowcase";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Home = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <EventShowcase />
    </>
  );
};

export default Home;
