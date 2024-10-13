import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(#00000080, #00000080), url(/hero.jpg)",
      }}
      className="w-full h-[100dvh] bg-no-repeat bg-cover flex flex-col items-center relative"
    >
      <h1 className="text-white text-[120px] leading-none font-italiana font-bold mt-12 tracking-widest">
        CHIC
      </h1>

      <div className="flex gap-3 absolute top-1/2 -translate-y-1/2">
        <button className="uppercase text-white hover:text-black font-bold border-2 border-white rounded-[4px] h-12 px-5 text-[15px] hover:bg-white transition-all duration-200">
          Portfolio
        </button>
        <button className="uppercase text-white hover:text-black font-bold border-2 border-white rounded-[4px] h-12 px-5 text-[15px] hover:bg-white transition-all duration-200">
          Leys Play
        </button>
      </div>
    </div>
  );
};

export default Hero;
