import { stats } from "~/data";

export function ImpactStats() {
  return (
    <section className="w-full bg-slate-950 py-24 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-red-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            OUR <span className="text-secondary">IMPACT</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Music for Change isn't just about sound—it's about measurable shifts in Gambian society.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Counter styling */}
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-black text-white mb-2 group-hover:text-secondary transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors duration-300 text-center">
                  {stat.label}
                </span>
              </div>

              {/* Subtle bottom accent line */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-red-600/20 rounded-full group-hover:w-16 group-hover:bg-secondary transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
