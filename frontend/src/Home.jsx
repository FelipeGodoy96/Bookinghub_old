import Container from "react-bootstrap/Container";
import Searchbar from './components/Searchbar/Searchbar'

export default function Home() {
  return (
    <>
      <Container fluid className="d-flex flex-column align-items-center text-center">
        <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
       <Searchbar/>   
        
      </Container>
    </>
  );
}
