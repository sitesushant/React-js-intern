import { useRef, useState, useEffect } from 'react';
import './ImageSlider.css';

export default function ImageSlider({ images }) {
  const sliderRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sliderRef.current) observer.observe(sliderRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [visible, images.length]);

  if (!visible) {
    return (
      <div ref={sliderRef} className="image-slider-placeholder">
        <p>Scroll down to see the image slider...</p>
      </div>
    );
  }

  return (
    <div ref={sliderRef} className="image-slider">
      <div className="slider-container">
        <img 
          key={currentIndex}
          src={images[currentIndex]} 
          alt={`slide-${currentIndex}`}
          className="slider-image"
        />
        <div className="slider-dots">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
