export function Gallery() {
  const images = [
    "/gal-1.jpeg", "/gal-2.jpeg", "/gal-3.jpeg", "/gal-4.jpeg",
    "/gal-5.jpeg", "/gal-6.jpeg", "/gal-7.jpeg", "/gal-8.jpeg",
    "/gal-9.jpeg", "/gal-10.jpeg", "/gal-11.jpeg", "/gal-12.jpeg",
  ];

  // We duplicate for the infinite loop effect
  const loopImages = [...images, ...images];

  return (
    <section className="w-full py-16 md:py-24 bg-slate-950 overflow-hidden">
      <style>{`
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: slide 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              THE <span className="text-secondary">GALLERY</span>
            </h2>
            <p className="text-slate-400 mt-2 max-w-md">
              Visual moments from the "Music For Change" training sessions and studio recordings.
            </p>
          </div>
          <div className="hidden md:block text-slate-500 text-sm font-mono uppercase tracking-widest">
            {images.length} Captures • 2025 Project
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative group">
        {/* Gradient Overlays for a "fade-in/out" edge look */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee">
          {loopImages.map((src, i) => (
            <div
              key={i}
              className="relative w-[220px] h-[220px] md:w-[400px] md:h-[400px] mx-3 md:mx-4
                         rounded-2xl overflow-hidden border border-white/5
                         bg-slate-900 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            >
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="px-4 py-1 bg-white/5 rounded-full border border-white/10 text-xs text-slate-500 animate-pulse">
          Scroll or hover to pause
        </div>
      </div>
    </section>
  );
}
