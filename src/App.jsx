import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import './App.css'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  // Match base in vite.config.js for GitHub Pages (e.g. '/SLAB' for repo SLAB)
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || ''
  return (
    <BrowserRouter basename={basename}>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
