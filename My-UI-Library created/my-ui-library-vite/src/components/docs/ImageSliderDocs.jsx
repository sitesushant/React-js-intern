import React from "react";
import ImageSlider from "../ImageSlider";
import CopyButton from "../CopyButton";
import effie1 from "../../../assests/images/effie1.jpg";

const ImageSliderDocs = () => {
  const images = [
    effie1,
    effie1,
    effie1
  ];

  const usageCode = `<ImageSlider 
  images={["url1", "url2", "url3"]} 
  interval={1500} 
/>`;

  const sourceCode = `import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images = [], interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images.length) return <p>No images to display</p>;

  return (
    <div className="image-slider">
      <img src={images[currentIndex]} alt={\`Slide \${currentIndex + 1}\`} />
      <div className="dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={idx === currentIndex ? "active" : ""}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;`;

  return (
    <div>
      <h1>Image Slider Component</h1>
      <p>The Image Slider component displays a series of images one at a time with automatic or manual transition. It includes navigation dots for manual control and automatic cycling through images.</p>

      <div className="example-section">
        <h3>Example</h3>
        <div style={{ maxWidth: '500px' }}>
          <ImageSlider images={images} interval={1500} />
        </div>
      </div>

      <div className="code-section">
        <div className="code-header">
          <span>Usage</span>
        </div>
        <div className="code-content">
          <pre><code>{usageCode}</code></pre>
          <CopyButton code={usageCode} />
        </div>
      </div>

      <div className="source-code-section">
        <div className="source-code-header">
          <span>Source Code</span>
        </div>
        <div className="source-code-content">
          <pre><code>{sourceCode}</code></pre>
          <CopyButton code={sourceCode} />
        </div>
      </div>

      <h3>Props</h3>
      <table className="props-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>images</b></td>
            <td>array</td>
            <td>[]</td>
            <td>Array of image URLs or imported image objects</td>
          </tr>
          <tr>
            <td><b>interval</b></td>
            <td>number</td>
            <td>2000</td>
            <td>Time in milliseconds between automatic slides</td>
          </tr>
        </tbody>
      </table>

      <h3>Features</h3>
      <ul>
        <li>Automatic image cycling with customizable interval</li>
        <li>Navigation dots for manual control</li>
        <li>Responsive design that adapts to container width</li>
        <li>Automatic cleanup of timers on unmount</li>
        <li>Graceful handling of empty image arrays</li>
        <li>Accessible alt text for screen readers</li>
      </ul>

      <h3>CSS Classes</h3>
      <p>The component uses the following CSS classes for styling:</p>
      <ul>
        <li><code>.image-slider</code> - Main container</li>
        <li><code>.dots</code> - Navigation dots container</li>
        <li><code>.active</code> - Active dot indicator</li>
      </ul>

      <h3>Notes</h3>
      <p>Perfect for showcasing featured images, banners, or gallery previews. The slider automatically cycles through images and provides manual navigation via clickable dots. Make sure to include the ImageSlider.css file for proper styling.</p>
    </div>
  );
};

export default ImageSliderDocs;
