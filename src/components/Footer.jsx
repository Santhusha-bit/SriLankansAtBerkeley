import { motion } from 'framer-motion'
import logoImg from '../../images/logo.jpg'
import calLogo from '../../images/cal.png'
import slFlagLogo from '../../images/sl flag.png'
import usFlagLogo from '../../images/us flag.png'

const assetBase = import.meta.env.BASE_URL.replace(/\/?$/, '/')

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
            <h3>Sri Lankans at Berkeley</h3>
            <p>Celebrating culture, building community at UC Berkeley since our founding.</p>
          </motion.div>

          <motion.div
            className="footer-logos"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="footer-logo-item">
              <img
                src={logoImg}
                alt="Sri Lankans at Berkeley"
                className="footer-logo-img footer-logo-club"
              />
            </div>
            <div className="footer-logo-item">
              <img
                src={calLogo}
                alt="University of California, Berkeley"
                className="footer-logo-img footer-logo-berkeley"
              />
            </div>
            <div className="footer-logo-item">
              <img
                src={slFlagLogo}
                alt="Flag of Sri Lanka"
                className="footer-logo-img footer-logo-flag"
              />
            </div>
            <div className="footer-logo-item">
              <img
                src={usFlagLogo}
                alt="Flag of the United States"
                className="footer-logo-img footer-logo-flag"
              />
            </div>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <div className="footer-flag-stripes">
            <span style={{ background: 'var(--maroon)' }}></span>
            <span style={{ background: 'var(--saffron)' }}></span>
            <span style={{ background: 'var(--green)' }}></span>
            <span style={{ background: 'var(--yellow)' }}></span>
          </div>
          <p>© {new Date().getFullYear()} Sri Lankans at Berkeley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
