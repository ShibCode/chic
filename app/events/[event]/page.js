"use client";

import { useParams } from "next/navigation";
import React from "react";
import portfolioData from "@/data/portfolio";

const Event = () => {
  const params = useParams();

  const eventData = portfolioData[params.event - 1];

  return (
    <div className="flex flex-col px-[5vw] items-center">
      <h1 className="font-italiana text-6xl font-bold my-20">
        {eventData.venue}
      </h1>

      <div className="grid grid-cols-3 gap-[3.333vw] [grid-auto-rows:500px]">
        {eventData.images.map((image, i) => (
          <div
            key={i}
            style={{
              gridColumn: `span ${(image.aspect && image.aspect[0]) || 1}`,
              gridRow: `span ${(image.aspect && image.aspect[1]) || 1}`,
            }}
            className={``}
          >
            <img
              src={image.src}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
