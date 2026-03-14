import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&h=500&fit=crop',
    alt: 'Sigiriya Rock Fortress, Sri Lanka',
    caption: 'Sigiriya Rock Fortress — Ancient UNESCO Heritage',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&h=500&fit=crop',
    alt: 'Tea plantations in Ella, Sri Lanka',
    caption: 'Ceylon tea country — Ella highlands',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1580519542036-c47e619e319f?w=1200&h=500&fit=crop',
    alt: 'Temple of the Sacred Tooth Relic, Kandy',
    caption: 'Temple of the Tooth — Kandy',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&h=500&fit=crop',
    alt: 'Southern coastline of Sri Lanka',
    caption: 'Pearl of the Indian Ocean',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&h=500&fit=crop',
    alt: 'Galle Fort, Sri Lanka',
    caption: 'Galle Fort — Colonial heritage',
  },
]

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="photo-carousel" aria-label="Photo carousel">
      <div className="carousel-track">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slides[current].id}
            className="carousel-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={slides[current].src}
              alt={slides[current].alt}
              className="carousel-image"
            />
            <div className="carousel-overlay" />
            <div className="carousel-caption">
              <span>{slides[current].caption}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`carousel-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <button
        type="button"
        className="carousel-btn carousel-btn-prev"
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        type="button"
        className="carousel-btn carousel-btn-next"
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  )
}
