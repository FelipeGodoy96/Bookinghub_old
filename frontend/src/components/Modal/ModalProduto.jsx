import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function ModalProduto() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <Button variant="primary" onClick={handleShow}>
                clique aqui!
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Muito Obrigado!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center justify-content-center p-4">
                    <BsFillPatchCheckFill className="checkfill" />
                    Produto criado com sucesso!
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center'>
                    <Button className="btn-1" id="NavegarButtonModal" variant="secondary" onClick={() => handleRedirect('/')}>
                        Continuar Navegando
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

      
    );
}
