"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const feedData = [
  "https://www.instagram.com/p/DBHYbvsSLMn/embed",
  "https://www.instagram.com/p/DBHYbvsSLMn/embed",
  "https://www.instagram.com/p/DBHYbvsSLMn/embed",
  "https://www.instagram.com/p/DBHYbvsSLMn/embed",
  "https://www.instagram.com/p/DBHYbvsSLMn/embed",
  "https://www.instagram.com/p/DBHYbvsSLMn/embed",
  "https://www.instagram.com/p/DBHYbvsSLMn/embed",
];

const InstagramFeed = () => {
  const wrapper = useRef();
  const slider = useRef();

  useGSAP(
    () => {
      gsap.to(slider.current, {
        x: () => {
          const sliderWidth = slider.current.getBoundingClientRect().width;
          return -(sliderWidth - window.innerWidth * 0.9);
        },
        ease: "none",
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top top",
          end: () => `+=${window.innerHeight * 4}`,
          pin: wrapper.current,
          scrub: true,
        },
      });
    },
    { revertOnUpdate: true, dependencies: [] }
  );

  return (
    <div ref={wrapper} className="h-screen pt-[72px] overflow-x-clip px-[5vw]">
      <div ref={slider} className="flex w-max h-full items-center gap-12">
        {feedData.map((post, i) => (
          <div
            key={i}
            style={{
              backgroundColor: `rgb(${i * 15 + 100}, ${i * 15}, ${i * 15})`,
            }}
            className="shrink-0 aspect-[400/620] h-[70%] border rounded-lg overflow-hidden"
          >
            <iframe
              src={post}
              width="400"
              height="620"
              scrolling="no"
              className="w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
