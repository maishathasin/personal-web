// Modal.tsx (Reusable Modal Component)
import React from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';

interface ModalProps {
  content: string;
  x: number;
  y: number;
  width: number;
  height: number;
  onClose: () => void;
}

function Modal({ content, x, y, width, height, onClose }: ModalProps) {
  return (
    <Draggable handle=".modal-header" defaultPosition={{ x, y }}>
<ResizableBox width={200} height={200} draggableOpts={{}}
          minConstraints={[100, 100]} maxConstraints={[300, 300]}>
        <div className="modal">
          <div className="modal-header">
            <button onClick={onClose}>Close</button>
          </div>
          <div className="modal-content">{content}</div>
        </div>
      </ResizableBox>
    </Draggable>
  );
}

export default Modal;
