import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { awards } from "~/data";



export function Awards() {
  return (
    <section className="w-full bg-white text-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm uppercase tracking-widest font-medium"
            style={{ color: "var(--secondary)" }}
          >
            Recognition
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">
            Awards & Achievements
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Celebrating the impact of advocacy, music, and social transformation.
          </p>
        </motion.div>

        {/* Award cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 35px var(--secondary)",
              }}
              className="relative p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <FaAward size={28} style={{ color: "var(--primary)" }} />
                <span className="font-bold text-lg">{award.year}</span>
              </div>
              <h3 className="text-xl font-semibold">{award.title}</h3>
              {award.by && (
                <p className="text-gray-600 text-sm">by {award.by}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
