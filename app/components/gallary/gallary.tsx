import { useEffect, useRef } from "react";
import Logo from "../logo/logo";

export function Gallery() {

  const images = [
    "/gal-1.jpeg",
    "/gal-2.jpeg",
    "/gal-3.jpeg",
    "/gal-4.jpeg",
    "/gal-5.jpeg",
    "/gal-6.jpeg",
    "/gal-7.jpeg",
    "/gal-8.jpeg",
    "/gal-9.jpeg",
    "/gal-10.jpeg",
    "/gal-11.jpeg",
    "/gal-12.jpeg",
  ];
  // Duplicate array once for seamless looping
  const loopImages = [...images, ...images];

  return (
    <section className="w-full py-20 bg-primary overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
        Music For Change Gallery
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex gap-6 animate-slide hover:paused w-max">
          {loopImages.map((src, i) => (
            <div
              key={i}
              className="max-w-[200px] max-h-[200px] md:min-w-[300px] md:h-[300px] rounded-xl overflow-hidden border border-white/10 shadow-lg"
            >
              <img
                src={src}
                alt="gallery"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
