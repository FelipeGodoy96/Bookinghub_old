import "../../styles/CategoriesCard.css";
import Card from "react-bootstrap/Card";
import erroImagem from "../../assets/img/erro-imagem.png";
export default function CategoriesCard({ data }) {
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
        </Card.Body>
      </Card>
    </>
  );
}
