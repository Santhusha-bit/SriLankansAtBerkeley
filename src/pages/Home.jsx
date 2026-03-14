import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PhotoCarousel from '../components/PhotoCarousel'

const events = [
  { id: 1, title: 'General Meeting', date: 'Feb 15, 2025', time: '6:00 PM', location: 'Dwinelle Hall', description: 'Join us for our monthly general meeting. Meet the board, learn about upcoming events, and connect with fellow Sri Lankans.', type: 'Meeting' },
  { id: 2, title: 'Sinhala & Tamil New Year (Avurudu)', date: 'Apr 13, 2025', time: '12:00 PM', location: 'Memorial Glade', description: 'Celebrate the dawn of the new year with traditional games, kiribath, kavum, and cultural performances. All welcome!', type: 'Festival' },
  { id: 3, title: 'Sri Lankan Movie Night', date: 'Mar 8, 2025', time: '7:00 PM', location: 'TBD', description: 'Screening of a beloved Sri Lankan film. Snacks and discussion to follow.', type: 'Cultural' },
  { id: 4, title: 'Vesak Celebration', date: 'May 12, 2025', time: '5:00 PM', location: 'Sproul Plaza', description: 'Commemorate Vesak with lantern making, meditation, and a talk on Buddhism in Sri Lanka.', type: 'Festival' },
  { id: 5, title: 'End of Year Dinner', date: 'May 2, 2025', time: '6:30 PM', location: 'TBD', description: 'Celebrate the year together with a festive Sri Lankan dinner. Awards and farewells.', type: 'Social' },
]

const eventColors = { Meeting: 'var(--maroon)', Festival: 'var(--saffron)', Cultural: 'var(--green)', Social: 'var(--yellow)' }

const highlights = [
  { title: 'Pearl of the Indian Ocean', desc: 'Sri Lanka has been known by this name for centuries, famed for its precious gems, spices, and natural beauty.' },
  { title: 'Ancient Civilization', desc: 'Over 2,500 years of recorded history, from the kingdoms of Anuradhapura and Polonnaruwa to the Kandyan Kingdom.' },
  { title: 'Biodiversity Hotspot', desc: 'One of the world\'s biodiversity hotspots with unique wildlife including elephants, leopards, and endemic species.' },
  { title: 'Tea Country', desc: 'The birthplace of Ceylon tea, with lush highland estates producing some of the finest tea in the world.' },
]

