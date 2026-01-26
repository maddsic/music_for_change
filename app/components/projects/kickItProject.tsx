export default function KickItProject() {
  return (
    <>
      <header>
        <h2 className="text-3xl font-bold">Kick It Out</h2>
        <p className="text-gray-600 mt-2">Music as advocacy • Social transformation initiative</p>
      </header>

      <div
        className="relative w-full
          rounded-2xl overflow-hidden
          shadow-lg my-10
          bg-black h-55 sm:h-70 md:h-90"
      >
        <iframe
          src="https://www.youtube.com/embed/2qGI0jvwEHg"
          title="Kick It Out Documentary"
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <p className="text-gray-700 mb-6 scroll-">
        Kick It Out is a music-led advocacy initiative designed to strengthen the role of Gambian
        artists as voices for social change. By combining creative expression with advocacy
        training, the project uses music as an accessible and powerful tool to promote awareness,
        dialogue, and behavioral change.
      </p>

      <h4 className="text-lg font-semibold mb-2">Phase One: Training & Music Production</h4>
      <p className="text-gray-600 mb-4">
        The first phase of the project consisted of a three-day intensive training that equipped six
        Gambian artists with practical knowledge on advocacy, human rights, and social justice,
        alongside guidance on translating these themes into impactful music.
      </p>

      <p className="text-gray-600 mb-4">
        This phase also included the recording of the Kick It Out album. Each artist produced an
        individual advocacy song, alongside a collaborative track featuring all six artists,
        resulting in a seven-track album addressing key social issues.
      </p>

      <h4 className="text-lg font-semibold mb-2">Artists & Partners</h4>
      <p className="text-gray-600 mb-4">
        The project was generously sponsored by Alliance Française de Banjul, whose support was
        instrumental in the successful delivery of both the training and music production
        components.
      </p>

      <p className="text-gray-600 mb-4">
        Participating artists include{' '}
        <em>Awa Bling, Mariam Cham, Sparklyn Black, Rupey Mace, Laxmiel, and Lena B.</em>
      </p>

      <h4 className="text-lg font-semibold mb-2">What&apos;s Next</h4>
      <p className="text-gray-600">
        Building on these outputs, Kick It Out will expand its reach through the production of music
        videos, targeted media engagements, and a nationwide caravan tour aimed at stimulating
        dialogue and raising awareness across diverse Gambian communities.
      </p>
    </>
  );
}
