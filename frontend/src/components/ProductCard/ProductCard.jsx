/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { Link, useNavigate } from 'react-router-dom';
import erroImagem from '../../assets/img/erro-imagem.png';
import Context from '../../Contexts/Context';

export default function ProductCard({ data }) {
  const navigate = useNavigate();
  const { filters } = useContext(Context);
  const cidadeFiltrada = filters.getCidadeByID(data.idCidade);
  const categoriaFiltrada = filters.getCategoriaByID(data.idCategoria);
  return (
    <Card className="anuncioCard d-flex flex-column">
      <Card.Img
        variant="top"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = erroImagem;
        }}
        src={data.fotosAnuncio[1].url ? data.fotosAnuncio[1].url : 'Erro Imagem não encontrada'}
      />
      <Card.Body className="cardInfo d-flex flex-column">
        <div className="d-flex flex-row flex-column justify-content-between">
          <div className=" d-flex  justify-content-between align-items-center">
            <p>{categoriaFiltrada.descricaoCategoria}</p>
            <div className=" d-flex flex-column align-items-end">
              <div className="notaParceiro">8.0</div>
              <div className="classificacaoParceiro">Muito Bom</div>
            </div>
          </div>
          <div>
            <h3 className="nomeAnunciante">{data.nomeAnuncio}</h3>
          </div>
        </div>

        <div className="verMapa mb-4 d-flex flex-row align-items-center justify-content-between">
          <div className="bi bi-geo-alt cidade">
            {cidadeFiltrada.nomeCidade}
          </div>
          <Link className="bi bi-pin-map" to="/">
            Ver no mapa
          </Link>
        </div>

        <p className="descricaoAnunciante">
          {data.descricaoAnuncio?.substring(0, 170)}
          ....
        </p>

        <Button className="m-1" onClick={() => navigate(`/anuncio/${data.idAnuncio}`)}>
          Ver Mais
        </Button>
      </Card.Body>
    </Card>
  );
}
