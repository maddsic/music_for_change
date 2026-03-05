export default function AlbumDetails() {
  const tracks = [
    { artist: "Maryam Cham", title: "FGM" },
    { artist: "Laxmeil", title: "Halel La" },
    { artist: "Lena B", title: "Puréne" },
    { artist: "Rupey", title: "Feel Them" },
    { artist: "Awa Bling", title: "Soraleh" },
    { artist: "Sparklyn Black", title: "Gegain" },
    { artist: "All Artists", title: "Kick It Out (Collaborative)", highlight: true },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 pb-20">
      {/* Hero Section with Split Background */}
      <div className="relative bg-slate-900 pt-16 pb-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-center lg:text-left">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-red-500/10 rounded">
            Advocacy Music Project
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            KICK IT <span className="text-secondary">OUT.</span>
          </h1>
          <p className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed">
            A seven-track movement by Music for Change, empowering Gambian artists
            to transform society through the power of rhythm and truth.
          </p>
        </div>

        {/* Abstract background shape */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-12 transform translate-x-20 hidden lg:block"></div>
      </div>

      {/* Main Content Container - Pulls up over the hero */}
      <main className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Side: The "Big" Artwork Grid (Takes 7/12 columns) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-6">
              <div className="group relative">
                <div className="absolute -inset-2 bg-red-600 rounded-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <img
                  src="/album_cover.jpeg"
                  alt="Front Cover"
                  className="relative w-full aspect-square object-cover rounded-lg shadow-2xl"
                />
              </div>
              <div className="group relative mt-12">
                <div className="absolute -inset-2 bg-slate-900 rounded-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <img
                  src="/album_cover_2.jpeg"
                  alt="Back Cover"
                  className="relative w-full aspect-square object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>

            <div className="mt-16 prose prose-slate max-w-none">
              <h3 className="text-3xl font-bold mb-6 italic">The Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                The Kick It Out album addresses pressing themes including <span className="text-slate-900 font-semibold underline decoration-red-500">female genital mutilation (FGM), rape, corruption, and social responsibility.</span>
              </p>
              <p className="text-slate-600 leading-relaxed">
                Several songs highlight the impact of gender-based violence, including the trauma of rape and the emotional harm faced by women.
                Beyond the pain, the album also serves as a civic tool—encouraging young people to obtain voter cards and shape their
                future through the ballot box.
              </p>
            </div>
          </div>

          {/* Right Side: Tracklist Sidebar (Takes 5/12 columns) */}
          <div className="lg:col-span-5">
            <div className="sticky top-8 bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h4 className="text-sm font-black uppercase tracking-tighter text-slate-400 mb-8 border-b pb-4">
                Tracklist / Credits
              </h4>
              <div className="space-y-6">
                {tracks.map((t, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <span className="text-xs font-mono text-slate-400 mt-1">0{idx + 1}</span>
                    <div>
                      <h5 className={`font-bold leading-none ${t.highlight ? 'text-red-600' : 'text-slate-900'}`}>
                        {t.title}
                      </h5>
                      <p className="text-sm text-slate-500 mt-1">{t.artist}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200">
                <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-secondary transition-colors duration-300 shadow-lg shadow-slate-200">
                  Support The Project
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
