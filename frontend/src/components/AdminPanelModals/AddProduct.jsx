import React, { useState, useEffect, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Context from '../../Contexts/Context';
import { apiLink } from '../../services/apiHandle';
import ModalProduto from '../Modal/ModalProduto';
import { Table } from 'react-bootstrap';

export default function AddProduct(props) {
  const [ modalVisibility, setModalVisibility ] = useState(false)
  const [title, setTitle] = useState('');
  const { state } = React.useContext(Context);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [newCity, setNewCity] = useState('');
  const [ imagesCollection, setImagesCollection ] = useState([])
  const [ imageName, setImageName ] = useState("")
  const [ imageURL, setImageURL ] = useState("")
  const [ attrCollection, setAttrCollection ] = useState([])
  const [ iconName, setIconName ] = useState('')
  const [icon, setIcon] = useState('');
  class Image {
    constructor(name, url) {
      this.imageName = name;
      this.imgURL = url;
    }
  }

  class Icon {
    constructor(name, icon) {
      this.iconName = name;
      this.icon = icon
    }
  }

  const handleAddImagesToCollection = (e) => {
    e.preventDefault()
    const item = new Image(imageName,imageURL)
    const list = [...imagesCollection]
    list.push(item)
    setImagesCollection(list)
  }

  const handleAddIconsToCollection = (e) => {
    e.preventDefault()
    const item = new Icon(iconName,icon)
    const list = [...attrCollection]
    list.push(item)
    setAttrCollection(list)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCityData = {
      nome: city,
      pais: '',
    }
    const newProductData = {
      nome: name,
      descricao: description,
      categoria: {"id": category},
      cidades: {"id": newCity}
    };
    const newAttrData = {

    }
    try {
      await axios.post(`${apiLink}/cidades`, newCityData)
        .then((res) => {
             setNewCity(res.data.id)
        })
    } catch (error) {
      console.trace(error);
    }
    try {
      await axios.post(`${apiLink}/caracteristicas`, newAttrData)
      .then((res) => {
        setNewAttr(res.data.id)
      })
    }  catch (error) {
        console.trace(error)
      }
    try {
      await axios.post(`${apiLink}/produtos`, newProductData)
      .then((res) => {
        if (res.status == 201) {
          setModalVisibility(true)
          setTimeout(() => {
            setModalVisibility(false)
            props.onHide()
          },3000)
        }
      })
    } catch (error) {
      console.trace(error);
    }





    setAttrCollection("")
    setImagesCollection("")
  }

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header>
        <Modal.Title className="modalTitle">
          Criar produto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="p-0">
          <Card.Title>
            <span className="cardTitle" />
          </Card.Title>
          <Form className="d-flex flex-column  p-3">
            <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">

              <Form.Group className="group m-3">
                <Form.Label>Nome da propriedade</Form.Label>
                <Form.Control
                  required
                  className="control"
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="group m-3">
                <Form.Label>Categoria</Form.Label>
                <Form.Select
                  required
                  className="select "
                  onChange={(e) => {
                    setCategory(e.target.selectedOptions[0].value);
                  }}
                >

                  <option>Selecione uma categoria</option>
                  <option value="1">Hotel</option>
                  <option value="2">Hotel Fazenda</option>
                  <option value="3">Apartamento</option>
                  <option value="4">Hostel</option>

                </Form.Select>

              </Form.Group>
              {/* </div> */}

              {/* <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between"> */}

              <Form.Group className=" group m-3">
                <Form.Label>Cidade</Form.Label>
                <Form.Control
                  required
                  className="control"
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </Form.Group>
            </div>

            <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">

              <Form.Group className="group m-3 d-flex flex-column mt-2 ">
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  className="textarea"
                  style={{ minHeight: '150px' }}
                  placeholder=""
                  onChange={(e) => { setDescription(e.target.value); }}
                />
              </Form.Group>
            </div>
            <Card.Title>
              <span className="cardTitle">Adicionar atributos</span>
            </Card.Title>
            <div>
              <Table>
                <thead>
                  <tr>
                    <th style={{width: '30%'}}>Nome</th>
                    <th style={{width: '70%'}}>Ícone</th>
                  </tr>
                </thead>
                <tbody>
                  {attrCollection.map((element, index) => (
                    <tr key={index}>
                      <td>{element.iconName}</td>
                      <td>{element.icon}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div className="d-flex flex-row align-items-center">
              <Form.Group className="group m-3" style={{ width: '35%' }}>
                <Form.Label>Nome</Form.Label>

                <Form.Control className="control" type="text" placeholder="" onChange={(e) => {
                  setIconName(e.target.value)
                }}/>
              </Form.Group>

              <Form.Group className="group m-3" style={{ width: '25%' }}>
                <Form.Label>Icone</Form.Label>

                <Form.Control className="control" type="text" placeholder="Ex.: fa fa-wifi" onChange={(e) => {
                  setIcon(e.target.value)
                }}/>

              </Form.Group>
              <button type="button" onClick={handleAddIconsToCollection} className="plus-button mt-4">+</button>

            </div>
            <Card.Title>
              <span className="cardTitle">Adicionar imagens</span>
            </Card.Title>
            <div>
              <Table>
                <thead>
                  <tr>
                    <th style={{width: '30%'}}>Nome</th>
                    <th style={{width: '70%'}}>URL</th>
                  </tr>
                </thead>
                <tbody>
                  {imagesCollection.map((element, index) => (
                    <tr key={index}>
                      <td>{element.imageName}</td>
                      <td>{element.imgURL}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div className="d-flex flex-row">
              <Form.Group className="group m-3" style={{ width: '25%' }}>
                <Form.Label>Imagem</Form.Label>

                <Form.Control id="addImageName" className="control" type="text" placeholder="" onChange={(e) => {
                  setImageName(e.target.value)
                }}/>
              </Form.Group>

              <Form.Group id="wtf" className="group m-3" style={{ width: '65%' }}>
                <Form.Label>Endereço URL</Form.Label>

                <Form.Control className="control" type="text" placeholder="Ex.: https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/nomedaimagem/arquivo.jpg" onChange={(e) => {
                  setImageURL(e.target.value)
                }}/>
              </Form.Group>
             
              <button type="button" onClick={handleAddImagesToCollection}
             

               className="plus-button mt-5 mb-5">+</button>
            </div>
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
                  </div> */}
            <button type="button" onClick={handleSubmit} className="createProduct">Criar</button>
          </Form>
          <ModalProduto visible={modalVisibility} />
        </Card>
      </Modal.Body>
    </Modal>
  );
}
