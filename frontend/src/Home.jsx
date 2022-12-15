/* eslint-disable react/no-array-index-key */
import Container from 'react-bootstrap/Container';
import React, { useContext } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import Footer from './components/Footer/Footer';
import Context from './Contexts/Context';
import CategoriesCard from './components/CategoriesCard/CategoriesCard';
import ProductCard from './components/ProductCard/ProductCard';

export default function Home() {
  const { state } = useContext(Context);
  const { anuncios, categorias } = state;

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
          {categorias?.map((m, index) => (
            <CategoriesCard data={m} key={index} />
          ))}
        </div>
      </Container>

      <Container
        fluid
        className="anuncios-container d-flex flex-column justify-content-center align-items-center pt-5 pb-5"
      >
        <h1 className="text-center mt-3 mb-5 p-4"> Recomendações</h1>
        <div className="d-flex flex-column flex-lg-row gap-3 flex-wrap justify-content-center align-items-center">
          {anuncios.map((m, index) => (
            <ProductCard data={m} key={index} />
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
}
