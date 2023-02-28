import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const AboutDialog = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button onClick={handleShow} className="bg-[#4C5760] mr-3 hover:bg-[#A59E8C] text-white font-bold py-2 px-4 border border-blue-700 rounded ml-3" variant="primary" >
        About
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>About COMP4513 Assignment01</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose} className="bg-[#4C5760] mr-3 hover:bg-[#A59E8C] text-white font-bold py-2 px-4 border border-blue-700 rounded ml-3">
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default AboutDialog;