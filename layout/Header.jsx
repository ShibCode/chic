"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

const Header = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="absolute top-0 left-0 z-50 w-full flex justify-end p-4">
      <button className="uppercase text-white hover:text-black font-bold border-2 border-white rounded-[4px] h-10 px-5 text-[15px] hover:bg-white transition-all duration-200">
        MENU
      </button>
    </div>
  );
};

export default Header;
