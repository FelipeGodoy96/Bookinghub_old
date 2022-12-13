/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function ModalReservaConfirmada({ visible, mensagem }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setShow(visible);
  }, [visible]);
  const handleRedirect = (path) => {
    setShow(false);
    navigate(path);
  };

  return (
    <Modal className="modal" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{mensagem?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center justify-content-center p-4">
        <BsFillPatchCheckFill className="checkfill" />
        {mensagem?.description}
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button className="btn-1" id="NavegarButtonModal" variant="secondary" onClick={() => handleRedirect('/')}>
          Continuar Navegando
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
