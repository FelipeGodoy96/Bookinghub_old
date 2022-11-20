import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Footer from './components/Footer/Footer';
import Searchbar from './components/Searchbar/Searchbar';

export default function Busca() {
  return (
    <div className="d-flex flex-column m-0 vh-100">
      <section className="d-flex flex-column align-items-center text-center SearchBar">
        <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
        <Searchbar />
      </section>
      <Container fluid className="d-flex vh-100">
        teste
      </Container>
      <Footer />
    </div>
  );
}
