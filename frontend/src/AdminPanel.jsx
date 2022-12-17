import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { BiPencil } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import UpdateProduct from './components/AdminPanelModals/UpdateProduct';
import Footer from './components/Footer/Footer';
import AddProduct from './components/AdminPanelModals/AddProduct';
import { apiLink } from './services/apiHandle';




export default function AdminPanel() {
  const [ products, setProducts ] = useState([])
useEffect(() => {
  const fetchData = async () => {
    try {
      await axios.get(`${apiLink}/produtos`)
      .then((response) => {
        setProducts(response.data)
      })
    } catch (error) {
      console.trace(error)
    }
  }
  fetchData()
}, [])
  const [productModal, setProductModal] = useState(false);
  const [updateProductModal, setUpdateProductModal] = useState(false);

  const handleDelete = async (id) => {
    try { 
      await axios.delete(`${apiLink}/produtos/${id}`)
      .then((res) => {
        if (res.status == 204) {
          setProducts(products.filter(product => {
            return product.id !== id
          }))
        }
      })
    } catch (error) {
      return null;
    }
  };

  return (
    <>
      <div className="wrapper d-flex flex-column vh-100">
        <h1 className="title">Painel de Administração</h1>
        <div className="fill">
          <div className="buttons">
            <div className="Products">
              <button onClick={() => { setProductModal(true); }} className="admButton">
                Adicionar produto
              </button>
              <AddProduct
                show={productModal}
                onHide={() => setProductModal(false)}
              />
            
              <UpdateProduct
                show={updateProductModal}
                onHide={() => setUpdateProductModal(undefined)}
                id={updateProductModal}
              />
            </div>
          {/* </div> */}

          <div className="products-list">
            <Table
              className="text-center"
              responsive
              striped
              bordered
              hover
              variant="dark"
            >
              <thead>
                <tr>
                  <th>id</th>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Editar</th>
                  <th>Deletar</th>
                </tr>
              </thead>
              <tbody>
                {products && products.map((element) => (
                  <tr key={element.id}>
                    <td>{element.id}</td>
                    <td>{element.nome}</td>
                    <td>{element.descricao}</td>
                    <td>
                      <Button onClick={() => {
                        setUpdateProductModal(element.id);
                      }}
                      >
                        <BiPencil />
                      </Button>
                    </td>
                    <td>
                      <Button
                        disabled
                        variant="danger"
                        onClick={() => {
                          handleDelete(element.id);
                        }}
                      >
                        <AiOutlineDelete />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          </div>

        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}
