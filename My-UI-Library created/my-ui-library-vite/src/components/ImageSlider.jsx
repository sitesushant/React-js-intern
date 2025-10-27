import React, { useEffect, useState } from "react";
import "./ImageSlider.css"; // make sure this file exists

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
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
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

export default ImageSlider;
