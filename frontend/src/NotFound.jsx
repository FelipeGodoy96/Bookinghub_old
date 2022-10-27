import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import LogomarcaIco from "./assets/icon/kingLionIco.png";
import Footer from "./components/Footer/Footer";

export default function NotFound() {
  return (<>
  <div className="d-flex flex-column justify-content-between align-items-center vh-100">  
  <div>header</div>
    <Container className="d-flex flex-column justify-content-center align-items-center ">
          <Card className="d-flex justify-content-center align-items-center" style={{width: "60rem", height: "30rem", background: "#fcd449" }}>
            <img width="60" height="auto" src={LogomarcaIco} />
            <h1 style={{ textAlign: "center" }}> Erro 404<br/>Não encontrado!</h1>
          </Card>
        </Container>
        <Footer/>
  </div>
    </>)
}
