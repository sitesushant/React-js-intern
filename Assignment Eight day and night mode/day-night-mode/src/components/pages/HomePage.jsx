import { useState } from 'react';
import Modal from '../organisms/Modal';
import ImageSlider from '../organisms/ImageSlider';
import Button from '../atoms/Button';

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  
  // Random beautiful images for the slider
  const randomImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  ];

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Open Modal</Button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <p>This is a modal popup using Portal!</p>
        </Modal>
      )}

      <h2>Scroll to Load Images</h2>
      <ImageSlider images={randomImages} />
    </div>
  );
}
