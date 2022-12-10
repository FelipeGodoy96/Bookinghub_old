import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import Noproduct from './components/LottieAnimations/Noproduct';
import MinhasReservasCard from './components/MinhasReservasCard/MinhasReservasCard';

export default function MinhasReservas() {
  return (
    <>
      <div className="d-flex flex-column">
        <Container className="d-flex flex-column mb-5 mt-5   ">
          <Noproduct/>
          <MinhasReservasCard />
        </Container>
      </div>
      <Footer />
    </>
  );
}
