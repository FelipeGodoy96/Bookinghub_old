import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Footer from './components/Footer/Footer';
import Searchbar from './components/Searchbar/Searchbar';
import { Link, useNavigate } from 'react-router-dom';
import ErroImg from './assets/img/erro-imagem.png'

export default function Busca({ data }) {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column m-0 vh-100">
      <section className="d-flex flex-column align-items-center text-center SearchBar">
        <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
        <Searchbar />
      </section>
      <Container fluid className="d-flex vh-100 p-5">
        <div className='cardContainer d-flex flex'>
          <div className='cardImg'>
            <img src={ErroImg}  />
          </div>
          <div className="cardTextContainer d-flex">
            <div className='cardText'>
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

              <p className='p1'>
              Quarto Duplo com Casa de Banho Partilhada
              </p>
              <p className="p2">
                2 camas (1 individual, 1 de casal)
              </p>
              <p className='p3'>
              Pequeno-almoço incluído

              </p>
              <p className='p4'>
              Restam apenas 2 quartos a este preço no nosso website
              </p>
          </div>
          </div>

         

          </div>

       

        </div>
      </Container>
      <Footer />
    </div>
  );
}
