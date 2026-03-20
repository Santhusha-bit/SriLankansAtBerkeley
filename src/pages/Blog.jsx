import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogPosts } from '../data/blogPosts'

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
          <p>Stories, updates, and happenings from our community and the Sri Lanka we love</p>
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
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-header">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-meta">
                      {post.date} · {post.readTime} · by {post.author}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to="#" className="blog-link">Read more →</Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
