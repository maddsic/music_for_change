import { useModal } from '~/hooks/useModal';

export function OurProjects() {
  const { openModal } = useModal();
  return (
    <section id="projects" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary-foreground">Our Projects</h2>
          <p className="mt-2 text-primary-foreground max-w-xl">
            Initiatives using music as a tool to inspire awareness, dialogue, and positive social
            change.
          </p>
        </div>

        {/* Project card */}
        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text */}
            <div className="p-8">
              <span className="text-sm uppercase tracking-wide text-primary font-medium">
                Current Project
              </span>

              <h3 className="mt-3 text-2xl font-semibold text-gray-900">Kick It Out</h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Kick It Out is a social transformation initiative designed to strengthen the
                capacity of Gambian artists to serve as advocates for change through music. The
                project focuses on equipping artists with advocacy skills and empowering them to
                address critical social issues such as female genital mutilation (FGM) , sexual and
                gender-based violence (SGBV) and civic education through creative expression and
                community engagement...
              </p>

              <button
                onClick={() => openModal('project')}
                className="inline-block mt-6 text-primary font-medium hover:underline underline-offset-2 cursor-pointer"
              >
                View project details →
              </button>
            </div>

            {/* Image */}
            <div className="h-full">
              <img
                src="/bg-2.jpeg"
                alt="Music for Change project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
