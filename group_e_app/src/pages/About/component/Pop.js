import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProjectButton from '../../../components/ProjectButton/ProjectButton.js';

export default function Pop(props) {
  const { imgPath, title, content } = props;
  return (
    <>
      <BootstrapModalExample
        imgPath={imgPath}
        title={title}
        content={content}
        renderTrigger={({ handleShow }) => (
          <img
            className="w-100 h-100"
            onClick={handleShow}
            src={`http://localhost:3600/willowimgs/${imgPath}`}
            alt=""
          />
        )}
      />
    </>
  );
}
function BootstrapModalExample(props) {
  const { renderTrigger, imgPath, title, content } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {renderTrigger && renderTrigger({ handleShow })}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6 className="bingH6"> {title}</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            className="w-100 h-100"
            onClick={handleShow}
            src={`http://localhost:3600/willowimgs/${imgPath}`}
            alt=""
          />
          <p className="bingText-16"> {content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            關閉
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
