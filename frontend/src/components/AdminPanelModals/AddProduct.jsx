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
  const [ name, setName ] = useState("")
  const [ category, setCategory ] = useState("")
  const [ city, setCity ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ icon, setIcon ] = useState("")
  const [ iconName, setIconName ] =  useState("")
  const [ newCity, setNewCity ] = useState("")

  const apiLink = process.env.NODE_ENV === 'development' ? 'http://13.57.207.104:8080' : '';
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newCityData = {
      nome: city,
      pais: ''
    }
    const newProductData = {
      nome: name,
      categoria_onetm: category,
      cidade_mtone: newCity,
      descricao: description,
    }

    try {
      await axios.post(`${apiLink}/cidades`, newCityData)
      .then((res) => {
        setNewCity(res.data.id)
      })
    } catch (error) {
      console.error(error)
    }
    try {
      await axios.post(`${apiLink}/produtos`, newProductData)
    } catch (error) {
      console.error(error)
    }
  }


  
  

  
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
              <Form className='d-flex flex-column flex-wrap p-3'>
                <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">

                  <Form.Group className=" group m-3 ">
                    <Form.Label>Nome da propiedade</Form.Label>
                    <Form.Control className='control' type="text" placeholder="" onChange={(e) => {
                      setName(e.target.value)
                    }}/>
                  </Form.Group>

                  <Form.Group className=" group m-3  ">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select className='select' onChange={(e) => {
                      
                      setCategory(e.target.selectedOptions[0].value)
                    }}>

                      <option>Selecione uma categoria</option>
                      <option value="1">Hotel</option>
                      <option value="2">Hotel Fazenda</option>
                      <option value="3">Apartamento</option>
                      <option value="4">Hostel</option>
                      
                    </Form.Select>

                  </Form.Group>
                </div>

                <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">

                  

                  <Form.Group className=" group m-3">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control className='control' type="text" placeholder="" onChange={(e) => {
                      setCity(e.target.value)
                    }}/>
                  </Form.Group>
                </div>


                <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">

                  <Form.Group className="group m-3 d-flex flex-column mt-2 ">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                      as="textarea" className='textarea '
                      placeholder=""
                      onChange={(e) => {setDescription(e.target.value)}}

                    />
                  </Form.Group>
                </div>
                  <Card.Title>
                    <span className="cardTitle">Adicionar atributos</span>
                  </Card.Title>
                 
                    <Form.Group className=" group m-3 ">
                      <Form.Label>Nome do atributo</Form.Label>
                      <Form.Control className='control' type="text" placeholder="" />
                    </Form.Group>

                   
                    <Form.Group className=" group m-3 ">
                      <Form.Label>Icone</Form.Label>
                      <div className='d-flex flex-row align-items-center'>
                      <Form.Control className='control ' type="text" placeholder="Ex.: fa fa-wifi" />
                      <button className="plus-button mx-3"></button>
                       </div>
                    </Form.Group>
                {/* <Card.Title>
                    <span className="cardTitle">Políticas do produto</span>
                  </Card.Title> */}
                  {/* <div className='d-flex flex-wrap justify-content-center '>
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
                  </div>*/}
                  <button type="button" onClick={handleSubmit} className="createProduct">Criar</button>
                  </Form>
                  
                </Card>
      </Modal.Body>
    </Modal>
  )
}