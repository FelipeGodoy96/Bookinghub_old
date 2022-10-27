import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import { Link } from "react-router-dom";
import "../../styles/ProductCard.css";

export default function ProductCard({ data }) {
  return (
    <>
      <Card className="anuncioCard d-flex flex-column m-2">
        <Card.Img variant="top" src={data.img} />
        <Card.Body className="cardInfo d-flex flex-column">
          <div className="d-flex flex-row flex-column justify-content-between">
            <div className=" d-flex  justify-content-between align-items-center">
              <p>{data.category.descricao}</p>
              <div className=" d-flex flex-column align-items-center">
                <div className="notaParceiro">8.0</div>
                <div className="classificacaoParceiro">Muito Bom</div>
              </div>
            </div>
            <div>
              <h3 className="nomeAnunciante">{data.title}</h3>
            </div>
          </div>
          <div className="bi bi-geo-alt mb-1">
            Bairro
            <br />
            {data.location}{" "}
            <Link className="i bi-pin-map" to="/">
              Ver no mapa
            </Link>
          </div>
          <p>
            {data.description.substring(0, 180)}
            ....
          </p>

          <Button className="m-1">Ver Mais</Button>
        </Card.Body>
      </Card>
    </>
  );
}
