import { motion } from 'framer-motion'

const cultureItems = [
  { emoji: '🍛', title: 'Cuisine', text: 'Rice & curry, hoppers, kottu, string hoppers, and sweet treats like kiribath and kavum.' },
  { emoji: '🎭', title: 'Arts', text: 'Kandyan dance, traditional drumming, and intricate crafts including woodcarving and batik.' },
  { emoji: '📿', title: 'Religion', text: 'A multi-religious society with Buddhism, Hinduism, Islam, and Christianity coexisting.' },
  { emoji: '🏏', title: 'Sports', text: 'Cricket is a national passion; Sri Lanka has produced world champions and legendary players.' },
]

export default function SriLanka() {
  return (
    <div className="page srilanka-page">
      <section className="page-hero">
        <motion.div 
          className="hero-bg srilanka-hero-bg"
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
          <h1>Sri Lanka</h1>
          <p>Discover the island nation we call home</p>
        </motion.div>
      </section>

      <section className="srilanka-content">
        <div className="container">
          <motion.div 
            className="srilanka-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="lead">
              Sri Lanka, formerly Ceylon, is an island nation in South Asia, rich in history, culture, and natural beauty. 
              From ancient temples to tea plantations, pristine beaches to misty mountains, it continues to inspire our community at Berkeley.
            </p>
          </motion.div>

          <motion.section 
            className="culture-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Culture & Traditions</h2>
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
                  <span className="culture-emoji">{item.emoji}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.div 
            className="flag-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Our Flag</h2>
            <div className="flag-explained">
              <div className="flag-visual">
                <div className="flag-stripe" style={{ background: 'var(--maroon)' }}></div>
                <div className="flag-stripe" style={{ background: 'var(--saffron)' }}></div>
                <div className="flag-stripe" style={{ background: 'var(--green)' }}></div>
              </div>
              <div className="flag-symbolism">
                <p><strong>Maroon</strong> - Sinhalese people</p>
                <p><strong>Saffron</strong> - Tamil people</p>
                <p><strong>Green</strong> - Muslim (Moor) people</p>
                <p><strong>Yellow border</strong> - Buddhism and unity</p>
                <p><strong>Lion</strong> - Strength and the Sinhalese people</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
