"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const EventShowcase = () => {
  const logosWrapper = useRef();

  // useGSAP(
  //   () => {
  //     gsap.registerPlugin(ScrollTrigger);

  //     const logos = document.querySelectorAll(".event_brand-logo");

  //     const values = [
  //       { from: -40, to: 40 },
  //       { from: 20, to: -30 },
  //       { from: 30, to: 30 },
  //       { from: -50, to: 10 },
  //       { from: 10, to: -20 },
  //     ];

  //     logos.forEach((logo, index) => {
  //       gsap.fromTo(
  //         logo,
  //         { y: values[index].from },
  //         {
  //           y: values[index].to,
  //           scrollTrigger: {
  //             trigger: logosWrapper.current,
  //             start: "top bottom",
  //             end: "bottom top",
  //             markers: true,
  //             scrub: 1,
  //           },
  //         }
  //       );
  //     });
  //   },
  //   { dependencies: [], revertOnUpdate: true }
  // );

  return (
    <div className="flex flex-col items-center text-center gap-16 pt-[1vw] pb-[3vw]">
      <h2 className="uppercase text-[44px] max-w-[1100px] !leading-[1.2em] font-light font-oreloRegular">
        extraordinary experiences, event design, and production in the heart of{" "}
        <span
          className="font-qwitcher text-[2.5em] leading-[0.4em] translate-y-[0.05em] inline-block"
          style={{ textTransform: "none" }}
        >
          Miami
        </span>
      </h2>

      <div className="flex flex-col gap-10">
        <span>AS SEEN IN:</span>

        <div ref={logosWrapper} className="flex items-center gap-10">
          <img
            src="/haute-living.png"
            alt="Haute Living"
            className="w-[184px] event_brand-logo"
          />
          <img
            src="/vogue.png"
            alt="Vogue"
            className="w-[184px] event_brand-logo"
          />
          <img
            src="/brides.png"
            alt="Brides"
            className="w-[184px] event_brand-logo"
          />
          <img
            src="/grace-ormonde.png"
            alt="Grace Ormonde"
            className="w-[184px] event_brand-logo"
          />
          <img
            src="/carats-cake.png"
            alt="Carats and Cake"
            className="w-[184px] event_brand-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default EventShowcase;
