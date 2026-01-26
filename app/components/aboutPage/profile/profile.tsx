import { motion } from "framer-motion";

export function AboutProfile() {
  return (
    <section className="bg-[#0B0B0D] text-gray-300 py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden group"
        >
          <img
            src="/awaBling.jpeg" // <-- change to your image
            alt="Awa Bling"
            className="w-full h-[450px] object-cover scale-100 group-hover:scale-105 transition-all duration-700"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-semibold tracking-wide text-white mb-6"
          >
            About Awa Bling
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg leading-relaxed"
          >
            Awa Bling is a hip-hop artist from The Gambia who uses her music to
            address social issues, particularly those affecting children, women,
            and young girls. Since 2017, she has collaborated with various
            organizations locally and internationally to raise awareness on
            FGM, irregular migration, peacebuilding, gender-based violence, and
            civic education.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
