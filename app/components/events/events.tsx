import { useModal } from '~/hooks/useModal';

const events = [
  {
    id: 1,
    title: 'Advocacy Night 0.1',
    date: 'Dec 12, 2025',
    location: 'Banjul, The Gambia',
    description:
      'An evening celebrating our artists and the power of music to inspire social change.',
    image: '/bg-2.jpeg',
  },
  {
    id: 2,
    title: 'Kick It Out Album Release',
    date: 'Mar 03, 2026',
    location: 'Banjul, The Gambia',
    description:
      'The Kick It Out album is a seven-track advocacy music project developed by Music for Change to empower Gambian artists to use music as a tool for social transformation, accountability, and public awareness on critical societal issues...',
    image: '/album_cover.jpeg',
  },
];

export function Events() {
  const { openModal } = useModal();

  const handleEventClick = (eventId: number) => {
    if (eventId === 2) return openModal("album")
  }

  return (
    <section id="events" className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-primary">Events</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-black uppercase">Upcoming Events</h2>
        </div>

        <div className="flex flex-col gap-16">
          {events.map((event, idx) => (
            <div
              key={event.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Text */}
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-bold text-black">{event.title}</h3>
                <p className="mt-2 text-gray-500">
                  {event.date} | {event.location}
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed">{event.description}</p>
                <button onClick={() => handleEventClick(event.id)} className="mt-6 bg-secondary text-white btn-hover px-6 py-2 rounded-md">
                  Learn More
                </button>
              </div>

              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
