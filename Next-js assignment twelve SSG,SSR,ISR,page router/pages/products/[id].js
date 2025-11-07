import Link from 'next/link'

const products = {
    1: { 
      name: 'Laptop Pro', 
      price: '$1299', 
      description: 'High-performance laptop for professionals',
      image: 'https://via.placeholder.com/1000x750/4f46e5/ffffff?text=Laptop+Pro',
      specs: ['16GB RAM', '512GB SSD', 'Intel i7 Processor', '15.6" 4K Display'],
      features: ['Lightweight design', 'All-day battery life', 'Fast charging', 'Premium build quality']
    },
    2: { 
      name: 'Smartphone X', 
      price: '$799', 
      description: 'Latest smartphone with advanced features',
      image: 'https://via.placeholder.com/1000x750/059669/ffffff?text=Smartphone+X',
      specs: ['128GB Storage', '12MP Camera', '5G Ready', '6.1" OLED Display'],
      features: ['Face ID', 'Wireless charging', 'Water resistant', 'Night mode camera']
    },
    3: { 
      name: 'Tablet Air', 
      price: '$599', 
      description: 'Lightweight tablet for productivity',
      image: 'https://via.placeholder.com/1000x750/dc2626/ffffff?text=Tablet+Air',
      specs: ['64GB Storage', '10.9" Display', 'A14 Chip', 'Touch ID'],
      features: ['Apple Pencil support', 'Magic Keyboard compatible', 'All-day battery', 'Thin and light']
    },
    4: { 
      name: 'Headphones Pro', 
      price: '$299', 
      description: 'Premium wireless headphones',
      image: 'https://via.placeholder.com/1000x750/7c3aed/ffffff?text=Headphones+Pro',
      specs: ['Active Noise Cancellation', '30-hour battery', 'Quick charge', 'Premium materials'],
      features: ['Transparency mode', 'Spatial audio', 'Comfortable fit', 'Voice assistant']
    },
    5: { 
      name: 'Smart Watch', 
      price: '$399', 
      description: 'Fitness tracking and smart features',
      image: 'https://via.placeholder.com/1000x750/ea580c/ffffff?text=Smart+Watch',
      specs: ['Always-on display', 'GPS', 'Heart rate monitor', 'Water resistant'],
      features: ['Sleep tracking', 'Workout detection', 'Notifications', 'Customizable faces']
    }
}

export async function getStaticPaths() {
  const ids = Object.keys(products)
  return {
    paths: ids.map(id => ({ params: { id } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const product = products[id] || null
  if (!product) {
    return { notFound: true }
  }
  return {
    props: {
      id,
      product
    },
    revalidate: 60
  }
}

export default function ProductDetail({ id, product }) {
  if (!product) {
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
          <div className="page-content">
            <h1>Product Not Found</h1>
            <p>The product you're looking for doesn't exist.</p>
            <Link href="/products" className="btn">Back to Products</Link>
          </div>
        </div>
      </div>
    )
  }

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
          <h1>{product.name}</h1>
          <p>Product ID: {id}</p>
        </div>

        <div className="page-content">
          <h2>Dynamic Page Example</h2>
           
          
          <div className="image-wrap" style={{ marginBottom: '1.25rem' }}>
            <div style={{
              width: '100%',
              height: '300px',
              background: id === '1' ? 'linear-gradient(135deg, #4f46e5, #7c3aed)' :
                         id === '2' ? 'linear-gradient(135deg, #059669, #10b981)' :
                         id === '3' ? 'linear-gradient(135deg, #dc2626, #f97316)' :
                         id === '4' ? 'linear-gradient(135deg, #7c3aed, #a855f7)' :
                         'linear-gradient(135deg, #ea580c, #f59e0b)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
              {product.name}
            </div>
          </div>

          <div className="card">
            <h3>Product Information</h3>
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Price:</strong> <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0070f3' }}>{product.price}</span></p>
            <p><strong>Description:</strong> {product.description}</p>
          </div>

          <div className="card">
            <h3>Specifications</h3>
            <ul>
              {product.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>Key Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Link href="/products" className="btn">Back to Products</Link>
            <button className="btn" style={{ background: '#28a745' }}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
