import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';

export default function ConfirmacaoReserva() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center m-0 vh-100">
      <Container className="d-flex align-items-center justify-content-center vh-100">
        <Card className="confirmationCard">
          <Card.Body className="d-flex flex-column align-items-center justify-content-center p-4">
            <BsFillPatchCheckFill />
            <Card.Title>Muito Obrigado</Card.Title>
            <Card.Text>
              Reserva Realizada com Sucesso
            </Card.Text>
            <Button className="m-1" onClick={() => navigate('/')}>
              Voltar para home
            </Button>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </div>
  );
}
