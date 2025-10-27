import { useState } from 'react';
import Modal from '../organisms/Modal';
import ImageSlider from '../organisms/ImageSlider';
import Button from '../atoms/Button';
import { useFetch } from '../../hooks/useFetch';

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/photos?_limit=5');

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Open Modal</Button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <p>This is a modal popup using Portal!</p>
        </Modal>
      )}

      <h2>Scroll to Load Images</h2>
      {loading && <p>Loading images...</p>}
      {error && <p>Error loading images: {error}</p>}
      {!loading && !error && data && <ImageSlider images={data.map(img => img.thumbnailUrl)} />}
    </div>
  );
}
