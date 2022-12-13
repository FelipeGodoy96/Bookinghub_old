/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { Link, useNavigate } from 'react-router-dom';
import erroImagem from '../../assets/img/erro-imagem.png';
import Context from '../../Contexts/Context';
import apiHandle from '../../services/apiHandle';
import ModalReservaConfirmada from '../Modal/ModalReservaConfirmada';

export default function ProductCardReserva({ dadosDoAnuncioReserva, dadosDaReserva }) {
  const navigate = useNavigate();
  const { filters } = useContext(Context);
  const [isVisibleModalConfirmacaoReserva, setIsVisibleModalConfirmacaoReserva] = useState(false);
  const [mensagemConfirmacaoReserva, setMensagemConfirmacaoReserva] = useState({});

  const cidadeFiltrada = filters.getCidadeByID(dadosDoAnuncioReserva.idCidade);
  const categoriaFiltrada = filters.getCategoriaByID(dadosDoAnuncioReserva.idCategoria);

  const salvarReserva = async () => {
    const { reservaData } = await apiHandle.fazerReserva(dadosDaReserva);
    if (reservaData) {
      setMensagemConfirmacaoReserva({
        title: 'Muito Obrigado!',
        description: 'Sua reserva foi confirmada com sucesso!',
      });
      setIsVisibleModalConfirmacaoReserva(true);
    } else {
      setMensagemConfirmacaoReserva({
        title: 'Ops, algo deu errado',
        description: 'Infelizmente não foi possivel realizar sua reserva',
      });
      setIsVisibleModalConfirmacaoReserva(true);
    }
  };

  return (
    <Card className="anuncioCardReserva d-flex flex-column m-2">
      <Card.Img
        variant="top"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = erroImagem;
        }}
        src={dadosDoAnuncioReserva.fotosAnuncio[1].url ? dadosDoAnuncioReserva.fotosAnuncio[1].url : 'Erro Imagem não encontrada'}
      />

      <Card.Body className="cardInfo d-flex flex-column">
        <div className="d-flex flex-row flex-column justify-content-between">
          <div className="d-flex justify-content-between align-items-center">
            <p>
              {categoriaFiltrada.nomeCategoria}
            </p>
          </div>
          <div>
            <h3 className="nomeAnuncianteReserva">
              {dadosDoAnuncioReserva.nomeAnuncio}
            </h3>
          </div>
        </div>
        <hr className="solid" />
        <div className="verMapa mb-4 d-flex flex-row align-items-center justify-content-between">
          <div className="bi bi-geo-alt">
            {cidadeFiltrada.nomeCidade}
          </div>

          <Link className="bi bi-pin-map" to="/">
            Ver no mapa
          </Link>
        </div>
        <div className="d-flex flwx-row justify-content-between">
          <Card.Title>Check-in</Card.Title>
          <Card.Text>{dadosDaReserva.d_inic_reser.toISOString().substring(0, 10)}</Card.Text>
        </div>
        <div className="d-flex flwx-row justify-content-between">
          <Card.Title>Horário do check-in</Card.Title>
          <Card.Text>
            12:00 PM

          </Card.Text>
        </div>

        <div className="d-flex flwx-row justify-content-between">
          <Card.Title>Check-out</Card.Title>
          <Card.Text>{dadosDaReserva.d_fin_reser.toISOString().substring(0, 10)}</Card.Text>
        </div>

        <div className="d-flex flwx-row justify-content-between">
          <Card.Title>Valor Final</Card.Title>
          <Card.Text>R$ XXX.XX</Card.Text>
        </div>

        <Button className="m-1" onClick={() => salvarReserva()}>
          Confirmar Reserva
        </Button>

      </Card.Body>
      <ModalReservaConfirmada
        visible={isVisibleModalConfirmacaoReserva}
        mensagem={mensagemConfirmacaoReserva}
      />
    </Card>
  );
}
