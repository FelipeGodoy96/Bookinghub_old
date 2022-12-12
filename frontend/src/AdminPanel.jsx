import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import axios from 'axios';

import Table from 'react-bootstrap/Table';
import { BiPencil } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import UpdateProduct from './components/AdminPanelModals/UpdateProduct';
import Footer from './components/Footer/Footer';
import AddProduct from './components/AdminPanelModals/AddProduct';
import { apiLink } from './services/apiHandle';

export default function AdminPanel() {
  // const apiLink = process.env.NODE_ENV === 'development' ? 'http://13.57.207.104:8080' : '';
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const req = await fetch(`${apiLink}/produtos`);
      const res = await req.json();
      setProducts(res);
    };
    getData();
  }, []);

  const [productModal, setProductModal] = useState(false);
  const [updateProductModal, setUpdateProductModal] = useState(false);

  const handleDelete = async (id) => {
    try {
      const req = await axios.delete(`${apiLink}/produtos/${id}`);
    } catch (error) {

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
            <div className="Categorias">
              <button className="admButton">
                Adicionar categoria
              </button>

            </div>
          </div>

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

      <Footer />
    </>
  );
}