const cultureItems = [
  { emoji: '🍛', title: 'Cuisine', text: 'Rice & curry, hoppers, kottu, string hoppers, and sweet treats like kiribath and kavum.' },
  { emoji: '🎭', title: 'Arts', text: 'Kandyan dance, traditional drumming, and intricate crafts including woodcarving and batik.' },
  { emoji: '📿', title: 'Religion', text: 'A multi-religious society with Buddhism, Hinduism, Islam, and Christianity coexisting.' },
  { emoji: '🏏', title: 'Sports', text: 'Cricket is a national passion—Sri Lanka has produced world champions and legendary players.' },
]

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="home">
      <section className="hero" id="home">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            ආයුබෝවන්! Vanakkam! Welcome!
          </motion.span>
          <h1>
            Sri Lankan at <span className="highlight">Berkeley</span>
          </h1>
          <p className="hero-subtitle">
            A vibrant community celebrating Sri Lankan heritage, culture, and fellowship at UC Berkeley
          </p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="#about" className="btn btn-primary">Discover Our Community</a>
            <a href="#events" className="btn btn-outline">Upcoming Events</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span>Scroll to explore</span>
          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
      </section>

      <PhotoCarousel />

      <section className="features">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h2>

          <div className="features-grid">
            {[
              { title: 'Cultural Events', desc: 'Celebrate Sinhala & Tamil New Year, Vesak, and traditional festivals', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=240&fit=crop', href: '#events' },
              { title: 'Community', desc: 'Connect with fellow Sri Lankans and friends of Sri Lanka', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=240&fit=crop', href: '#about' },
              { title: 'Sri Lankan Heritage', desc: 'Explore the island\'s rich history, cuisine, and traditions', image: 'https://images.unsplash.com/photo-1580519542036-c47e619e319f?w=400&h=240&fit=crop', href: '#sri-lanka' },
              { title: 'Stay Updated', desc: 'Read our latest news, stories, and campus happenings', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=240&fit=crop', href: '/blog' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="feature-card-image">
                  <img src={item.image} alt="" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {item.href.startsWith('/') ? (
                  <Link to={item.href}>Learn more →</Link>
                ) : (
                  <a href={item.href}>Learn more →</a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="srilanka-photos">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Beautiful Sri Lanka
          </motion.h2>
          <div className="photo-gallery">
            {[
              { src: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=400&fit=crop', alt: 'Sigiriya Rock Fortress', caption: 'Sigiriya Rock Fortress' },
              { src: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&h=400&fit=crop', alt: 'Ella tea country', caption: 'Tea plantations, Ella' },
              { src: 'https://images.unsplash.com/photo-1580519542036-c47e619e319f?w=600&h=400&fit=crop', alt: 'Sri Lankan temple', caption: 'Temple of the Tooth, Kandy' },
              { src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop', alt: 'South coast beaches', caption: 'Southern coastline' },
              { src: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop', alt: 'Sri Lankan elephants', caption: 'Udawalawe National Park' },
              { src: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=400&fit=crop', alt: 'Traditional architecture', caption: 'Colonial Galle Fort' },
            ].map((photo, i) => (
              <motion.figure
                key={photo.caption}
                className="gallery-item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                whileHover={{ y: -6 }}
              >
                <img src={photo.src} alt={photo.alt} />
                <figcaption>{photo.caption}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h2>
          <motion.div
            className="about-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="lead">
              Sri Lankan at Berkeley (SLAB) is a student organization at the University of California, Berkeley,
              dedicated to creating a welcoming space for students with connections to Sri Lanka and those
              interested in Sri Lankan culture.
            </p>
          </motion.div>

          <motion.div
            className="about-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="about-card">
              <span className="about-icon">🎯</span>
              <h3>Our Mission</h3>
              <p>To preserve and celebrate Sri Lankan heritage while fostering community, cultural exchange, and mutual support among our members at Berkeley and beyond.</p>
            </div>
            <div className="about-card">
              <span className="about-icon">💫</span>
              <h3>Our Vision</h3>
              <p>To be a vibrant hub where Sri Lankan traditions meet Berkeley's diverse campus, creating lasting friendships and meaningful cultural connections.</p>
            </div>
          </motion.div>

          <motion.div
            className="about-values"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3>What We Value</h3>
            <div className="values-list">
              {[
                'Inclusivity — All backgrounds welcome',
                'Cultural Pride — Celebrating our heritage',
                'Community — Building lasting connections',
                'Respect — Honoring diversity within Sri Lanka',
              ].map((val, i) => (
                <motion.div
                  key={val}
                  className="value-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <span className="value-dot"></span>
                  <span>{val}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="srilanka-section" id="sri-lanka">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Sri Lanka
          </motion.h2>
          <motion.p
            className="lead srilanka-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Sri Lanka—formerly Ceylon—is an island nation in South Asia, rich in history, culture, and natural beauty.
            From ancient temples to tea plantations, pristine beaches to misty mountains, it continues to inspire our community at Berkeley.
          </motion.p>

          <motion.div
            className="highlights-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3>Did You Know?</h3>
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="highlight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.section
            className="culture-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3>Culture & Traditions</h3>
            <div className="culture-grid">
              {cultureItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="culture-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  whileHover={{ scale: 1.03 }}
                >
                  <span className="culture-emoji">{item.emoji}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </section>

      <section className="events-section" id="events">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Events
          </motion.h2>
          <p className="section-subtitle">Upcoming celebrations, meetings, and gatherings</p>
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

      <section className="contact-section" id="contact">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>
          <p className="section-subtitle">We'd love to hear from you. Get in touch!</p>
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Get in Touch</h3>
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:slab@berkeley.edu">slab@berkeley.edu</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location</span>
                <p>University of California, Berkeley<br />Berkeley, CA 94720</p>
              </div>
              <div className="contact-item">
                <span className="contact-label">Social</span>
                <a href="https://www.instagram.com/cal.slab/" target="_blank" rel="noopener noreferrer">@cal.slab</a>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>Send a Message</h3>
              <p className="form-note">Note: This is a demo form. In production, connect to your backend or email service.</p>

              {submitted ? (
                <motion.div
                  className="form-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <span className="success-icon">✓</span>
                  <h4>Message Sent!</h4>
                  <p>Thank you for reaching out. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2>Join Our Community</h2>
          <p>Whether you're Sri Lankan, have ties to the island, or simply curious—all are welcome!</p>
          <a href="#contact" className="btn btn-primary btn-lg">Get in Touch</a>
        </motion.div>
      </section>
    </div>
  )
}
