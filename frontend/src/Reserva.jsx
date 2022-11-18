import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Card, Container } from 'react-bootstrap';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { ptBR } from 'date-fns/locale';
import Footer from './components/Footer/Footer';


export default function Reserva() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center m-0 vh-100 ">
      <Container fluid className=" formContainer  d-flex align-items-center justify-content-center vh-100 flex-column align-content-start flex-wrap">
      
        <Row>
        <Col xs={10} >
          <div> <h1>Complete seus dados</h1></div>
      <Card className='cardForm'>
      <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Nome" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSobrenome">
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control type="text" placeholder="Sobrenome" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridNome">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSobrenome">
          <Form.Label>Cidade</Form.Label>
          <Form.Control type="city" placeholder="Cidade" />
        </Form.Group>
      </Row>

    </Form>
    </Card>  
    </Col>
    </Row>   
        
      </Container>

      <Container>
        <Row>
          <Col>
          <div className="dateContainer d-flex align-items-center justify-content-center  flex-column align-content-start flex-wrap">
            <h1>Selecione sua data de reserva</h1>
          </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
