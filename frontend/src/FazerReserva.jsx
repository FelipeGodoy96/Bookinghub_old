/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Card, Container } from 'react-bootstrap';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ProductCardReserva from './components/ProductCard/ProductCardReserva';
import Footer from './components/Footer/Footer';
import Calendario from './components/Calendario/Calendario';

export default function Reserva() {
  const dadosDoAnuncioReserva = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!dadosDoAnuncioReserva || !dadosDoAnuncioReserva.state) {
      if (id) {
        navigate(`/anuncio/${id}`);
      } else {
        navigate('/*');
      }
    }
  }, []);

  if (dadosDoAnuncioReserva && dadosDoAnuncioReserva.state) {
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
                    <Form.Group className="w-100">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control type="text" placeholder="Nome" />
                    </Form.Group>

                    <Form.Group className="w-100">
                      <Form.Label>Sobrenome</Form.Label>
                      <Form.Control type="text" placeholder="Sobrenome" />
                    </Form.Group>
                  </div>

                  <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between mt-3">
                    <Form.Group className="w-100">
                      <Form.Label>Confirmar endereço de e-mail</Form.Label>
                      <Form.Control type="email" placeholder="Email" />
                      <Form.FloatingLabel className="emailObs mt-1  ">
                        *A confirmação será enviada para esse e-mail
                      </Form.FloatingLabel>
                    </Form.Group>

                    <Form.Group className="w-100">
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
                  <h1 className='text-center'>Selecione a data da reserva</h1>
                </Card.Title>
                <Calendario />
                <Form />
              </Card>
            </Container>
          </div>

          <ProductCardReserva dadosDoAnuncioReserva={dadosDoAnuncioReserva.state} />

        </div>
        <Footer />
      </>
    );
  }
  return null;
}
