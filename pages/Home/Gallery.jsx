import React from "react";

const galleryData = [
  { src: "/gallery-1.jpg" },
  { src: "/gallery-2.jpg" },
  { src: "/gallery-3.jpg" },
  { src: "/gallery-4.jpg" },
  { src: "/gallery-5.jpg" },
  { src: "/gallery-1.jpg" },
  { src: "/gallery-2.jpg" },
  { src: "/gallery-3.jpg" },
  { src: "/gallery-4.jpg" },
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-3 p-[3.333vw] gap-[3.333vw]">
      {galleryData.map((item, i) => (
        <div key={i} className="aspect-square w-full">
          <img
            src={item.src}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
