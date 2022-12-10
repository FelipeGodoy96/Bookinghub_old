import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Footer from './components/Footer/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import AddProduct from './components/AdminPanelModals/AddProduct';



export default function AdminPanel() {

  const apiLink = process.env.NODE_ENV === 'development' ? 'http://13.57.207.104:8080' : '';
  const [ products, setProducts ] = useState({})
  // useEffect(() => {
  //   const getData = async () => {
  //     const req = await fetch ('apilink')
  //     const res = await req
  //     setProducts(res)
  //   }
  //   getData()
  //   setProducts(res)
  // }, [])

  const [ productModal, setProductModal ] = useState(false)


  const handleDelete = async id => {
    try {
      const req = await axios.delete(`${apiLink}/categorias/${id}`)
    } catch (error) {

      
    }
  }


  

  return (
    <>
    <div className="wrapper d-flex flex-column vh-100">
      <h1 className="title">Painel de Administração</h1>
      <div className="fill">
        <div className="buttons">
          <div className="Products">
            <button onClick={() => {setProductModal(true)}} className='admButton'>
             Adicionar produto
            </button>
          <AddProduct 
          show={productModal}
          onHide={() => setProductModal(false)}
          />
          </div>
          <div className='Categorias'>
            <button className='admButton'>
              Adicionar categoria
            </button>
        
          </div>        
        </div>    
        <div className='lists-wrapper d-flex'>
          <div className='products-list'>
            lista de produtos
          </div>
          <div className='categories-list'>
            lista de categorias
          </div>
        </div>    
      </div>
    </div>

      <Footer />
    </>
  );

}
