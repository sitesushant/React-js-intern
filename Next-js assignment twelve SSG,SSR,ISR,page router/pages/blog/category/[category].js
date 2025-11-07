import Link from 'next/link'
import { useRouter } from 'next/router'

export default function BlogCategory() {
  const router = useRouter()
  const { category } = router.query

  // Mock blog posts by category
  const postsByCategory = {
    tutorial: [
      { id: 1, title: 'Getting Started with Next.js', date: '2024-01-15' },
      { id: 5, title: 'Building Your First React App', date: '2024-01-20' }
    ],
    react: [
      { id: 2, title: 'React Hooks Deep Dive', date: '2024-01-10' },
      { id: 6, title: 'React Context API Guide', date: '2024-01-18' }
    ],
    css: [
      { id: 3, title: 'CSS Grid vs Flexbox', date: '2024-01-05' },
      { id: 7, title: 'CSS Custom Properties', date: '2024-01-12' }
    ],
    javascript: [
      { id: 4, title: 'JavaScript ES6+ Features', date: '2024-01-01' },
      { id: 8, title: 'Async/Await in JavaScript', date: '2024-01-08' }
    ]
  }

  const posts = postsByCategory[category] || []
  const categoryName = category ? category.charAt(0).toUpperCase() + category.slice(1) : ''

  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <h1>WEBSITE</h1>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="page-header">
          <h1>{categoryName} Posts</h1>
           
        </div>

        <div className="page-content">
          <h2>Nested Dynamic Page</h2>
           
          
          {posts.length > 0 ? (
            <div className="grid">
              {posts.map(post => (
                <div key={post.id} className="card">
                  <h3>{post.title}</h3>
                  <p style={{ color: '#666', marginBottom: '1rem' }}>{post.date}</p>
                  <Link href={`/blog/${post.id}`} className="btn">
                    Read Post
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="card">
              <h3>No Posts Found</h3>
              <p>There are no posts in the {categoryName} category yet.</p>
            </div>
          )}

          <div className="card">
            <h3>Other Categories</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/blog/category/tutorial" className="btn btn-secondary">Tutorials</Link>
              <Link href="/blog/category/react" className="btn btn-secondary">React</Link>
              <Link href="/blog/category/css" className="btn btn-secondary">CSS</Link>
              <Link href="/blog/category/javascript" className="btn btn-secondary">JavaScript</Link>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Link href="/blog" className="btn">Back to Blog</Link>
            <Link href="/" className="btn btn-secondary">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
