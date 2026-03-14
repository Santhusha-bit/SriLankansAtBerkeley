import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    id: 1,
    title: 'Sinhala & Tamil New Year Celebration 2024',
    date: 'Apr 14, 2024',
    excerpt: 'Our annual Avurudu celebration brought together over 100 students for traditional games, kiribath, and cultural performances. The auspicious time was observed with milk rice and sweets, followed by raban playing and pillow fights—a true taste of the island\'s most beloved holiday.',
    category: 'Events',
    readTime: '4 min',
  },
  {
    id: 2,
    title: 'Introducing Our New Executive Board',
    date: 'Sep 2, 2024',
    excerpt: 'Meet the passionate students leading SLAB this academic year. From diverse majors and backgrounds, united by Sri Lankan heritage. This year\'s board brings experience from Colombo, Kandy, Jaffna, and the diaspora, ensuring every corner of the island is represented at Berkeley.',
    category: 'Announcements',
    readTime: '3 min',
  },
  {
    id: 3,
    title: 'Sri Lankan Cuisine Night: A Culinary Journey',
    date: 'Oct 28, 2024',
    excerpt: 'Kottu, hoppers, and string hoppers—we explored the flavors of the island at our fall food event. From Jaffna crab curry to upcountry vegetable dishes, the night was a reminder of how Sri Lanka\'s geography shapes its table. Recipes and stories inside!',
    category: 'Culture',
    readTime: '5 min',
  },
  {
    id: 4,
    title: 'Vesak Day Observance at Berkeley',
    date: 'May 23, 2024',
    excerpt: 'Commemorating the birth, enlightenment, and passing of the Buddha with meditation, lanterns, and community reflection. Vesak is one of the most sacred days in Sri Lanka; we brought that spirit to Sproul with dansal-style sharing and a talk on Buddhism\'s role in Lankan culture.',
    category: 'Events',
    readTime: '3 min',
  },
  {
    id: 5,
    title: 'Spotlight: Sri Lankan Students in STEM',
    date: 'Nov 15, 2024',
    excerpt: 'Profiling SLAB members making waves in engineering, computer science, and research at Cal. From tea-estate backgrounds to Colombo schools, these students are proof that Sri Lanka\'s education system and drive produce world-class talent—and they\'re giving back through mentorship and outreach.',
    category: 'Spotlight',
    readTime: '6 min',
  },
  {
    id: 6,
    title: 'Why Ceylon Tea Still Rules the World',
    date: 'Dec 3, 2024',
    excerpt: 'A deep dive into Sri Lanka\'s tea industry: from Nuwara Eliya to Ella, the highlands produce some of the finest black tea on earth. We trace the history from British planters to modern organic estates and share how to brew the perfect cup the Lankan way—strong, with a splash of milk.',
    category: 'Sri Lanka',
    readTime: '7 min',
  },
  {
    id: 7,
    title: 'The Ancient Cities: Anuradhapura and Polonnaruwa',
    date: 'Jan 12, 2025',
    excerpt: 'Sri Lanka\'s cultural triangle holds UNESCO World Heritage sites that rival any in Asia. The sacred Bo tree in Anuradhapura, the rock fortress of Sigiriya, and the stupas of Polonnaruwa tell a 2,500-year story. We recap a member\'s trip and what every Lankan should know about these treasures.',
    category: 'Sri Lanka',
    readTime: '8 min',
  },
  {
    id: 8,
    title: 'Kandyan Dance and Drumming: Keeping Tradition Alive',
    date: 'Feb 1, 2025',
    excerpt: 'The upcountry performing arts—Ves dance, Pantheru, and the thunder of the geta beraya—are among Sri Lanka\'s most iconic. At our spring workshop, a visiting artist taught basics of Kandyan dance and explained how these forms survived colonialism and continue to inspire new generations.',
    category: 'Culture',
    readTime: '5 min',
  },
  {
    id: 9,
    title: 'From Jaffna to Berkeley: Tamil Lankan Voices',
    date: 'Feb 8, 2025',
    excerpt: 'The Tamil community has shaped Sri Lanka\'s north and east for millennia. In this roundtable, SLAB members from Jaffna and the Tamil diaspora shared family stories, the importance of Thai Pongal and Tamil New Year, and what it means to carry both Tamil and Lankan identity at Cal.',
    category: 'Sri Lanka',
    readTime: '6 min',
  },
]

export default function Blog() {
  return (
    <div className="page blog-page">
      <section className="page-hero">
        <motion.div
          className="hero-bg blog-hero-bg"
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
          <h1>Blog</h1>
          <p>Stories, updates, and happenings from our community—and the Sri Lanka we love</p>
        </motion.div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                whileHover={{ y: -6 }}
              >
                <div className="blog-card-header">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-meta">{post.date} · {post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to="#" className="blog-link">Read more →</Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
