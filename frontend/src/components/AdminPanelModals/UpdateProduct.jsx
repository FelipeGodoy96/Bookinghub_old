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
import { apiLink } from '../../services/apiHandle'
import  Table  from "react-bootstrap/Table";

export default function UpdateProduct(props) {
  const [ product, setProduct ] = useState(null)
  const [ name, setName ] = useState("")
  const [ city, setCity ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ images, setImages ] = useState(null)

  useEffect(() => {
    console.log(props)
    const fetchProduct = async () => {
      try {
        
        const req = await axios.get(`${apiLink}/produtos/${props.id}`)
        console.log(req)
        setProduct(req.data)
        setName(req.data.nome)
        // setCity(req.data.cidade)
        setDescription(req.data.descricao)
        setImages(req.data.imagens)

      }
      catch (error) {
        console.error(error)
      }
    }
    fetchProduct()
  }, [props.id])
  const handleUpdate = async (id) => {
    console.log('test')
  }
  return (
    <Modal {...props} size="lg" centered>
       <Modal.Header >
        <Modal.Title className="modalTitle">
          Atualizar produto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Card className="p-0 overflow-hidden">
              <Card.Title>
                <span className="cardTitle"></span>
              </Card.Title>
              <Form className='d-flex flex-column  p-3'>
                <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">

                  <Form.Group className="group m-3">
                    <Form.Label>Nome da propriedade</Form.Label>
                    <Form.Control value={name || ""} className='control' type="text" placeholder="" onChange={(e) => {
                      setName(e.target.value)
                    }}/>
                  </Form.Group>

                  <Form.Group className="group m-3">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select className='select ' onChange={(e) => {
                      
                      setCategory(e.target.selectedOptions[0].value)
                    }}>

                      <option>Selecione uma categoria</option>
                      <option value="1">Hotel</option>
                      <option value="2">Hotel Fazenda</option>
                      <option value="3">Apartamento</option>
                      <option value="4">Hostel</option>
                      
                    </Form.Select>

                  </Form.Group>                

                  <Form.Group className=" group m-3">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control value={""} className='control' type="text" placeholder="" onChange={(e) => {
                      setCity(e.target.value)
                    }}/>
                  </Form.Group>
                </div>


                <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">

                  <Form.Group className="group m-3 d-flex flex-column mt-2 ">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                      as="textarea" className='textarea' value={description || ""} style={{minHeight: "150px"}}
                      placeholder=""
                      onChange={(e) => {setDescription(e.target.value)}}
                    />
                  </Form.Group>
                </div>
                  <Card.Title>
                    <span className="cardTitle">Editar atributos</span>
                  </Card.Title>
                  <div className='d-flex flex-row align-items-center'>
                    <Form.Group className="group m-3" style={{width: "35%"}}>
                      <Form.Label>Nome</Form.Label>
                      
                      <Form.Control className='control' type="text" placeholder="" />
                    </Form.Group>

                   
                    <Form.Group className="group m-3" style={{width: "25%"}}>
                      <Form.Label>Icone</Form.Label>
                     
                      <Form.Control className='control' type="text" placeholder="Ex.: fa fa-wifi" />
                    
                      </Form.Group>
                      <button type="button" className="plus-button mt-4">+</button>
                      
                    
                    </div>
                    <Card.Title>
                    <span className="cardTitle">Editar imagens</span>
                  </Card.Title>
                  <div>
                    <Table>
                      <thead>
                        <tr>
                          <th style={{width: "5%"}}>id</th>
                          <th style={{width: "25%"}}>nome</th>
                          <th style={{width: "70%"}}>URL</th>
                        </tr>
                      </thead>
                      <tbody >
                        {console.log(product)}
                {product && product.imagens.map(element => {
                  return (
                    <tr key={element.id}>
                      <td>{element.id}</td>
                      <td>{element.titulo}</td>
                      <td>{element.url}</td>
                      
                    </tr>
                  )
                })}
              </tbody>
                    </Table>
                  </div>
                  <div className="d-flex flex-row">
                  <Form.Group className="group m-3" style={{width: "25%"}}>
                      <Form.Label>Imagem</Form.Label>
                      
                      <Form.Control className='control' type="text" placeholder="" />
                    </Form.Group>

                   
                    <Form.Group className="group m-3" style={{width: "65%"}}>
                      <Form.Label>Endereço URL</Form.Label>
                     
                      <Form.Control className='control' type="text" placeholder="Ex.: https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/nomedaimagem/arquivo.jpg" />
                      </Form.Group>
                      <button type="button" className="plus-button mt-5 mb-5">+</button>
                  </div>
                  <button type="button" onClick={handleUpdate} className="createProduct">Confirmar mudanças</button>
                  </Form>
                  
                </Card>
      </Modal.Body>
    </Modal>
  )
}