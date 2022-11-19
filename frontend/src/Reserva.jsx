/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Card, Container } from 'react-bootstrap';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import ProductCardReserva from './components/ProductCard/ProductCardReserva';
import Footer from './components/Footer/Footer';

export default function Reserva() {
  return (
    <>
      <div className="d-flex flex-column flex-lg-row flex-md-row align-items-center justify-content-center">
        <div className="formContainer d-flex flex-column">
          <Container className=" d-flex align-items-center justify-content-center flex-column align-content-start flex-wrap">
            <Card className="cardForm w-100">
              <Card.Title>
                <h1>Títular da Reserva</h1>
              </Card.Title>

              <Form>
                <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">
                  <Form.Group className="w-100 m-1">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Nome" />
                  </Form.Group>

                  <Form.Group className="w-100 m-1">
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control type="text" placeholder="Sobrenome" />
                  </Form.Group>
                </div>

                <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">
                  <Form.Group className="w-100 m-1">
                    <Form.Label>Confirmar endereço de e-mail</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                    <Form.FloatingLabel className="emailObs">
                      *A confirmação será enviada para esse e-mail
                    </Form.FloatingLabel>
                  </Form.Group>

                  <Form.Group className="w-100 m-1">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control type="city" placeholder="Cidade" />
                  </Form.Group>
                </div>
                <div className="checkBox">
                  <label className="mb-3 ">Para quem é esta reserva?</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label">
                      Eu sou o hóspede principal
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label className="form-check-label">
                      Reservando para outra pessoa
                    </label>
                  </div>
                </div>

              </Form>
            </Card>
          </Container>

          <Container className="d-flex align-items-center justify-content-center flex-column align-content-start flex-wrap mt-3">
            <Card className="cardForm w-100">
              <Card.Title>
                <h1>Selecione a data das reserversas</h1>
              </Card.Title>
              <Form />
            </Card>
          </Container>
        </div>
        <ProductCardReserva />

      </div>
      <Footer />
    </>
  );
}
