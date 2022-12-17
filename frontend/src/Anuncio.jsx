/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsArrowReturnLeft } from 'react-icons/bs';
import {
  MdPets,
  MdWifi,
  MdLiveTv,
  MdAcUnit,
  MdPool,
  MdCarRental,
  MdDining,
} from 'react-icons/md';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Footer from './components/Footer/Footer';
import CustomGallery from './components/CustomGallery/Gallery';
import Calendario from './components/Calendario/Calendario';
import Context from './Contexts/Context';

export default function Anuncio() {
  const { idAnuncio } = useParams();
  const { filters } = useContext(Context);
  const anuncioSelected = filters.getAnuncioByID(parseInt(idAnuncio, 10));
  const cidadeFiltrada = filters.getCidadeByID(anuncioSelected.idCidade);
  const categoriaFiltrada = filters.getCategoriaByID(anuncioSelected.idCategoria);

  const navigate = useNavigate();

  const images = anuncioSelected ? anuncioSelected.fotosAnuncio.map((m) => ({ original: m.url, thumbnail: m.url })) : [{ original: '', thumbnail: '' }];

  const [gallery, setGallery] = useState(false);
  const handleOpenGallery = () => {
    setGallery(true);
  };
  const handleCloseGallery = () => {
    setGallery(false);
  };

  useEffect(() => {
    if (!anuncioSelected) {
      navigate('/*');
    }
  }, []);

  if (!anuncioSelected) {
    return null;
  }

  return (
    <>
      <section className="subHeader">
        <Container className="d-flex flex-row justify-content-between align-items-center">
          <div className="informacoesAnunciante">
            <p>{categoriaFiltrada.descricaoCategoria}</p>
            <h3 className="nomeAnunciante">{anuncioSelected.nomeAnuncio}</h3>
          </div>
          <Link to="/">
            <BsArrowReturnLeft className="iconeSubHeader" />
          </Link>
        </Container>
      </section>

      <section className="mapSubHeader">
        <Container className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-column flex-lg-row align-items-center gap-lg-5">
            <div className="bi bi-geo-alt">{cidadeFiltrada.nomeCidade}</div>
            <Link className="bi bi-pin-map" to="/">
              Ver no mapa
            </Link>
          </div>

          <div className=" d-flex flex-column align-items-end">
            <div className="notaParceiro">8.0</div>
            <div className="classificacaoParceiro">Muito Bom</div>
          </div>
        </Container>
      </section>

      <section className="anuncioInfo d-flex flex-column">
        <Container className="d-flex flex-row justify-content-end socialShare">
          <div className="c-share">
            <input className="c-share__input" type="checkbox" id="checkbox" />
            <label className="c-share__toggler" htmlFor="checkbox">
              <span className="c-share__icon" />
            </label>

            <ul
              className="c-share_options shareOptions"
              data-title="Compartilhar"
            >
              <li className="bi bi-facebook">Facebook</li>
              <li className="bi bi-twitter">Twitter</li>
              <li className="bi bi-whatsapp">WhatsApp</li>
              <li className="bi bi-envelope">Email</li>
            </ul>
          </div>
        </Container>
        <Container className="galleryCentralizer">
          <Box
            className="gallery-wrapper"
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'none',
                lg: 'block',
                xl: 'block',
              },
              height: '25vw',
              // width: '100%',
              marginTop: '1rem',
              marginBottom: '1rem',
            }}
          >
            <div className="gallery-grid">
              <img
                className="gallery-main-image"
                alt="defaultImage"
                src={images[0]?.original}
              />
              <img
                className="gallery-grid-image"
                alt="Imagem da galeria"
                src={images[1]?.original}
              />
              <img
                className="gallery-grid-image"
                alt="Imagem da galeria"
                src={images[2]?.original}
              />
              <img
                className="gallery-grid-image"
                alt="Imagem da galeria"
                src={images[3]?.original}
              />
              <img
                className="gallery-grid-image"
                alt="Imagem da galeria"
                src={images[4]?.original}
              />
              <button
                className="gallery-button-showall"
                type="button"
                onClick={handleOpenGallery}
              >
                Ver mais
              </button>
              <Modal
                className="gallery-modal"
                sx={{ backgroundColor: 'rgb(56, 59, 88, 0.8)' }}
                open={gallery}
                onClose={handleCloseGallery}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                  }}
                >
                  <CustomGallery images={images} />
                </Box>
              </Modal>
            </div>
          </Box>
        </Container>
        <Box
          sx={{
            display: {
              xs: 'block',
              sm: 'block',
              md: 'block',
              lg: 'none',
              xl: 'none',
            },
          }}
        >
          <ImageGallery
            className="galeriaMobile"
            slideInterval={5000}
            autoPlay
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            items={images}
            showIndex
          />
        </Box>

        <Container className="descripition  d-flex flex-column justify-content-end">
          <h3>Informações sobre esta acomodação</h3>
          <p>{anuncioSelected.descricaoAnuncio}</p>
        </Container>

        <Container className="descripition d-flex flex-column justify-content-end">
          <h3 className="title3 ">O que esse lugar oferece?</h3>

          <Row>
            <Col xs={12} md={3}>
              <div className="cozinha hotelservice ">
                <MdDining className="m-lg-2" />
                Cozinha
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="estacionamento hotelservice ">
                <MdCarRental className="m-lg-2" />
                Estacionamento
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="piscina hotelservice">
                <MdPool className="m-lg-2" />
                Piscina
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="arCondicionado hotelservice ">
                <MdAcUnit className="m-lg-2" />
                Ar Condicionado
              </div>
            </Col>

            <Col xs={12} md={3}>
              <div className="tv hotelservice    ">
                <MdLiveTv className="m-lg-2" />
                Televisor
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="aceitaPets hotelservice   ">
                <MdPets className="m-lg-2" />
                Aceita Pets
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="wifi hotelservice    ">
                <MdWifi className="m-lg-2" />
                Wi-fi
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="descripition agendaDeReservas d-flex flex-column align-items-center">
          <h3>Datas disponíveis</h3>
          <div className="d-flex  flex-lg-row flex-column justify-content-center align-items-center">
            <Calendario />
            <Card className="confirmReserva w-75">
              <h6 className="p-3 text-center">
                Adicione as datas da sua estadia para obter a tarifa de hospedagem
              </h6>
              <Button id="fazerReservaButtonAnuncio" className="m-1 btn-1" onClick={() => navigate(`/anuncio/reserva/${idAnuncio}`, { state: anuncioSelected })}>
                Reservar agora
              </Button>

            </Card>
          </div>
        </Container>

        <Container className="descripition d-flex flex-column">
          <h3>O que você precisa saber ?</h3>
          <div className="row">
            <div className="col-lg col-md order-1">
              <h4>Regras da casa</h4>
              <p>Check-out:12:00</p>
              <p>Proibido Fumar</p>
              <p>Proibido Festas</p>
            </div>
            <div className="col-lg col-md order-2">
              <h4>Saúde e Segurança</h4>
              <p>Check-out:12:00</p>
              <p>Proibido Fumar</p>
              <p>Proibido Festas</p>
            </div>
            <div className="col-lg order-3">
              <h4>Politicas de Cancelamento</h4>
              <p>Check-out:12:00</p>
              <p>Proibido Fumar</p>
              <p>Proibido Festas</p>
            </div>
          </div>
        </Container>
      </section>
      {/* <Footer /> */}
    </>
  );
}
