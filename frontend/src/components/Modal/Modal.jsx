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
            <Button className='m-2' variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal className='modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Muito Obrigado!</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column align-items-center justify-content-center p-4'>

                    <BsFillPatchCheckFill className="checkfill" />
                    Reserva Realizada com Sucesso!
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center'>
                    <Button className='btn-1' variant="secondary" onClick={handleClose}>
                        Continuar
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}