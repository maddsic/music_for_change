import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { Button } from '../UI/button/button';
import { ProfileSlides } from '~/data';
import { useModal } from '~/hooks/useModal';

export function ProfileHeroSlider() {
  const [current, setCurrent] = useState(0);
  const { openModal } = useModal()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ProfileSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {ProfileSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-2xl text-white space-y-6">
                <h1 className="text-4xl text-primary-foreground md:text-6xl font-extrabold leading-tight">
                  {slide.title}
                </h1>

                <p className="text-lg md:text-xl text-white/90">{slide.subtitle}</p>

                <Button onClick={() => openModal('contact')} className="bg-secondary text-primary-foreground hover:bg-yellow/80 px-8 py-3 text-lg">
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {ProfileSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${index === current ? 'bg-secondary scale-125' : 'bg-white/50'
              }`}
          />
        ))}
      </div>

    </section>
  );
}
