/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate } from 'react-router-dom';
import erroImagem from '../../assets/img/erro-imagem.png';

export default function SearchCard({ data }) {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/anuncio/${data.id}`)} className="cardContainer d-flex flex-column flex-md-row flex-lg-row  align-items-center">
      <Card.Img
        variant="top"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = erroImagem;
        }}
        src={data.fotosAnuncio[1].url ? data.fotosAnuncio[1].url : 'Erro Imagem não encontrada'}
      />
      <Card.Body className="cardTextContainer d-flex flex-column flex-md-row flex-lg-row justify-content-lg-between justify-content-md-between">
        <div className="cardText">
          <h3 onClick={() => navigate(`/anuncio/${data.id}`)}>
            {data.nome}
          </h3>

          <p>
            {data.cidade}
          </p>
          <Link className="bi bi-pin-map" to="/">
            Ver no mapa
          </Link>
          <div className="descriptionCard d-flex flex-column">

            <p className="p1">
              Quarto Duplo com Casa de Banho Partilhada
            </p>
            <p className="p2">
              2 camas (1 individual, 1 de casal)
            </p>
            <p className="p3">
              Pequeno-almoço incluído
            </p>
            <p className="p4">
              Restam apenas 2 quartos a este preço no nosso website
            </p>
          </div>

        </div>
        <div className=" d-flex flex-column align-items-center">
          <div className="notaParceiro mt-3">8.0</div>
          <div className="classificacaoParceiro mt-3">Muito Bom</div>
          <Button className="m-2" id="goToAnuncioButtonSearchCard" onClick={() => navigate(`/anuncio/${data.id}`)}>
            Ver Mais
          </Button>
        </div>
      </Card.Body>
    </Card>

  );
}
