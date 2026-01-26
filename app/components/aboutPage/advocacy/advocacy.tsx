import { motion } from "framer-motion";
import { AdvocacyAreas } from "~/data";



export function Advocacy() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16 text-secondary">
          <p className="text-sm uppercase tracking-widest">
            Advocacy Focus
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#111827]">
            Empowering Communities Through Awareness
          </h2>

          <p className="mt-4 text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
            Awa Bling leverages the power of music to spark dialogue, educate
            youth, and advocate for social transsecondaryformation across critical areas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {AdvocacyAreas.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 28px var(--secondary)",
              }}
              className="p-6 bg-[#f9fafb] rounded-xl border border-gray-100 shadow-md transition-all"
              style={{
                // subtle ambient glow when not hovered
                boxShadow: "0 0 6px rgba(0,0,0,0.05)",
              }}
            >
              {/* Badge */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 text-white"
                style={{ backgroundColor: "var(--primary)" }}
              >
                {i + 1}
              </div>

              <p className="text-lg font-semibold text-[#111827] mb-2">
                {area}
              </p>

              <p className="text-[#4b5563] leading-relaxed">
                Promoting awareness, education, and action within communities.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
