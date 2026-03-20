import { useState } from 'react'
import { Link, useLocation, useNavigate, useHref } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../../images/logo.jpg'
import { useTheme } from '../context/ThemeContext.jsx'

const navLinks = [
  { path: '/', hash: '#about', label: 'About' },
  { path: '/', hash: '#events', label: 'Events' },
  { path: '/', hash: '#blog', label: 'Blog', fullBlogPage: true },
  { path: '/', hash: '#contact', label: 'Contact' },
  { path: '/', hash: '#sri-lanka', label: 'Sri Lanka' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const homeHref = useHref('/')
  const { theme, toggleTheme } = useTheme()

  const isActive = (link) => {
    if (link.fullBlogPage) {
      return (
        location.pathname === '/blog' ||
        (location.pathname === '/' && location.hash === '#blog')
      )
    }
    return location.pathname === '/' && (location.hash === link.hash || (!location.hash && link.hash === '#about'))
  }

  const handleSectionNav = (hash) => (e) => {
    e.preventDefault()
    setIsOpen(false)
    navigate({ pathname: '/', hash })
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

        <div className="nav-right">
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
                <a
                  href={link.hash ? `${homeHref}${link.hash}` : homeHref}
                  className={isActive(link) ? 'active' : ''}
                  onClick={handleSectionNav(link.hash)}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            title="Toggle theme"
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>
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
