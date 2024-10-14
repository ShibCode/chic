"use client";

import gsap from "gsap";
import { CustomEase, Flip, ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Setup = () => {
  const [lenis, setLenis] = useState(null);

  const pathname = usePathname();

  gsap.registerPlugin(ScrollTrigger, Flip, CustomEase);

  useEffect(() => {
    lenis?.scrollTo(0);
  }, [lenis, pathname]);

  useEffect(() => {
    const lenis = new Lenis();

    setLenis(lenis);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
};

export default Setup;
