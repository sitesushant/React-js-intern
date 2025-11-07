import Link from 'next/link'

export default function Contact() {
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
          <h1>Contact Us</h1>
           
        </div>

        <div className="page-content">
          <h2>Contact Page</h2>
           
          
          <div className="grid">
            <div className="card">
              <h3>Email</h3>
              <p>contact@example.com</p>
              <p>We'll respond within 24 hours</p>
            </div>
            
            <div className="card">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
              <p>Monday - Friday, 9 AM - 6 PM</p>
            </div>
            
            <div className="card">
              <h3>Address</h3>
              <p>123 Tech Street </p>
              <p>Vist our office</p>
            </div>
          </div>
          
          <div className="card">
            <h3>Send us a Message</h3>
            <form>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="name">Name:</label><br />
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="email">Email:</label><br />
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="message">Message:</label><br />
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem', border: '1px solid #ddd', borderRadius: '4px' }}
                ></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
          
          <Link href="/" className="btn btn-secondary">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
