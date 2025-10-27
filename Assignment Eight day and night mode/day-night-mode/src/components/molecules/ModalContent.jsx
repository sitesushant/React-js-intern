import Button from '../atoms/Button';

export default function ModalContent({ onClose, children }) {
  return (
    <div onClick={e => e.stopPropagation()}>
      {children}
      <Button onClick={onClose}>Close</Button>
    </div>
  );
}
