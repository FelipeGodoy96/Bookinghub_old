import React from "react";
import Form from 'react-bootstrap/Form'
import 'react-bootstrap'
import { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal'
import axios from "axios";
import { useContext } from "react";
import Context from "../../Contexts/Context";
import Card from 'react-bootstrap/Card';
import  Container from 'react-bootstrap/Container'




export default function AddProduct (props) {
  const [ title, setTitle ] = useState("")
  const { state } = React.useContext(Context)
  const [ categories, setCategories ] = useState([])
  
  
  

  
  return (
    <Modal {...props} size="lg" centered >
      <Modal.Header >
        <Modal.Title className="modalTitle">
          Criar produto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Card className="p-0">
              <Card.Title>
                <span className="cardTitle"></span>
              </Card.Title>
              <Form className='d-flex flex-column flex-wrap p-3' onSubmit={() => {
                {'lógica de envio do formulario aqui'}
              }}>
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

             

            
          
            
                  <Card.Title>
                    <span className="cardTitle">Adicionar atributos</span>
                  </Card.Title>
                 
                    <Form.Group className=" group m-3 ">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control className='control' type="text" placeholder="Nome do atributo" />
                    </Form.Group>

                   
                    <Form.Group className=" group m-3 ">
                      <Form.Label>Icone</Form.Label>
                      <div className='d-flex flex-row align-items-center'>
                      <Form.Control className='control ' type="text" placeholder="Icone" />
                      <button className="plus-button mx-3"></button>
                       </div>
                    </Form.Group>
                   
               
                 
               

               
                <Card.Title>
                    <span className="cardTitle">Políticas do produto</span>
                  </Card.Title>
                  <div className='d-flex flex-wrap justify-content-center '>
                  <div className='regras mt-5'>
                     <h4>Regras da casa</h4> 
                    
                     <Form.Group className="group  d-flex flex-column m-3 ">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                      as="textarea" className='textarea-group '
                      placeholder="Leave a comment here"
                    />
                  </Form.Group>
                 
                  </div>
                  <div className='regras mt-5'>
                    <h4>Saúde e segurança</h4>
                   
                    <Form.Group className="group  d-flex flex-column m-3 ">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                      as="textarea" className='textarea-group '
                      placeholder="Leave a comment here"
                    />
                  </Form.Group>
                  
                  </div>

                  <div className='regras mt-5'>
                    <h4>Politica de cancelamento</h4>
                  
                    <Form.Group className="group  d-flex flex-column m-3 ">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                      as="textarea" className='textarea-group '
                      placeholder="Leave a comment here"
                    />
                  </Form.Group>
                 
                  </div>
                  </div><button className="createProduct">Criar</button>
                  </Form>
                </Card>
      </Modal.Body>
    </Modal>
  )
}