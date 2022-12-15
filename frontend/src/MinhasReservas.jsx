/* eslint-disable react/no-array-index-key */
import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import Noproduct from './components/LottieAnimations/Noproduct';
import MinhasReservasCard from './components/MinhasReservasCard/MinhasReservasCard';
import Context from './Contexts/Context';

export default function MinhasReservas() {
  const { state } = useContext(Context);
  const { reservas } = state;

  return (
    <>
      <div className="d-flex flex-column">
        <Container className="d-flex flex-column mb-5 mt-5   ">
          {reservas?.length === 0 ? <Noproduct /> : reservas?.map((m, index) => (
            <MinhasReservasCard data={m} key={index} />
          ))}
        </Container>
      </div>
      <Footer />
    </>
  );
}
