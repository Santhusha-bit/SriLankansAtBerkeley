import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="page about-page">
      <section className="page-hero">
        <motion.div 
          className="hero-bg about-hero-bg"
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
          <h1>About Us</h1>
          <p>Our mission, history, and the people behind Sri Lankan at Berkeley</p>
        </motion.div>
      </section>

      <section className="about-content">
        <div className="container">
          <motion.div 
            className="about-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Our Story</h2>
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
            <h2>What We Value</h2>
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

          <motion.div 
            className="about-join"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>Interested in getting involved? Reach out to us—we'd love to have you!</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
