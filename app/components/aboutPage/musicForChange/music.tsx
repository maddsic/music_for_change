import { motion } from "framer-motion";

export function MusicForChange() {
  return (
    <section className="w-full bg-[#0B0B0D] text-gray-200 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE / ART SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative w-full h-95 rounded-3xl overflow-hidden group"
        >
          <img
            src="music_for_change_logo.png"
            alt="Music For Change"
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
          />

          {/* glow overlay */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              boxShadow: "0 0 80px 0 var(--secondary)",
            }}
          />

          {/* dark gradient bottom for readability */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-5"
        >
          {/* Tagline */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm uppercase tracking-widest"
            style={{ color: "var(--secondary)" }}
          >
            Non-Profit Initiative
          </motion.span>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-4xl lg:text-5xl font-semibold text-white leading-tight"
          >
            Music For Change
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-lg leading-relaxed text-gray-300"
          >
            Founded by Awa Bling, Music for Change is a non-profit organization
            committed to training artists on societal issues and empowering them
            to use music as a powerful tool for social transformation. The
            initiative bridges advocacy, creativity, and education to inspire
            positive impact across communities.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}
