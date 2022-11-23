import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate } from 'react-router-dom';
import ErroImg from '../../assets/img/erro-imagem.png';

export default function SearchCard() {
  const navigate = useNavigate();

  return (
    <div className="cardContainer d-flex ">
      <div className="cardImg">
        <img src={ErroImg} alt="Capa Hotel" />
      </div>
      <div className="cardTextContainer d-flex">
        <div className="cardText">
          <Link to="/">
            <h3>
              Hotel Solar de Maria
            </h3>
          </Link>
          <p>
            Ouro Preto
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
        <div className=" d-flex flex-column align-items-end">
          <div className="notaParceiro">8.0</div>
          <div className="classificacaoParceiro">Muito Bom</div>
          <Button className="m-2" onClick={() => navigate(`/anuncio/${data.id}`)}>
            Ver Mais
          </Button>
        </div>

      </div>
    </div>

  );
}
