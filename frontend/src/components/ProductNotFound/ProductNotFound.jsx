import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';

export default function ProductNotFound() {
    return (

        <>

            <Container fluid>
                <div className='notProduct d-flex align-content-center'>
                    <div className='d-flex justify-content-center'>
                        <p>Olá, mundo!!</p>
                    </div>
                </div>
            </Container>

            <Footer />
        </>

    );

}
