import Link from 'next/link'

export async function getStaticProps() {
  const blogPosts = [
    { 
      id: 1, 
      title: 'Getting Started with Next.js', 
      excerpt: 'Learn the basics of Next.js and how to build modern web applications.',
      date: '2024-01-15',
      category: 'Tutorial',
      image: 'https://via.placeholder.com/900x600/0070f3/ffffff?text=Next.js+Tutorial'
    },
    { 
      id: 2, 
      title: 'React Hooks Deep Dive', 
      excerpt: 'Understanding useState, useEffect, and other React hooks in detail.',
      date: '2024-01-10',
      category: 'React',
      image: 'https://via.placeholder.com/900x600/61dafb/000000?text=React+Hooks'
    },
    { 
      id: 3, 
      title: 'CSS Grid vs Flexbox', 
      excerpt: 'When to use CSS Grid and when to use Flexbox for your layouts.',
      date: '2024-01-05',
      category: 'CSS',
      image: 'https://via.placeholder.com/900x600/1572b6/ffffff?text=CSS+Layout'
    },
    { 
      id: 4, 
      title: 'JavaScript ES6+ Features', 
      excerpt: 'Modern JavaScript features that every developer should know.',
      date: '2024-01-01',
      category: 'JavaScript',
      image: 'https://via.placeholder.com/900x600/f7df1e/000000?text=JavaScript+ES6'
    }
  ]

  return {
    props: {
      blogPosts,
      generatedAt: new Date().toISOString()
    },
    revalidate: 10
  }
}

export default function Blog({ blogPosts, generatedAt }) {

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
          <h1>Blog</h1>
           
        </div>

        <div className="page-content">
          <h2>Blog Index Page</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
            This page uses ISR. Last generated: {generatedAt} (revalidates every 10s)
          </p>
          
          <div className="grid">
            {blogPosts.map(post => (
              <div key={post.id} className="card">
                <div className="image-wrap" style={{ marginBottom: '1rem' }}>
                  <div style={{
                    width: '100%',
                    height: '200px',
                    background: post.id === 1 ? 'linear-gradient(135deg, #0070f3, #0051cc)' :
                               post.id === 2 ? 'linear-gradient(135deg, #61dafb, #21d4fd)' :
                               post.id === 3 ? 'linear-gradient(135deg, #1572b6, #33a9dc)' :
                               'linear-gradient(135deg, #f7df1e, #f9ca24)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: post.id === 4 ? 'black' : 'white',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: '1rem'
                  }}>
                    {post.title}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="badge">{post.category}</span>
                  <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{post.date}</span>
                </div>
                <h3 style={{ marginBottom: '0.25rem' }}>{post.title}</h3>
                <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="btn">
                  Read More
                </Link>
              </div>
            ))}
          </div>
          
          <div className="card">
            <h3>Blog Categories</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/blog/category/tutorial" className="btn btn-secondary">Tutorials</Link>
              <Link href="/blog/category/react" className="btn btn-secondary">React</Link>
              <Link href="/blog/category/css" className="btn btn-secondary">CSS</Link>
              <Link href="/blog/category/javascript" className="btn btn-secondary">JavaScript</Link>
            </div>
          </div>
          
          <Link href="/" className="btn btn-secondary">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
