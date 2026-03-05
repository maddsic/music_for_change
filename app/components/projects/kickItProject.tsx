export default function KickItProject() {
  const artists = ["Awa Bling", "Mariam Cham", "Sparklyn Black", "Rupey Mace", "Laxmiel", "Lena B"];

  return (
    <article className="max-w-5xl mx-auto px-6 py-16 text-slate-800 leading-relaxed">
      {/* Header with floating badge */}
      <header className="mb-12 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <span className="h-px w-8 bg-primary"></span>
          <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold">
            Social Transformation
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
          Kick It Out
        </h2>
        <p className="text-xl text-slate-500 font-light max-w-2xl">
          Strengthening the role of Gambian artists as catalysts for nationwide advocacy and behavioral change.
        </p>
      </header>

      {/* Video Section with "Cinema" frame */}
      <div className="relative group my-12">
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-slate-900 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
          <iframe
            src="https://www.youtube.com/embed/2qGI0jvwEHg"
            title="Kick It Out Documentary"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Project Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">

        {/* Main Narrative */}
        <div className="md:col-span-2 space-y-8">
          <section>
            <p className="text-xl text-slate-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
              Kick It Out is a music-led advocacy initiative designed to strengthen the role of Gambian
              artists as voices for social change. By combining creative expression with advocacy
              training, the project uses music as an accessible tool to promote awareness.
            </p>
          </section>

          <section className="bg-slate-50 p-8 rounded-2xl border-l-4 border-slate-900">
            <h4 className="text-sm uppercase tracking-widest font-bold text-slate-400 mb-4">Phase One</h4>
            <h3 className="text-2xl font-bold mb-4">Training & Music Production</h3>
            <p className="text-slate-600 mb-4">
              An intensive three-day training equipped six artists with practical knowledge on
              <strong> advocacy, human rights, and social justice</strong>, translating these
              complex themes into impactful, melodic storytelling.
            </p>
            <p className="text-slate-600">
              The result: A powerful 7-track album where individual narratives meet a
              unifying collaborative anthem.
            </p>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-10">
          {/* Artists List */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-black text-secondary mb-6">Featured Artists</h4>
            <ul className="space-y-3">
              {artists.map((artist) => (
                <li key={artist} className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  {artist}
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Brand */}
          <div className="pt-8 border-t border-slate-100">
            <h4 className="text-xs uppercase tracking-widest font-black text-slate-400 mb-4">Key Partner</h4>
            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm italic text-slate-600 text-sm">
              "Generously sponsored by Alliance Française de Banjul, instrumental in delivering both training and production."
            </div>
          </div>
        </div>
      </div>

      {/* "What's Next" Banner */}
      <footer className="mt-20 bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-2">The Journey Continues</h4>
            <p className="text-slate-400 max-w-md">
              Expanding reach through music videos, media engagements, and a nationwide caravan tour across The Gambia.
            </p>
          </div>
          <button className="whitespace-nowrap bg-secondary hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-900/20">
            Follow the Tour
          </button>
        </div>
        {/* Decorative circle */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
      </footer>
    </article>
  );
}
