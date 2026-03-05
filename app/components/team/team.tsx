import { motion, useScroll, useTransform } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter } from 'react-icons/fa';
import { useRef, useState } from 'react';
import { Link } from 'react-router';
import { teamMembers } from '~/data';


export function OurTeam() {
  const [activeMember, setActiveMember] = useState(null)
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax layers
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const headerY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const cardsY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section ref={sectionRef} id="team" className="relative overflow-hidden bg-black py-24">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <img src="/bg-4.jpeg" alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-black/80" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Our <span className="text-secondary">Team</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Artists, advocates, and change-makers using music as a force for social transformation.
          </p>
        </div>

        {/* Cards grid */}
        <motion.div style={{ y: cardsY, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }} className="grid gap-10 max-w-6xl justify-items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden bg-neutral-900 shadow-xl"
            >
              {/* Image */}
              <div className="relative h-80 w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 text-center">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-gray-400">{member.role}</p>

                {index === 0 && (
                  <Link to="/profile"
                    className="mt-4 text-sm font-medium text-white/80 hover:text-white underline underline-offset-4"
                  >
                    Read Bio
                  </Link>
                )}

                {/* Socials */}
                <div className="mt-6 flex justify-center gap-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                  <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer">
                    <SocialIcon icon={<FaFacebookF />} />
                  </a>
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                    <SocialIcon icon={<FaInstagram />} />
                  </a>
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <SocialIcon icon={<FaLinkedinIn />} />
                  </a>
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                    <SocialIcon icon={<FaTwitter />} />
                  </a>
                  <a href={member.socials.tictok} target="_blank" rel="noopener noreferrer">
                    <SocialIcon icon={<FaTiktok />} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <span
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        bg-white/10 text-white
        hover:bg-white hover:text-black
        transition-all duration-300
      "
      aria-hidden
    >
      {icon}
    </span>
  );
}
