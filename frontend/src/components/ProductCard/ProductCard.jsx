/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/ProductCard.css';
import erroImagem from '../../assets/img/erro-imagem.png';

export default function ProductCard({ data }) {
  const navigate = useNavigate();

  return (
    <Card className="anuncioCard d-flex flex-column m-2">
      <Card.Img
        variant="top"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = erroImagem;
        }}
        src={data.foto ? data.foto : 'Erro Imagem não encontrada'}
      />
      <Card.Body className="cardInfo d-flex flex-column">
        <div className="d-flex flex-row flex-column justify-content-between">
          <div className=" d-flex  justify-content-between align-items-center">
            <p>{data.categoria}</p>
            <div className=" d-flex flex-column align-items-end">
              <div className="notaParceiro">8.0</div>
              <div className="classificacaoParceiro">Muito Bom</div>
            </div>
          </div>
          <div>
            <h3 className="nomeAnunciante">{data.nome}</h3>
          </div>
        </div>
        <div className="mb-1 d-flex flex-row align-items-center justify-content-between">
          <div className="bi bi-geo-alt">

            {data.cidade}
          </div>

          <Link className="bi bi-pin-map" to="/">
            Ver no mapa
          </Link>
        </div>
        <p>
          {data.descricaoProduto?.substring(0, 180)}
          ....
        </p>

        <Button className="m-1" onClick={() => navigate(`/anuncio/${data.id}`)}>
          Ver Mais
        </Button>
      </Card.Body>
    </Card>
  );
}
