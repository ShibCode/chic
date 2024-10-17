"use client";

import React from "react";

const InstagramFeed = async () => {
  const feed = { data: [] };

  return (
    <div className="flex flex-col items-center text-center mt-24 sm:mt-32 lg:mt-40 mb-10 gap-9 sm:gap-12">
      <h2 className="uppercase text-[40px] sm:text-[46px] lg:text-[52px] !leading-[1.1em] font-italiana font-semibold">
        FOLLOW ALONG
      </h2>

      <h3 className="uppercase font-italiana text-lg font-semibold">
        @chic.flowers
      </h3>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
        {feed.data
          .filter((post) => post.media_type === "IMAGE")
          .slice(0, 4)
          .map((post, i) => (
            <a
              key={i}
              target="_blank"
              href={post.permalink}
              className="w-full h-full"
            >
              <img
                src={post.media_url}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
