/* eslint-disable react/no-array-index-key */
import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import axios from 'axios';
import Footer from './components/Footer/Footer';
import ProductCard from './components/ProductCard/ProductCard';
import './styles/Categoria.css';

export default function Categoria() {
  const { nomecategoria } = useParams();

  const navigate = useNavigate();
  const [anuncio, setAnuncio] = useState([{
    idCategoria: 1,
    id: 1,
    categoria: '',
    descricaoProduto: '',
    nome: '',
    descricao: '',
    foto: '',
    cidade: 'Cidade Teste',
  }]);

  function agruparAnuncios(anunciosRaw) {
    const ctx = [];
    anunciosRaw.forEach((category) => {
      category.produto.forEach((product) => {
        ctx.push({
          idCategoria: category.id,
          id: product.id,
          categoria: category.descricao,
          descricaoProduto: product.descricao,
          nome: product.nome,
          descricao: product.descricao,
          foto: category.imagem,
          cidade: 'Cidade Teste',
        });
      });
    });
    return ctx;
  }

  async function buscarTodosAnuncios() {
    try {
      const anuncioRaw = await axios.get(
        'http://52.53.186.118:8080/categoria_produtos',
      );
      const anunciosAgrupados = agruparAnuncios(anuncioRaw.data);
      const anunciosFiltrados = anunciosAgrupados.filter(
        (item) => item.categoria === nomecategoria,
      );
      if (anunciosFiltrados.length < 1) {
        throw new Error('Anúncio nao encontrado');
      }
      setAnuncio(anunciosFiltrados);
    } catch (err) {
      console.log(err);
      navigate('/404-NaoEncontrado');
    }
  }

  useEffect(() => {
    buscarTodosAnuncios();
  }, []);

  return (
    <>

      <Container
        fluid
        className="categoryPage d-flex flex-column justify-content-center align-items-center"
      >
        <h1 className="text-center">
          Filtro por categoria:
          {' '}
          {nomecategoria}
        </h1>
        <div className="d-flex flex-column flex-lg-row gap-3 flex-wrap justify-content-center align-items-center">
          {anuncio.map((m, index) => (
            <ProductCard data={m} key={index} />
          ))}
        </div>
      </Container>
      <Footer />

    </>
  );
}
