import { motion } from 'framer-motion'

const events = [
  { id: 1, title: 'General Meeting', date: 'Feb 15, 2025', time: '6:00 PM', location: 'Dwinelle Hall', description: 'Join us for our monthly general meeting. Meet the board, learn about upcoming events, and connect with fellow Sri Lankans.', type: 'Meeting' },
  { id: 2, title: 'Sinhala & Tamil New Year (Avurudu)', date: 'Apr 13, 2025', time: '12:00 PM', location: 'Memorial Glade', description: 'Celebrate the dawn of the new year with traditional games, kiribath, kavum, and cultural performances. All welcome!', type: 'Festival' },
  { id: 3, title: 'Sri Lankan Movie Night', date: 'Mar 8, 2025', time: '7:00 PM', location: 'TBD', description: 'Screening of a beloved Sri Lankan film. Snacks and discussion to follow.', type: 'Cultural' },
  { id: 4, title: 'Vesak Celebration', date: 'May 12, 2025', time: '5:00 PM', location: 'Sproul Plaza', description: 'Commemorate Vesak with lantern making, meditation, and a talk on Buddhism in Sri Lanka.', type: 'Festival' },
  { id: 5, title: 'End of Year Dinner', date: 'May 2, 2025', time: '6:30 PM', location: 'TBD', description: 'Celebrate the year together with a festive Sri Lankan dinner. Awards and farewells.', type: 'Social' },
]

const eventColors = { Meeting: 'var(--maroon)', Festival: 'var(--saffron)', Cultural: 'var(--green)', Social: 'var(--yellow)' }

export default function Events() {
  return (
    <div className="page events-page">
      <section className="page-hero">
        <motion.div 
          className="hero-bg events-hero-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div 
          className="container page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1>Events</h1>
          <p>Upcoming celebrations, meetings, and gatherings</p>
        </motion.div>
      </section>

      <section className="events-content">
        <div className="container">
          <div className="events-list">
            {events.map((event, i) => (
              <motion.div
                key={event.id}
                className="event-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ x: 8 }}
              >
                <div 
                  className="event-date-block"
                  style={{ borderColor: eventColors[event.type] }}
                >
                  <span className="event-day">{event.date.split(' ')[1]?.replace(',', '')}</span>
                  <span className="event-month">{event.date.split(' ')[0]}</span>
                </div>
                <div className="event-details">
                  <span className="event-type" style={{ color: eventColors[event.type] }}>{event.type}</span>
                  <h3>{event.title}</h3>
                  <p className="event-desc">{event.description}</p>
                  <div className="event-meta">
                    <span>🕐 {event.time}</span>
                    <span>📍 {event.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
