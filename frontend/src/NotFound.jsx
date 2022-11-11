import Container from "react-bootstrap/Container";
import LogomarcaIco from "./assets/icon/booking_hub_logo_semfundo.png";
import Footer from "./components/Footer/Footer";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <>
      <div className="d-flex flex-column justify-content-between align-items-center vh-100">
        <div>header</div>
        <Container
          fluid
          className="d-flex flex-column justify-content-center align-items-center  w-100 h-100"
        >
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img width="60" height="auto" src={LogomarcaIco} />
            <h1 style={{ textAlign: "center" }}>
              {" "}
              Erro 404
              <br />
              <br />O Endereço solicitado não foi encontrado!
            </h1>
          </div>
          <br />
          <Link className="nav-link d-flex align-items-center" to="/">
            <h3 className="bi bi-house">Retornar para a pagina inicial</h3>
          </Link>
        </Container>
        <Footer />
      </div>
    </>
  );
}
