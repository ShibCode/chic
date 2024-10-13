"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

const PAGES_WITH_WHITE_BACKGROUND = ["/events/"];

const Header = () => {
  const pathname = usePathname();

  const isWhiteBackground = PAGES_WITH_WHITE_BACKGROUND.some((path) =>
    pathname.startsWith(path)
  );

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
      <button
        className={`uppercase font-bold border-2 rounded-[4px] h-10 px-5 text-[15px] transition-all duration-200 ${
          isWhiteBackground
            ? "text-black hover:text-white border-black hover:bg-black"
            : "text-white hover:text-black border-white hover:bg-white"
        }`}
      >
        MENU
      </button>
    </div>
  );
};

export default Header;
