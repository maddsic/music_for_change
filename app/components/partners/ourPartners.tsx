export function OurPartners() {
  return (
    <section id="partners" className="bg-white py-24 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - Minimal & Clean */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-primary font-bold uppercase tracking-widest text-xs">Collaboration</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            OUR PARTNERS
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl text-lg">
            Aligning with global organizations to amplify local voices and drive measurable social impact.
          </p>
        </div>

        {/* Featured Partner Card */}
        <div className="relative group">
          {/* Shadow/Glow effect on hover */}
          <div className="absolute -inset-4 bg-slate-50 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative grid md:grid-cols-12 gap-8 lg:gap-16 items-center bg-white p-2 md:p-8">

            {/* Logo Column (4/12) */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-full aspect-square max-w-[280px] bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-slate-100 flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/afb_logo.jpeg"
                  alt="Alliance Française de Banjul"
                  className="w-full h-auto object-contain transition-all duration-500 filter grayscale group-hover:grayscale-0"
                />

                {/* Established Tag */}
                <div className="absolute -bottom-3 bg-primary text-white text-[10px] font-bold px-4 py-1 rounded-full tracking-widest uppercase">
                  Primary Partner
                </div>
              </div>
            </div>

            {/* Content Column (8/12) */}
            <div className="md:col-span-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
                  Alliance Française de Banjul
                </h3>
                <div className="h-1 w-20 bg-secondary rounded-full"></div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                Alliance Française de Banjul is a cornerstone of cultural advocacy in The Gambia.
                Our partnership facilitates community-led initiatives that bridge the gap between
                artistic expression and social inclusion.
              </p>

              <div className="flex flex-wrap gap-3">
                {['Education', 'Social Inclusion', 'Artistic Advocacy'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#"
                  className="inline-flex items-center text-slate-900 font-bold text-sm hover:text-secondary transition-colors gap-2 group/link"
                >
                  Visit Partner Website
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
