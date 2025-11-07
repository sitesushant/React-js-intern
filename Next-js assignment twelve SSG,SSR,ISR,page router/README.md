# Next.js Page Router Assignment

This project demonstrates different types of pages in Next.js using the Pages Router (not App Router). It includes normal pages, dynamic pages, and nested pages.

## Project Structure

```
pages/
├── _app.js              # App component wrapper
├── _document.js         # Document structure
├── index.js             # Home page (normal page)
├── about.js             # About page (normal page)
├── contact.js           # Contact page (normal page)
├── products/
│   ├── index.js         # Products listing page
│   └── [id].js          # Dynamic product detail page
└── blog/
    ├── index.js         # Blog listing page
    ├── [id].js          # Dynamic blog post page
    └── category/
        └── [category].js # Nested dynamic category page
```

## Page Types Demonstrated

### 1. Normal Pages
- **Home Page** (`pages/index.js`) - The main landing page
- **About Page** (`pages/about.js`) - Static about page
- **Contact Page** (`pages/contact.js`) - Contact form page

### 2. Dynamic Pages
- **Product Detail** (`pages/products/[id].js`) - Shows individual product details
  - Accessible via `/products/1`, `/products/2`, etc.
  - Uses `useRouter()` to get the dynamic `id` parameter
- **Blog Post** (`pages/blog/[id].js`) - Shows individual blog posts
  - Accessible via `/blog/1`, `/blog/2`, etc.

### 3. Nested Pages
- **Products Index** (`pages/products/index.js`) - Lists all products
- **Blog Index** (`pages/blog/index.js`) - Lists all blog posts
- **Blog Category** (`pages/blog/category/[category].js`) - Shows posts by category
  - Accessible via `/blog/category/tutorial`, `/blog/category/react`, etc.

## Features

- **Responsive Design**: Mobile-friendly layout with CSS Grid and Flexbox
- **Navigation**: Consistent navigation across all pages
- **Dynamic Routing**: Examples of both single and nested dynamic routes
- **Mock Data**: Sample products and blog posts for demonstration
- **Error Handling**: 404-style pages for non-existent content

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Routes

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/products` - Products listing
- `/products/[id]` - Individual product (try 1-5)
- `/blog` - Blog listing
- `/blog/[id]` - Individual blog post (try 1-4)
- `/blog/category/[category]` - Blog posts by category (tutorial, react, css, javascript)

## Technologies Used

- **Next.js 14** - React framework with Pages Router
- **React 18** - JavaScript library for building user interfaces
- **CSS3** - Styling with modern CSS features
- **JavaScript ES6+** - Modern JavaScript features

## Key Learning Points

1. **File-based Routing**: Next.js automatically creates routes based on file structure
2. **Dynamic Routes**: Use square brackets `[param]` for dynamic segments
3. **Nested Routes**: Organize pages in subdirectories for better structure
4. **useRouter Hook**: Access route parameters and navigation in components
5. **Page Components**: Each page is a React component that gets rendered
6. **App and Document**: Customize the overall app structure and HTML document

This project serves as a comprehensive example of Next.js Pages Router capabilities and best practices for organizing different types of pages in a web application.
