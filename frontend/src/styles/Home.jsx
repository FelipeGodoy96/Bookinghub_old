import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Searchbar from "./components/Searchbar/Searchbar";
import NavSpace from "./components/Navbar/NavSpace"
import HotelCapa from "./assets/img/HotelCapa.jpg";
import HostelCapa from "./assets/img/HostelCapa.jpg";
import HotelFazendaCapa from "./assets/img/HotelFazendaCapa.jpg";
import ApartamentosCapa from "./assets/img/ApartamentosCapa.jpg";
import Footer from "./components/Footer/Footer"
import { Link } from "react-router-dom";
import './styles/home.css'
export default function Home() {
  return (
    <>
    <NavSpace/>
      <Container
        fluid
        className="d-flex flex-column align-items-center text-center"
      >
        <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
        <Searchbar />
      </Container>

      <Container
        fluid
        className="categories-container d-flex flex-column justify-content-center align-items-center pt-5"
      >
        <h1 className="text-center"> Buscar por categoria de acomodação</h1>
        <div className="d-flex flex-column flex-lg-row gap-3 flex-wrap justify-content-center align-items-center">
          <Card style={{ width: "19rem" }}>
            <Card.Img variant="top" src={HotelCapa} />
            <Card.Body>
              <Card.Title>Hotéis</Card.Title>
              <Card.Text>1.000 Hotéis</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "19rem" }}>
            <Card.Img variant="top" src={HotelFazendaCapa} />
            <Card.Body>
              <Card.Title>Hotéis Fazenda</Card.Title>
              <Card.Text>1.000 Hosteis</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "19rem" }}>
            <Card.Img variant="top" src={HostelCapa} />
            <Card.Body>
              <Card.Title>Hostel</Card.Title>
              <Card.Text>1.000 Hosteis</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "19rem" }}>
            <Card.Img variant="top" src={ApartamentosCapa} />
            <Card.Body>
              <Card.Title>Apartamentos</Card.Title>
              <Card.Text>1.000 Apartamentos</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>

      <Container
        fluid
        className="anuncios-container d-flex flex-column justify-content-center align-items-center pt-5 pb-5"
      >
        <h1 className="text-center"> Recomendações</h1>
        <Card className="anuncioCard w-100 d-flex flex-column">
          <Card.Img variant="top" src={HotelFazendaCapa} />
          <Card.Body className="cardInfo d-flex flex-column">
            <div className="d-flex flex-row justify-content-between">
              <div>
                <p>Categoria </p>
                <h3>Nome do hotel</h3>
              </div>
              <div className=" d-flex flex-column align-items-center">
                <div className="notaParceiro">8.0</div>
                <div className="classificacaoParceiro">Muito Bom</div>
              </div>
            </div>
            <div className="bi bi-geo-alt mb-1">
              Centro<br/>
              Ouro Preto - MG - <Link to="/">MOSTRAR NO MAPA</Link>
            </div>
            <div>
              No coração de San Telmo, desfrute de uma pousada inspirada nas
              paixões de Buenos Aires. Com 2 piscinas impressionantes, uma no
              terraço e outra ao ar livre; quartos privados (alguns <Link to="/">...mais</Link>
            </div>

            <Button className="m-1">Ver Mais</Button>
          </Card.Body>
        </Card>
      </Container>
      <Footer/>
    </>
  );
}
