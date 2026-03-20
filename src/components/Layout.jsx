import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') return
    const id = location.hash?.replace(/^#/, '')
    if (!id) return
    const scrollToTarget = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const t = window.setTimeout(scrollToTarget, 80)
    return () => window.clearTimeout(t)
  }, [location.pathname, location.hash])

  return (
    <div className="layout sri-pattern">
      <Navbar />
      <main className="main-content">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
