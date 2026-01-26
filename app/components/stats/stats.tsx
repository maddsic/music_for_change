import { stats } from "~/data";

export function ImpactStats() {

  return (
    <section className="w-full bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-12">
          Our Impact
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-extrabold text-primary-foreground">
                {stat.value}
              </span>
              <span className="mt-2 text-lg text-primary/90">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
