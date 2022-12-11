import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Card from 'react-bootstrap/Card';
import Footer from './components/Footer/Footer';

export default function CriarProduto() {
  return (
    <>
      <div className="d-flex flex-column flex-lg-row flex-md-row align-items-center justify-content-center">

        <div className="formContainer d-flex flex-column">
          <Container className=" d-flex align-items-center justify-content-center flex-column align-content-start flex-wrap">
            <Card className="cardForm w-100">
              <Card.Title>
                <h1 className="text-center">Criar propriedade</h1>
              </Card.Title>

              <Form className="d-flex ">
                <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">
                  <Row className="mb-4">
                    <Form.Group as={Col} className=" group">
                      <Form.Label>Nome da propriedade</Form.Label>
                      <Form.Control className="control" type="text" placeholder="Nome da propriedade" />
                    </Form.Group>

                    <Form.Group as={Col} className=" group">
                      <Form.Label>Categoria</Form.Label>
                      <Form.Select className="select">

                        <option>Selecione uma categoria</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>

                    </Form.Group>
                  </Row>
                </div>

                <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">
                  <Row className="mb-4">
                    <Form.Group as={Col} className=" group">
                      <Form.Label>Endereço</Form.Label>
                      <Form.Control className="control" type="text" placeholder="Nome da propriedade" />
                    </Form.Group>

                    <Form.Group as={Col} className=" group">
                      <Form.Label>Cidade</Form.Label>
                      <Form.Select className="select">

                        <option>Selecione uma categoria</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>

                    </Form.Group>

                  </Row>

                </div>

              </Form>
            </Card>
          </Container>

        </div>

      </div>
      <Footer />
    </>
  );
}
