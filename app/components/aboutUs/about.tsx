export function AboutUs() {
  return (
    <section id="about" className="w-full bg-neutral-950 text-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 2xl:grid-cols-2 gap-20 items-start">
        {/* Left: Statement */}
        <div>
          <p className="text-sm uppercase tracking-widest text-primary">
            About Us
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
            Music is more than sound.
            <br />
            It’s power.
          </h2>

          <p className="mt-8 text-lg text-neutral-300 max-w-lg leading-relaxed">
            In The Gambia, music has always been a voice of the people. We use
            that voice to challenge injustice, inspire dialogue, and create
            space for change.
          </p>
        </div>

        {/* Right: Vision + Mission */}
        <div className="space-y-14 md:grid md:grid-cols-2 2xl:grid-cols-none gap-x-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3">
              Vision
            </p>
            <p className="text-xl leading-relaxed text-neutral-200">
              A Gambia where the power of music drives positive social change
              and builds a more just and equitable society.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3">
              Mission
            </p>
            <p className="text-xl leading-relaxed text-neutral-200">
              We harness the diversity of music to raise awareness, educate, and
              inspire action. Through inclusive initiatives, we empower
              individuals to confront social issues and shape a more equitable
              future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
