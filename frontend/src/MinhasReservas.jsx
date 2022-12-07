import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import MinhasReservasCard from './components/MinhasReservasCard/MinhasReservasCard';

export default function MinhasReservas() {
  return (
    <>
      <div className="d-flex flex-column">
        <Container className="d-flex flex-column mt-5 mb-5 ">
          <MinhasReservasCard />
        </Container>
      </div>
      <Footer />
    </>
  );
}
