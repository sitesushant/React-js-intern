import Link from 'next/link'

const blogPosts = {
    1: {
      title: 'Getting Started with Next.js',
      image: 'https://via.placeholder.com/1000x700/0070f3/ffffff?text=Next.js+Tutorial',
      content: `
        Next.js is a React framework that provides a great developer experience with many built-in features. 
        It's perfect for building production-ready applications with features like server-side rendering, 
        static site generation, and API routes.
        
        In this tutorial, we'll cover:
        - Setting up a new Next.js project
        - Understanding the file-based routing system
        - Creating pages and components
        - Using built-in CSS support
        - Deploying your application
        
        Next.js makes it easy to build fast, SEO-friendly applications with React. The framework handles 
        many of the complex configurations that you would normally need to set up manually.
      `,
      date: '2024-01-15',
      category: 'Tutorial',
      author: 'John Doe'
    },
    2: {
      title: 'React Hooks Deep Dive',
      image: 'https://via.placeholder.com/1000x700/61dafb/000000?text=React+Hooks',
      content: `
        React Hooks revolutionized how we write React components by allowing us to use state and other 
        React features in functional components. Let's explore the most commonly used hooks.
        
        useState Hook:
        The useState hook allows you to add state to functional components. It returns a stateful value 
        and a function to update it.
        
        useEffect Hook:
        The useEffect hook lets you perform side effects in functional components. It's similar to 
        componentDidMount, componentDidUpdate, and componentWillUnmount combined.
        
        Custom Hooks:
        You can create your own hooks to extract component logic into reusable functions. Custom hooks 
        are a great way to share stateful logic between components.
      `,
      date: '2024-01-10',
      category: 'React',
      author: 'Jane Smith'
    },
    3: {
      title: 'CSS Grid vs Flexbox',
      image: 'https://via.placeholder.com/1000x700/1572b6/ffffff?text=CSS+Layout',
      content: `
        CSS Grid and Flexbox are both powerful layout systems, but they serve different purposes. 
        Understanding when to use each one is crucial for creating efficient layouts.
        
        CSS Grid:
        - Two-dimensional layout system
        - Perfect for complex layouts with rows and columns
        - Great for overall page layout
        - More powerful for 2D positioning
        
        Flexbox:
        - One-dimensional layout system
        - Perfect for components and smaller layouts
        - Great for aligning items within a container
        - More intuitive for simple layouts
        
        Best Practice: Use Grid for overall page layout and Flexbox for component-level layouts.
      `,
      date: '2024-01-05',
      category: 'CSS',
      author: 'Mike Johnson'
    },
    4: {
      title: 'JavaScript ES6+ Features',
      image: 'https://via.placeholder.com/1000x700/f7df1e/000000?text=JavaScript+ES6',
      content: `
        Modern JavaScript (ES6+) introduced many features that make JavaScript more powerful and easier to use. 
        Here are some essential features every developer should know.
        
        Arrow Functions:
        Arrow functions provide a more concise syntax for writing function expressions. They also have 
        lexical this binding, which can be very useful.
        
        Destructuring:
        Destructuring allows you to extract values from arrays or properties from objects into distinct variables.
        
        Template Literals:
        Template literals are string literals that allow embedded expressions. They use backticks instead of quotes.
        
        Modules:
        ES6 modules provide a way to organize and share code between different files using import and export statements.
      `,
      date: '2024-01-01',
      category: 'JavaScript',
      author: 'Sarah Wilson'
    }
}

export async function getServerSideProps({ params }) {
  const { id } = params
  const post = blogPosts[id] || null
  if (!post) {
    return { notFound: true }
  }
  return {
    props: {
      id,
      post
    }
  }
}

export default function BlogPost({ id, post }) {
  if (!post) {
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
            <h1>Blog Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="btn">Back to Blog</Link>
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
          <h1>{post.title}</h1>
          <p>Blog Post ID: {id}</p>
        </div>

        <div className="page-content">
          <div className="image-wrap" style={{ marginBottom: '1.25rem' }}>
            <div style={{
              width: '100%',
              height: '300px',
              background: id === '1' ? 'linear-gradient(135deg, #0070f3, #0051cc)' :
                         id === '2' ? 'linear-gradient(135deg, #61dafb, #21d4fd)' :
                         id === '3' ? 'linear-gradient(135deg, #1572b6, #33a9dc)' :
                         'linear-gradient(135deg, #f7df1e, #f9ca24)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: id === '4' ? 'black' : 'white',
              fontSize: '2rem',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: '1rem'
            }}>
              {post.title}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
            <div>
              <span style={{ 
                background: '#0070f3', 
                color: 'white', 
                padding: '0.25rem 0.5rem', 
                borderRadius: '4px', 
                fontSize: '0.8rem',
                marginRight: '1rem'
              }}>
                {post.category}
              </span>
              <span style={{ color: '#666' }}>By {post.author} on {post.date}</span>
            </div>
          </div>

          <div style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} style={{ marginBottom: '1.5rem' }}>
                {paragraph}
              </p>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
            <Link href="/blog" className="btn">Back to Blog</Link>
            <Link href="/" className="btn btn-secondary">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
