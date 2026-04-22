import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PhotoCarousel from '../components/PhotoCarousel'
import awuruduHero from '../../images/projects/awurudu/DSC_0251.jpg'
import cultureCuisine from '../../images/cuisine.jpg'
import cultureArts from '../../images/arts.jpg'
import cultureReligion from '../../images/religions.jpg'
import cultureSports from '../../images/sports.jpg'
import cultureFestivals from '../../images/projects/awurudu/DSC_0097.jpg'
import cultureHeritage from '../../images/ancient.jpg'
import flyerCareerPanel from '../../images/post1.JPEG'
import flyerAwurudu from '../../images/projects/awurudu/DSC_0251.jpg'
import offerEvents from '../../images/projects/awurudu/DSC_0177.jpg'
import offerCommunity from '../../images/projects/awurudu/DSC_0123.jpg'
import offerHeritage from '../../images/projects/awurudu/DSC_0045.jpg'
import teamPresident from '../../images/team/president.jpg'
import teamCoPresident from '../../images/team/co-president.jpg'
import teamSecretary from '../../images/team/secretary.png'
import teamTreasurer from '../../images/team/treasurer.jpg'
import teamMarketing from '../../images/team/marketing.jpg'
import teamTech from '../../images/team/tech.jpg'
import teamEvents from '../../images/team/events.jpg'
import teamAffairs from '../../images/team/affairs.jpeg'
import { blogPosts } from '../data/blogPosts'

// Ensures ESLint counts `motion` as used (JSX tags alone may not).
const _MOTION = motion

const events = [
  {
    id: 1,
    title: 'Career Insight Panel',
    date: 'Apr 4, 2026',
    time: '12:00 PM - 2:00 PM',
    location: 'UC Berkeley',
    description: 'Hear from Sri Lankan professionals and alumni about careers, internships, and navigating opportunities. Bring your questions and network with the community.',
    type: 'Panel',
    flyer: flyerCareerPanel,
  },
  {
    id: 2,
    title: 'Awurudu Festival 2026',
    date: 'Apr 26, 2026',
    time: '4:00 PM onwards',
    location: 'Willard Park',
    description: 'Celebrate Sinhala & Tamil New Year with traditional games, kiribath, kavum, and performances. All are welcome: bring friends and good vibes!',
    type: 'Festival',
    flyer: flyerAwurudu,
  },
]

const eventColors = { Panel: 'var(--green)', Festival: 'var(--saffron)' }

const cultureItems = [
  { image: cultureCuisine, title: 'Cuisine', text: 'Rice & curry, hoppers, kottu, string hoppers, and sweet treats like kiribath and kavum.' },
  { image: cultureArts, title: 'Arts', text: 'Kandyan dance, traditional drumming, and intricate crafts including woodcarving and batik.' },
  { image: cultureReligion, title: 'Religion', text: 'A multi-religious society with Buddhism, Hinduism, Islam, and Christianity coexisting.' },
  { image: cultureSports, title: 'Sports', text: 'Cricket is a national passion; Sri Lanka has produced world champions and legendary players.' },
  { image: cultureFestivals, title: 'Festivals', text: 'Sinhala & Tamil New Year, Vesak, Thai Pongal, and Deepavali bring communities together with rituals, food, and light.' },
  { image: cultureHeritage, title: 'Heritage Sites', text: 'Ancient capitals, sacred stupas, and UNESCO World Heritage landmarks tell thousands of years of island history.' },
]

