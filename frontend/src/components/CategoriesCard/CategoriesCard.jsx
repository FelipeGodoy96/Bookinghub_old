import "../../styles/CategoriesCard.css";
import Card from "react-bootstrap/Card";

export default function CategoriesCard({data}) {
  return (
    <>
      <Card className="categoriesCard" style={{ width: "19rem" }}>
        <Card.Img variant="top" src={data.imagem} />
        <Card.Body>
          <Card.Title>{data.descricao}</Card.Title>
          <Card.Text>1.000 Hotéis</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
