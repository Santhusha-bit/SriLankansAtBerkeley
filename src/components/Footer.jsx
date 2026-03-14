import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '') || ''

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--maroon)"/>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="footer-grid">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Sri Lankan at Berkeley</h3>
            <p>Celebrating culture, building community at UC Berkeley since our founding.</p>
          </motion.div>
          
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <a href={`${basePath}#about`}>About</a>
            <a href={`${basePath}#sri-lanka`}>Sri Lanka</a>
            <a href={`${basePath}#events`}>Events</a>
            <Link to="/blog">Blog</Link>
            <a href={`${basePath}#contact`}>Contact</a>
          </motion.div>
          
          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4>Get in Touch</h4>
            <p>slab@berkeley.edu</p>
            <p>University of California, Berkeley</p>
            <a href="https://www.instagram.com/cal.slab/" target="_blank" rel="noopener noreferrer">@cal.slab</a>
          </motion.div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-flag-stripes">
            <span style={{ background: 'var(--maroon)' }}></span>
            <span style={{ background: 'var(--saffron)' }}></span>
            <span style={{ background: 'var(--green)' }}></span>
            <span style={{ background: 'var(--yellow)' }}></span>
          </div>
          <p>© {new Date().getFullYear()} Sri Lankan at Berkeley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
