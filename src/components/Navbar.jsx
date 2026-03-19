import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../../images/logo.jpg'

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '') || ''
const navLinks = [
  { path: '/', hash: '#about', label: 'About' },
  { path: '/', hash: '#events', label: 'Events' },
  { path: '/blog', label: 'Blog' },
  { path: '/', hash: '#contact', label: 'Contact' },
  { path: '/', hash: '#sri-lanka', label: 'Sri Lanka' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (link) => {
    if (link.path === '/blog') return location.pathname === '/blog'
    return location.pathname === '/' && (location.hash === link.hash || (!location.hash && link.hash === '#about'))
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="navbar"
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          <span className="logo-mark">
            <img src={logoImg} alt="Sri Lankans at Berkeley logo" />
          </span>
        </Link>

        <button
          className={`nav-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              {link.path === '/blog' ? (
                <Link
                  to="/blog"
                  className={location.pathname === '/blog' ? 'active' : ''}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.hash ? `${basePath}${link.hash}` : basePath || '/'}
                  className={isActive(link) ? 'active' : ''}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              )}
            </motion.li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="nav-overlay"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
