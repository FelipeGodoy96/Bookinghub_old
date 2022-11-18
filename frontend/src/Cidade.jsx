import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Footer from './components/Footer/Footer';

export default function Cidade() {
  const [cidade, setCidade] = useState({});

  useEffect(() => {
    const FetchResp = async () => {
      const api = await fetch('http://52.53.186.118:8080/cidade_produtos');
      const data = await api.json();
      // console.log(data);
      const teste = data.find((prop) => prop.nome === 'Ouro Preto');
      setCidade(teste);
    };
    FetchResp();
  }, []);

  return (
    <div className="d-flex flex-column m-0 vh-100">
      <Container fluid className="d-flex vh-100">
        {cidade?.produto?.map((produto) => (
          <p>{produto.nome}</p>
        ))}
      </Container>
      <Footer />
    </div>
  );
}
