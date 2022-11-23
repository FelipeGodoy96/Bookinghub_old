import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Footer from './components/Footer/Footer';
import Searchbar from './components/Searchbar/Searchbar';
import SearchCard from './components/Searchbar/SearchCard';

export default function Busca({ data }) {
  return (
    <>
      <div className="d-flex flex-column">
        <section className="d-flex flex-column align-items-center text-center SearchBar">
          <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
          <Searchbar />
        </section>
        <Container className="d-flex flex-column align-items-center">
          <SearchCard />
        </Container>

      </div>
      <Footer />
    </>
  );
}
