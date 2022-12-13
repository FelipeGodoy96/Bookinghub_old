/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import erroImagem from '../../assets/img/erro-imagem.png';
import Context from '../../Contexts/Context';

export default function MinhasReservasCard({ data }) {
  const navigate = useNavigate();
  const { filters } = useContext(Context);
  const anuncio = filters.getAnuncioByID(data.produtos.id);

  const cidade = filters.getCidadeByID(anuncio.idCidade);

  return (
    <Card className="cardContainerMinhasReservas d-flex flex-column flex-md-row flex-lg-row  align-items-center mt-5 mb-5">
      <Card.Img
        variant="top"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = erroImagem;
        }}
        src={anuncio.fotosAnuncio[1].url ? anuncio.fotosAnuncio[1].url : 'Erro Imagem não encontrada'}

      />
      <Card.Body className="cardTextContainerMinhasReservas d-flex flex-column flex-md-row flex-lg-row justify-content-lg-between justify-content-md-between">
        <div className="cardText">
          <h3 onClick={() => navigate('/')}>
            {anuncio.nomeAnuncio}
          </h3>
          <span>
            Check-in:
            {' '}
            {data.d_inic_reser}
            <br />
            <br />
            Check-out:
            {' '}
            {data.d_fin_reser}
          </span>
          <p className="mt-3">
            {cidade.nomeCidade}
          </p>
        </div>
        <div className=" d-flex flex-column align-items-center">
          <Button className="m-2" id="goToAnuncioButtonSearchCard" onClick={() => navigate(`/minhasreservas/detalhes/${data.id}`)}>
            Ver Detalhes da Reserva
          </Button>
        </div>
      </Card.Body>
    </Card>

  );
}
