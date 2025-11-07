import Link from 'next/link'

export default function Products() {
  const products = [
    { 
      id: 1, 
      name: 'Laptop Pro', 
      price: '$1299', 
      description: 'High-performance laptop for professionals',
      image: 'https://via.placeholder.com/800x600/4f46e5/ffffff?text=Laptop+Pro'
    },
    { 
      id: 2, 
      name: 'Smartphone X', 
      price: '$799', 
      description: 'Latest smartphone with advanced features',
      image: 'https://via.placeholder.com/800x600/059669/ffffff?text=Smartphone+X'
    },
    { 
      id: 3, 
      name: 'Tablet Air', 
      price: '$599', 
      description: 'Lightweight tablet for productivity',
      image: 'https://via.placeholder.com/800x600/dc2626/ffffff?text=Tablet+Air'
    },
    { 
      id: 4, 
      name: 'Headphones Pro', 
      price: '$299', 
      description: 'Premium wireless headphones',
      image: 'https://via.placeholder.com/800x600/7c3aed/ffffff?text=Headphones+Pro'
    },
    { 
      id: 5, 
      name: 'Smart Watch', 
      price: '$399', 
      description: 'Fitness tracking and smart features',
      image: 'https://via.placeholder.com/800x600/ea580c/ffffff?text=Smart+Watch'
    }
  ]

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
          <h1>Our Products</h1>
           
        </div>

        <div className="page-content">
          <h2>Products Page</h2>
           
          
          <div className="grid">
            {products.map(product => (
              <div key={product.id} className="card">
                <div className="image-wrap" style={{ marginBottom: '1rem' }}>
                  <div style={{
                    width: '100%',
                    height: '200px',
                    background: product.id === 1 ? 'linear-gradient(135deg, #4f46e5, #7c3aed)' :
                               product.id === 2 ? 'linear-gradient(135deg, #059669, #10b981)' :
                               product.id === 3 ? 'linear-gradient(135deg, #dc2626, #f97316)' :
                               product.id === 4 ? 'linear-gradient(135deg, #7c3aed, #a855f7)' :
                               'linear-gradient(135deg, #ea580c, #f59e0b)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}>
                    {product.name}
                  </div>
                </div>
                <h3 style={{ marginBottom: '0.25rem' }}>{product.name}</h3>
                <p className="price" style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--brand-600)', marginBottom: '0.5rem' }}>
                  {product.price}
                </p>
                <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>{product.description}</p>
                <Link href={`/products/${product.id}`} className="btn">
                  View Details
                </Link>
              </div>
            ))}
          </div>
          
          <Link href="/" className="btn btn-secondary">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
