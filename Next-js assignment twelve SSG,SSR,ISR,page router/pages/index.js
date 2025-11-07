import Link from 'next/link'

export async function getStaticProps() {
  return {
    props: {
      buildTime: new Date().toISOString()
    }
  }
}

export default function Home({ buildTime }) {
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
        <section className="hero">
          <div className="hero-inner">
            <div>
              <h1>Next.js Router</h1>
              <p>Normal, dynamic, and nested routes.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="/products" className="btn">Explore Products</Link>
                <Link href="/blog" className="btn btn-secondary">Read the Blog</Link>
              </div>
            </div>
            <div className="image-wrap">
              <div style={{
                width: '100%',
                height: '400px',
                background: 'linear-gradient(135deg, #0070f3 0%, #0051cc 100%)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                textAlign: 'center',
                lineHeight: 1.6,
                padding: '1rem'
              }}>
                <div style={{ color: 'white' }}>
                  <p style={{ color: 'white' }}>SSG on home page</p>
                  <p style={{ color: 'white' }}>ISR on blog index</p>
                  <p style={{ color: 'white' }}>SSG + ISR on product details with paths</p>
                  <p style={{ color: 'white' }}>SSR on blog detail</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <h2>Home Page</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
            This page is prerendered at build time (SSG). Build time: {buildTime}
          </p>
          <div className="grid">
            <div className="card">
              <h3>Normal Pages</h3>
              <p>Static pages like Home, About, and Contact</p>
              <Link href="/about" className="btn">Visit About</Link>
            </div>
            
            <div className="card">
              <h3>Dynamic Pages</h3>
              <p>Pages with dynamic routes using [id] parameters</p>
              <Link href="/products/1" className="btn">View Product</Link>
            </div>
            
            <div className="card">
              <h3>Nested Pages</h3>
              <p>Pages organized in subdirectories</p>
              <Link href="/blog" className="btn">Visit Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
