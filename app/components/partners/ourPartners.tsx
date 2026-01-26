export function OurPartners() {
  return (
    <section id="partners" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Partners</h2>
          <p className="mt-4 text-gray-600">
            We work with organizations and individuals who share our belief in music as a powerful
            tool for social impact.
          </p>
        </div>

        {/* Partner feature */}
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo column */}
          <div className="md:col-span-1 flex justify-center">
            <div className="w-48 h-48 rounded-2xl border border-gray-200 flex items-center justify-center bg-gray-50">
              <img src="/afb_logo.jpeg" alt="Partner logo" className="max-h-full object-cover " />
            </div>
          </div>

          {/* Content column */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-900">Alliance Française de Banjul</h3>

            <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
              Our partner supports Music For Change by collaborating on community-led initiatives
              that promote awareness, education, and social inclusion through music across The
              Gambia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
