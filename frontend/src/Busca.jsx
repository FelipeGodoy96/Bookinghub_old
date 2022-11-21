import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Footer from './components/Footer/Footer';
import Searchbar from './components/Searchbar/Searchbar';
import { Link, useNavigate } from 'react-router-dom';
import ErroImg from './assets/img/erro-imagem.png'
import Button from 'react-bootstrap/esm/Button';

export default function Busca({ data }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex flex-column m-0 p-0 ">
        <section className="d-flex flex-column align-items-center text-center SearchBar">
          <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
          <Searchbar />
        </section>
        <Container  className="d-flex vh-100 p-0  justify-content-center flex-wrap flex-column align-content-end">
          <div className='cardContainer d-flex '>
            <div className='cardImg'>
              <img src={ErroImg} />
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
              <div className=" d-flex flex-column align-items-end">
                <div className="notaParceiro">8.0</div>
                <div className="classificacaoParceiro">Muito Bom</div>
                <Button className="m-2" onClick={() => navigate(`/anuncio/${data.id}`)}>
                  Ver Mais
                </Button>
              </div>

            </div>

          </div>

         
          <div className='cardContainer d-flex '>
            <div className='cardImg'>
              <img src={ErroImg} />
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
              <div className=" d-flex flex-column align-items-end">
                <div className="notaParceiro">8.0</div>
                <div className="classificacaoParceiro">Muito Bom</div>
                <Button className="m-2" onClick={() => navigate(`/anuncio/${data.id}`)}>
                  Ver Mais
                </Button>
              </div>

            </div>

          </div>

         

        </Container>

      </div>
      <Footer/>
    </>
  );
}
