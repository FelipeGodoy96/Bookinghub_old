/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate } from 'react-router-dom';
import erroImagem from '../../assets/img/erro-imagem.png';

export default function MinhasReservasCard() {
  const navigate = useNavigate();

  return (
    <Card className="cardContainerMinhasReservas d-flex flex-column flex-md-row flex-lg-row  align-items-center">
      <Card.Img
        variant="top"
        // onError={({ currentTarget }) => {
        //   currentTarget.onerror = null; // prevents looping
        //   currentTarget.src = erroImagem;
        // }}
        // src={data.fotosAnuncio[1].url ? data.fotosAnuncio[1].url : 'Erro Imagem não encontrada'}
        src={erroImagem}
      />
      <Card.Body className="cardTextContainerMinhasReservas d-flex flex-column flex-md-row flex-lg-row justify-content-lg-between justify-content-md-between">
        <div className="cardText">
          <h3 onClick={() => navigate('/')}>
            Nome do hotel
          </h3>
          <span>6 dez. 2019 - 8 dez. 2019</span>
          <p>
            Nome da Cidade
          </p>
        </div>
        <div className=" d-flex flex-column align-items-center">
          <Button className="m-2" id="goToAnuncioButtonSearchCard" onClick={() => navigate('/')}>
            Ver Detalhes da Reserva
          </Button>
        </div>
      </Card.Body>
    </Card>

  );
}
