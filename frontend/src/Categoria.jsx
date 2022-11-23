/* eslint-disable react/no-array-index-key */
import { useParams } from 'react-router-dom';
import React from 'react';
import Container from 'react-bootstrap/esm/Container';

import Footer from './components/Footer/Footer';
import ProductCard from './components/ProductCard/ProductCard';
import Context from './Contexts/Context';
import Searchbar from './components/Searchbar/Searchbar';

export default function Categoria() {
  const { nomecategoria } = useParams();
  const { state } = React.useContext(Context);
  const { anuncios } = state;

  const categoriaSelected = anuncios.filter((f) => f?.categoria === nomecategoria);

  return (
    <div className="d-flex flex-column m-0">
      <section className="d-flex flex-column align-items-center text-center SearchBar">
        <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
        <Searchbar />
      </section>
      <Container
        fluid
        className="categoryPage d-flex flex-column justify-content-center align-items-center "
      >
        <h1 className="text-center">
          Todos acomodações em :  &nbsp;
          {nomecategoria}
        </h1>
        <div className="d-flex flex-column flex-lg-row gap-3 flex-wrap justify-content-center align-items-center">
          {categoriaSelected?.map((m, index) => (
            <ProductCard data={m} key={index} />
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
