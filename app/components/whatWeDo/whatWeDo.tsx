import { FaMusic, FaUsers, FaBullhorn } from "react-icons/fa";
import { Button } from "../UI/button/button";

const programs = [
  {
    title: "Music Education",
    description:
      "Workshops and training programs that empower youth with musical skills and self-expression.",
    icon: <FaMusic size={32} />,
  },
  {
    title: "Community Engagement",
    description:
      "Collaborative events that bring people together, celebrate culture, and foster dialogue.",
    icon: <FaUsers size={32} />,
  },
  {
    title: "Advocacy Through Sound",
    description:
      "Campaigns and performances that raise awareness and mobilize action on social issues.",
    icon: <FaBullhorn size={32} />,
  },
];

export function WhatWeDo() {
  return (
    <section id="programs" className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary">
            What We Do
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-black">
            Turning Music Into Change
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We design programs that harness the power of music to educate,
            inspire, and transform communities across The Gambia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {programs.map((program) => (
            <div
              key={program.title}
              className="flex flex-col items-start gap-6 p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-primary">{program.icon}</div>
              <h3 className="text-2xl font-bold text-black">{program.title}</h3>
              <p className="text-gray-700 leading-relaxed">
                {program.description}
              </p>
              <Button className="mt-auto bg-secondary text-white btn-hover px-6 py-2 rounded-md">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
