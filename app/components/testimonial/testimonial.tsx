import { motion } from 'framer-motion';

export function Testimonials() {
  const testimonials = [
    {
      quote: "This project changed how I see my role as an artist. I am no longer just performing, I am advocating for the future of my community.",
      name: 'Awa Bling',
      role: 'Artist, Kick It Out',
    },
    {
      quote: "Through music, we were able to start conversations people were afraid to have. That is real impact.",
      name: 'Mariam Cham',
      role: 'Artist, Kick It Out',
    },
    {
      quote: "Kick It Out proves that creative expression can challenge harmful norms and inspire action across communities.",
      name: 'Alliance Française',
      role: 'Project Partner',
    },
  ];

  return (
    <section className="bg-slate-50 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
              Voices <br />
              <span className="text-secondary italic">of Change</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 max-w-xs text-right hidden md:block font-medium"
          >
            First-hand accounts of the project's resonance within the creative community.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between group hover:shadow-xl transition-all duration-500"
            >
              {/* Decorative Quote Mark */}
              <span className="absolute top-6 right-8 text-6xl font-serif text-slate-100 group-hover:text-red-100 transition-colors duration-500 select-none">
                ”
              </span>

              <div className="relative z-10">
                <p className="text-lg leading-relaxed text-slate-700 italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              <footer className="border-t border-slate-50 pt-6">
                <p className="font-bold text-slate-900">{item.name}</p>
                <p className="text-xs uppercase tracking-widest font-semibold text-primary mt-1">
                  {item.role}
                </p>
              </footer>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle Background Text for a designer feel */}
      <div className="absolute left-0 bottom-0 text-[15rem] font-black text-slate-200/20 leading-none select-none pointer-events-none -mb-20 -ml-10">
        "
      </div>
    </section>
  );
}
