import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'This project changed how I see my role as an artist. I am no longer just performing, I am advocating for the future of my community.',
    name: 'Awa Bling',
    role: 'Artist, Kick It Out',
  },
  {
    quote:
      'Through music, we were able to start conversations people were afraid to have. That is real impact.',
    name: 'Mariam Cham',
    role: 'Artist, Kick It Out',
  },
  {
    quote:
      'Kick It Out proves that creative expression can challenge harmful norms and inspire action across communities.',
    name: 'Alliance Française de Banjul',
    role: 'Project Partner',
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Voices of Change</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Real stories from artists and partners shaping social transformation through music.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="space-y-24">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Quote mark */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-7xl text-gray-200 select-none">
                “
              </span>

              <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-light">
                {item.quote}
              </p>

              <footer className="mt-8">
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
