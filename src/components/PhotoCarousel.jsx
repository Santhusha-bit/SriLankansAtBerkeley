import { useMemo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const imageModules = import.meta.glob('../../images/projects/**/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
})

function makeCaptionFromPath(path) {
  const filename = path.split('/').pop() || ''
  const withoutExt = filename.replace(/\.[^/.]+$/, '')
  return withoutExt.replace(/[_-]+/g, ' ').trim()
}

export default function PhotoCarousel() {
  const slides = useMemo(() => {
    const entries = Object.entries(imageModules)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([path, src], idx) => {
        const caption = makeCaptionFromPath(path)
        return {
          id: idx + 1,
          src,
          alt: caption ? `${caption} (Sri Lanka)` : 'Sri Lanka photo',
        }
      })

    return entries.length
      ? entries
      : [
          {
            id: 1,
            src: '',
            alt: 'Sri Lanka photo',
          },
        ]
  }, [])

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="photo-carousel" aria-label="Photo carousel">
      <div className="carousel-track">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slides[current].id}
            className="carousel-slide"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {slides[current].src ? (
              <img
                src={slides[current].src}
                alt={slides[current].alt}
                className="carousel-image"
              />
            ) : (
              <div className="carousel-image" aria-hidden="true" />
            )}
            <div className="carousel-overlay" />
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
