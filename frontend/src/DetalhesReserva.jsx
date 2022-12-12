import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Footer from './components/Footer/Footer';
import LogomarcaIco from './assets/icon/booking_hub_logo_semfundo.png';
import Erroimg from './assets/img/erro-imagem.png';

export default function DetalhesReserva() {
  return (
    <>
      <Container className='vh-100'>
        <div className="logoBooking  d-flex align-items-center">
          <img width="60" height="auto" src={LogomarcaIco} alt="logomarcaIcone" id="logomarcaIcone" />
          <p className="textIcon" style={{ margin: '0' }}>
            Booking Hub
          </p>
        </div>

        <Card className="cardContainer-1 p-0 m-0">

          <Card.Body className='' >


            <div className='d-flex  flex-wrap flex-column flex-lg-row' style={{ borderBottom: '1px solid' }}>
              <Card.Img src={Erroimg} />

              <div className="textCard d-flex flex-column flex-wrap mx-2  " style={{ width: '25%' }}>
                <h6><b>Ibis Hotel</b></h6>
                <p>
                  <b>Endereço: </b>
                  Vila Sésamo
                </p>
                <p>
                  <b>Telefone: </b>
                  (xxx) x xxxx-xxxx
                </p>
              </div>

              <div className="entradaSaida d-flex flex-wrap p-1 align-items-center flex-column " style={{ width: '25%' }}>
                <p className="p-title mb-2 ">Entrada</p>
                <p className=" mt-2 text-center">
                  6
                  <br />
                  Dezembro
                </p>
                <p className=" mt-1 subtitle ">Sexta-feira</p>
                <p className=" mt-1 p-1 bi-clock horario">a partir das 09:00</p>
              </div>

              <div className="entradaSaida d-flex flex-wrap p-1 align-items-center flex-column" style={{ width: '25%' }}>
                <p className="p-title mb-2">Saida</p>
                <p className=" mt-2 mx-auto text-center ">
                  10
                  <br />
                  Dezembro
                </p>
                <p className=" mt-1 subtitle ">Sexta-feira</p>
                <p className=" mt-1 p-1 bi-clock horario">a partir das 15:00</p>
              </div>

              <div className=" unidade d-flex flex-wrap flex-column mx-3">
                <div className="d-flex flex-column ">
                  <p className="p-title mt-2 mx-auto text-center">Quantidade de Reservas:</p>
                  <p className="text-center">1</p>
                </div>

                <div className="d-flex flex-column text-center">
                  <p className="p-title">Diárias:</p>
                  <p className="text-center">4</p>
                </div>

              </div>

            </div>
            <div className='politica-preco mt-5' style={{ borderBottom: '1px solid' }}>
              <div className='d-flex justify-content-between'>
              <h2>Taxa de Serviço: </h2>
              <p>2%</p>
              </div>

              <div className='d-flex justify-content-between'>
              <p>Preço: </p>
              <p>R$XX,XX </p>
              </div>
            </div>
          </Card.Body>

        </Card>
      </Container>
      <Footer />
    </>
  );
}
