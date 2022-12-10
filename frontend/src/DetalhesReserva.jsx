import React from 'react';
import Footer from './components/Footer/Footer';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function DetalhesReserva() {
  return (
    <>
      <div className="d-flex flex-column flex-lg-row flex-md-row align-items-center justify-content-center">

        <div className="formContainer d-flex flex-column">
          <Container className=" d-flex align-items-center justify-content-center flex-column align-content-start flex-wrap">
            <Card className="cardForm w-100">
              <Card.Title>
                <h1>Detalhes da reserva</h1>
              </Card.Title>


              <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">

              </div>





            </Card>
          </Container>

        </div>

      </div>

      <Footer />
    </>
  );
}