const executiveTeam = [
  { name: 'Stephan Siyambalapitiya', role: 'Co-President', initials: 'SS', photo: teamPresident },
  { name: 'Dinithi Jayakody', role: 'Co-President', initials: 'EM', photo: teamCoPresident },
  { name: 'Amisha Gupta', role: 'Secretary', initials: 'EX', photo: teamSecretary },
  { name: 'Dylan Jayalath', role: 'Treasurer', initials: 'ET', photo: teamTreasurer },
  { name: 'Samodi Senadeeralage', role: 'Director of Events', initials: 'SS', photo: teamEvents },
  { name: 'Kiara Abhayaratne', role: 'Director of Marketing', initials: 'EC', photo: teamMarketing },
  { name: 'Shanaya Wickremesinghe', role: 'Director of Internal Affairs', initials: 'IA', photo: teamAffairs },
  { name: 'Santhusha Mudannayaka', role: 'Director of Technology', initials: 'CL', photo: teamTech },
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
          <img src={awuruduHero} alt="" className="hero-photo" />
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
            ආයුබෝවන්! வணக்கம்! Welcome!
          </motion.span>
          <h1>
            Sri Lankans at <span className="highlight">Berkeley</span>
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
              Sri Lankans at Berkeley (SLAB) is a student organization at the University of California, Berkeley,
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
              <h3>Our Mission</h3>
              <p>To preserve and celebrate Sri Lankan heritage while fostering community, cultural exchange, and mutual support among our members at Berkeley and beyond.</p>
            </div>
            <div className="about-card">
              <h3>Our Vision</h3>
              <p>To be a vibrant hub where Sri Lankan traditions meet Berkeley's diverse campus, creating lasting friendships and meaningful cultural connections.</p>
            </div>
          </motion.div>
        </div>
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
              { title: 'Cultural Events', desc: 'Celebrate Sinhala & Tamil New Year, Vesak, and traditional festivals', image: offerEvents, href: '#events' },
              { title: 'Community', desc: 'Connect with fellow Sri Lankans and friends of Sri Lanka', image: offerCommunity, href: '#about' },
              { title: 'Sri Lankan Heritage', desc: 'Explore the island\'s rich history, cuisine, and traditions', image: offerHeritage, href: '#sri-lanka' },
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

      <section className="blog-preview-section" id="blog">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Blogs
          </motion.h2>
          <motion.p
            className="section-subtitle blog-preview-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Stories, updates, and happenings from our community
          </motion.p>

          <div className="blog-grid blog-preview-grid">
            {blogPosts.slice(0, 3).map((post, i) => (
              <motion.article
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                whileHover={{ y: -4 }}
              >
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-header">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-meta">
                      {post.date} · {post.readTime} · by {post.author}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to="/blog" className="blog-link">
                    Read more →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="blog-view-all-wrap"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/blog" className="btn btn-primary">
              View all
            </Link>
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
            Sri Lanka, formerly Ceylon, is an island nation in South Asia, rich in history, culture, and natural beauty.
            From ancient temples to tea plantations, pristine beaches to misty mountains, it continues to inspire our community at Berkeley.
          </motion.p>

          <div className="youtube-embed">
            <iframe
              src="https://www.youtube.com/embed/PtqgMf0zNug"
              title="Sri Lanka | 4K | The Jewel of Indian Ocean"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="srilanka-map">
            <iframe
              title="Sri Lanka map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8199420.983506112!2d74.07421791138784!3d7.70484647492029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae171850f40ff2b%3A0x7c5c1030a0b0128d!2sSri%20Lanka!5e0!3m2!1sen!2sus!4v1773920000000!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <motion.section
            className="culture-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Culture & Traditions
            </motion.h2>
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
                  <div className="culture-card-image">
                    <img src={item.image} alt="" />
                  </div>
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
                <div className="event-flyer">
                  <img src={event.flyer} alt="" />
                </div>
                <div className="event-info">
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="exec-team-section" id="executive-team">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Executive Team
          </motion.h2>
          <p className="section-subtitle">Meet the board supporting SLAB</p>

          <div className="exec-grid">
            {executiveTeam.map((person, i) => (
              <motion.div
                key={person.name}
                className="exec-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                whileHover={{ y: -6 }}
              >
                <div className="exec-avatar">
                  <img src={person.photo} alt={`${person.name} photo`} />
                </div>
                <h4>{person.name}</h4>
                <p>{person.role}</p>
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
                <a href="mailto:stephan_simba@berkeley.edu">stephan_simba@berkeley.edu</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location</span>
                <p>University of California, Berkeley<br />Berkeley, CA 94720</p>
              </div>
              <div className="contact-item">
                <span className="contact-label">Social</span>
                <div className="social-pills">
                  <a
                    href="https://www.instagram.com/cal.slab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill instagram-pill"
                  >
                    <span className="social-icon instagram-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4.2" />
                        <circle cx="17" cy="7" r="1.1" />
                      </svg>
                    </span>
                    <span className="social-text">
                      <strong>Instagram</strong>
                      <span>Follow @cal.slab</span>
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill linkedin-pill"
                  >
                    <span className="social-icon linkedin-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <rect x="3" y="3" width="18" height="18" rx="3" ry="3" />
                        <path d="M8.2 17.5V10h-2v7.5h2Zm-1-8.7a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Zm3.5 8.7h2v-4.1c0-.9.6-1.5 1.4-1.5.8 0 1.3.5 1.3 1.5v4.1h2V13c0-2-1.1-3.1-2.8-3.1-1.2 0-1.9.6-2.3 1.2h-.1V10h-1.9v7.5Z" />
                      </svg>
                    </span>
                    <span className="social-text">
                      <strong>LinkedIn</strong>
                      <span>Connect with us</span>
                    </span>
                  </a>
                </div>
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
    </div>
  )
}
