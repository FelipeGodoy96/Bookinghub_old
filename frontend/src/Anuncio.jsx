import { useState, useEffect } from "react";
import axios from "axios";
import * as React from "react";
import { Container, Card, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsArrowReturnLeft } from "react-icons/bs";
import {
  MdPets,
  MdWifi,
  MdLiveTv,
  MdAcUnit,
  MdPool,
  MdCarRental,
  MdDining
} from "react-icons/md";
import { Link, useParams, useNavigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MyGallery from "./components/Gallery/Gallery";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CssBaseline from "@mui/material/CssBaseline";
import "./styles/Anuncio.css";
import Box from "@mui/material/Box";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { ptBR } from "date-fns/locale";

export default function Anuncio() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [anuncio, setAnuncio] = useState({
    idCategoria: 1,
    id: 1,
    categoria: "",
    descricaoProduto: "",
    nome: "",
    descricao: "",
    foto: "",
    cidade: "Cidade Teste"
  });

  async function buscarTodosAnuncios() {
    try {
      const anuncioRaw = await axios.get(
        "http://54.183.252.14:8080/categoria_produtos"
      );
      const anunciosAgrupados = agruparAnuncios(anuncioRaw.data);
      const anunciosFiltrados = anunciosAgrupados.filter(
        (item) => item.id.toString() === id
      );
      if (anunciosFiltrados.length < 1) {
        throw "Anúncio nao encontrado";
      }
      setAnuncio(anunciosFiltrados[0]);
    } catch (err) {
      navigate("/404-NaoEncontrado");
    }
  }

  function agruparAnuncios(anunciosRaw) {
    const ctx = [];
    anunciosRaw.forEach((category) => {
      category.produto.forEach((product) => {
        ctx.push({
          idCategoria: category.id,
          id: product.id,
          categoria: category.descricao,
          descricaoProduto: product.descricao,
          nome: product.nome,
          descricao: product.descricao,
          foto: category.imagem,
          cidade: "Cidade Teste"
        });
      });
    });
    return ctx;
  }

  useEffect(() => {
    buscarTodosAnuncios();
  }, []);
  // checar se existe um anuncio de id 99
  // navigate pra pagina 404 -> nao encontrado
  const images = [
    {
      original:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/-i---i-_%286288971321%29.jpg/1280px--i---i-_%286288971321%29.jpg",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/-i---i-_%286288971321%29.jpg/1280px--i---i-_%286288971321%29.jpg"
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/"
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/"
    }
  ];

  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
  });

  return (
    <>
      <section className="subHeader">
        <Container className="d-flex flex-row justify-content-between align-items-center">
          <div className="informacoesAnunciante">
            <p>{anuncio.categoria}</p>
            <h3 className="nomeAnunciante">{anuncio.nome}</h3>
          </div>
          <Link to="/">
            <BsArrowReturnLeft className="iconeSubHeader" />
          </Link>
        </Container>
      </section>

      <section className="mapSubHeader">
        <Container className="d-flex flex-row justify-content-between">
          <div className="bi bi-geo-alt p-1">
            Bairro
            <br />
            Ouro Preto
            <Link className="i bi-pin-map" to="/">
              Ver no mapa
            </Link>
          </div>

          <div className=" d-flex flex-column align-items-center">
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
              <span className="c-share__icon"></span>
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
        {/* <div className="galeriaDeImagens mt-3"> */}
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block"
            },
            paddingX: "15vw"
          }}
        >
          <MyGallery />
        </Box>
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "block",
              lg: "none",
              xl: "none"
            }
          }}
        >
          <ImageGallery
            className="galeriaMobile"
            slideInterval={5000}
            autoPlay={true}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            items={images}
            showIndex={true}
          />
        </Box>
        {/* </div> */}

        <Container className="descripition  d-flex flex-column justify-content-end">
          <h3>Informações sobre esta acomodação</h3>
          <p>
            {anuncio.descricao}
            {/* Está localizado a poucas quadras da Avenida Alvear, da Avenida
            Quintana, do Parque San Martín e do bairro da Recoleta. Nos
            arredores também existem vários locais de interesse, como a Rua
            Florida, o Centro Comercial Galerías Pacífico, a zona de Puerto
            Madero, a Plaza de Mayo e o Palácio Municipal. Nossos clientes
            afirmam que esta parte de Buenos Aires é a preferida, segundo
            avaliações independentes. O Hotel é um sofisticado hotel de 4
            estrelas que goza de uma localização tranquila, a poucos passos de
            prestigiadas galerias de arte, teatros, museus e áreas comerciais.
            Há também WiFi gratuito. A propriedade serve um café da manhã
            variado das 07:00 h às 10:30 h. */}
          </p>
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

          {/* <div className=" service d-flex flex-wrap justify-content-between align-content-center  ">
          <div className="cozinha hotelservice col-sm-3 "><MdDining className="m-lg-2"/>Cozinha</div>
          <div className="estacionamento hotelservice  col-sm-3"><MdCarRental className="m-lg-2"/>Estacionamento</div>
          <div className="piscina hotelservice col-sm-3"><MdPool className="m-lg-2"/>Piscina</div>
          <div className="arCondicionado hotelservice col-sm-3 "><MdAcUnit className="m-lg-2"/>Ar Condicionado</div>
          <div className="tv hotelservice  col-sm-3  "><MdLiveTv className="m-lg-2"/>Televisor</div>
          <div className="aceitaPets hotelservice  col-sm-3 "><MdPets className="m-lg-2"/>Aceita Pets</div>
          <div className="wifi hotelservice col-sm-3   "><MdWifi className="m-lg-2"/>Wi-fi</div>   
             
          </div> */}
        </Container>

        <Container className="agendaDeReservas d-flex flex-column">
          <h3>Datas disponíveis</h3>
          <Container className="d-flex  flex-lg-row flex-column justify-content-center align-items-center">
            <Card>
              <DateRange
                locale={ptBR}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={[date]}
                onChange={(ranges) => setDate(ranges.selection)}
              />
            </Card>
            <Card className="confirmReserva">
              <h6 className="p-3 ">
                Adicione as datas da sua estadia para obter a tarifa de
                hospedagem
              </h6>
              <Button onClick={() => console.log(date)}>Reservar agora</Button>
            </Card>
          </Container>
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
      <Footer />
    </>
  );
}
