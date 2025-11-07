import Link from 'next/link'

export default function About() {
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
          <h1>About Us</h1>
           
        </div>

        <div className="page-content">
          <h2>About Page</h2>
           
          <div className="card">
            <h3>Our Mission</h3>
            <p>We are dedicated to creating amazing web experiences using modern technologies like Next.js, React, and more.</p>
          </div>
          
          <div className="card">
            <h3>What We Do</h3>
            <p>We build responsive, fast, and user-friendly web applications that help businesses grow and succeed in the digital world.</p>
          </div>
          
          <div className="card">
            <h3>Our Team</h3>
            <p>Our team consists of experienced developers, designers, and project managers who are passionate about creating exceptional digital products.</p>
          </div>
          
          <Link href="/" className="btn">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
