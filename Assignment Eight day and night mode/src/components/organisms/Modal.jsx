import ReactDOM from 'react-dom';
import ModalContent from '../molecules/ModalContent';
 

export default function Modal({ onClose, children }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-body">
        <ModalContent onClose={onClose}>{children}</ModalContent>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}
