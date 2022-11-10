import "../../styles/CategoriesCard.css";
import Card from "react-bootstrap/Card";
import erroImagem from "../../assets/img/erro-imagem.png";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
export default function CategoriesCard({ data }) {
  const navigate = useNavigate();


  return (
    <>
      <Card className="categoriesCard" style={{ width: "19rem" }}>
        <Card.Img
          variant="top"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = erroImagem;
          }}
          src={data.imagem}
        />
        <Card.Body>
          <Card.Title>{data.descricao}</Card.Title>
          <Card.Text>1.000 Hotéis</Card.Text>
          <Button
            className="m-1"
            onClick={() => navigate(`/categoria/${data.descricao}`)}
          >
            Ver tudo em {data.descricao}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
