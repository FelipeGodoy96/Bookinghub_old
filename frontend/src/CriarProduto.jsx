import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Footer from './components/Footer/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function CriarProduto() {
  return (
    <>
      <div className="d-flex flex-column flex-lg-row flex-md-row align-items-center justify-content-center">

        <div className="formContainer d-flex flex-column">
          <Container className=" d-flex align-items-center justify-content-center flex-column ">
            <Card className="cardForm p-0">
              <Card.Title>
                <h1 className='text-center mt-5'>Criar propriedade</h1>
              </Card.Title>

              <Form className='d-flex flex-column flex-wrap p-3'>
                <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">

                  <Form.Group className=" group m-3 ">
                    <Form.Label>Nome da propriedade</Form.Label>
                    <Form.Control className='control' type="text" placeholder="Nome da propriedade" />
                  </Form.Group>

                  <Form.Group className=" group m-3  ">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select className='select' >

                      <option>Selecione uma categoria</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>

                  </Form.Group>
                </div>

                <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">

                  <Form.Group className=" group m-3">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control className='control' type="text" placeholder="Endereço" />
                  </Form.Group>

                  <Form.Group className=" group m-3">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Select className='select' >

                      <option>Selecione uma Cidade</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </div>


                <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">

                  <Form.Group className="group m-3 d-flex flex-column mt-2 ">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                      as="textarea" className='textarea '
                      placeholder="Leave a comment here"

                    />
                  </Form.Group>
                </div>

             

              </Form>
            </Card>
            <Card className="cardForm p-0 mt-5">
                  <Card.Title>
                    <h1 className='text-center mt-5'>Adicionar atributos</h1>
                  </Card.Title>
                  <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">
                    <Form.Group className=" group m-3 ">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control className='control' type="text" placeholder="Nome do atributo" />
                    </Form.Group>

                   
                    <Form.Group className=" group m-3 ">
                      <Form.Label>Icone</Form.Label>
                      <div className='d-flex flex-row align-items-center'>
                      <Form.Control className='control ' type="text" placeholder="Icone" />
                      <button class="plus-button mx-3"></button>
                       </div>
                    </Form.Group>
                   
                  </div>
                 
                </Card>

                <Card className='cardForm p-1 mt-5'>
                <Card.Title>
                    <h1 className='text-center mt-5'>Politicas do produto </h1>
                  </Card.Title>
                  <div className='d-flex flex-wrap justify-content-center '>
                  <div className='regras mt-5'>
                     <h4>Regras da casa</h4> 
                     <Card className='cardForm p-0 mx-3' >
                     <Form.Group className="group  d-flex flex-column m-3 ">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                      as="textarea" className='textarea-group '
                      placeholder="Leave a comment here"
                    />
                  </Form.Group>
                  </Card>
                  </div>
                  <div className='regras mt-5'>
                    <h4>Saùde e segurança</h4>
                    <Card className='cardForm p-0 mx-3' >
                    <Form.Group className="group  d-flex flex-column m-3 ">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                      as="textarea" className='textarea-group '
                      placeholder="Leave a comment here"
                    />
                  </Form.Group>
                  </Card>
                  </div>

                  <div className='regras mt-5'>
                    <h4>Politica de cancelamento</h4>
                    <Card className='cardForm p-0 mx-3' >
                    <Form.Group className="group  d-flex flex-column m-3 ">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                      as="textarea" className='textarea-group '
                      placeholder="Leave a comment here"
                    />
                  </Form.Group>
                  </Card>
                  </div>
                  </div>
                </Card>

          </Container>

        </div>

      </div>
      <Footer />
    </>
  );

}
