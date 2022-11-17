/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import React, { useContext, useEffect } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import Footer from './components/Footer/Footer';
import Context from './Contexts/Context';
import './styles/home.css';
import CategoriesCard from './components/CategoriesCard/CategoriesCard';
import ProductCard from './components/ProductCard/ProductCard';

export default function Home() {
  const { state, setState } = useContext(Context);
  useEffect(() => {
    async function getData() {
      const categoriasData = await axios.get(
        'http://52.53.186.118:8080/categorias',
      );
      const anunciosData = await axios.get(
        'http://52.53.186.118:8080/categoria_produtos',
      );
      setState({
        ...state,
        anuncios: anunciosData.data,
        categorias: categoriasData.data,
        categoriasProd: anunciosData.data,
      });
    }
    getData();
  }, []);

  const { anuncios, categorias } = state;

  function agruparAnuncios() {
    const ctx = [];
    anuncios.forEach((category) => {
      category.produto.forEach((product) => {
        ctx.push({
          idCategoria: category.id,
          id: product.id,
          categoria: category.descricao,
          descricaoProduto: product.descricao,
          nome: product.nome,
          foto: category.imagem,
          cidade: 'Cidade Teste',
        });
      });
    });
    return ctx;
  }

  useEffect(() => {
    agruparAnuncios();
  }, [state]);

  return (
    <>
      <section className="d-flex flex-column align-items-center text-center SearchBar">
        <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
        <Searchbar />
      </section>

      <Container
        fluid
        className="categories-container d-flex flex-column justify-content-center align-items-center pt-5"
      >
        <h1 className="text-center"> Buscar por categoria de acomodação</h1>
        <div className="d-flex flex-column flex-lg-row gap-3 flex-wrap justify-content-center align-items-center">
          {categorias.map((m, index) => (
            <CategoriesCard data={m} key={index} />
          ))}
        </div>
      </Container>

      <Container
        fluid
        className="anuncios-container d-flex flex-column justify-content-center align-items-center pt-5 pb-5"
      >
        <h1 className="text-center"> Recomendações</h1>
        <div className="d-flex flex-column flex-lg-row gap-3 flex-wrap justify-content-center align-items-center">
          {agruparAnuncios().map((m, index) => (
            <ProductCard data={m} key={index} />
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
}
