import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillPatchCheckFill } from 'react-icons/bs';


export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column align-items-center justify-content-center p-4'>
        <BsFillPatchCheckFill className="checkfill m-2" />
        Parabéns, sua conta foi criada com sucesso!
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn-1' variant="secondary" onClick={handleClose}>
            Pagina Inicial
          </Button>
          <Button className='btn-1' variant="primary" onClick={handleClose}>
            Iniciar sessão
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}