import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Footer from './components/Footer/Footer';
import LogomarcaIco from './assets/icon/booking_hub_logo_semfundo.png';
import Erroimg from './assets/img/erro-imagem.png';

export default function DetalhesReserva() {
  return (
    <>
      <Container>
        <div className="logoBooking  d-flex align-items-center">
          <img width="60" height="auto" src={LogomarcaIco} alt="logomarcaIcone" id="logomarcaIcone" />
          <p className="textIcon" style={{ margin: '0' }}>
            Booking Hub
          </p>
        </div>

        <Card className="cardContainer-1 p-2 d-flex flex-column flex-md-row flex-lg-row flex-md-column align-items-center ">
          <Card.Img src={Erroimg} />

          <Card.Body className="d-flex flex-column flex-wrap flex-md-row align-items-center">
            ´
            <div className="textCard d-flex flex-column flex-wrap  ">
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

            <div className="entradaSaida  ms-xl-auto d-flex flex-wrap p-1 align-items-center flex-column " style={{ width: 150 }}>
              <p className="p-title mb-2 ">Entrada</p>
              <p className=" mt-2 text-center">
                6
                <br />
                Dezembro
              </p>
              <p className=" mt-1 subtitle ">Sexta-feira</p>
              <p className=" mt-1 p-1 bi-clock horario">a partir das 09:00</p>
            </div>

            <div className="entradaSaida d-flex flex-wrap p-1 align-items-center flex-column" style={{ width: 150 }}>
              <p className="p-title mb-2">Saida</p>
              <p className=" mt-2 mx-auto text-center ">
                10
                <br />
                Dezembro
              </p>
              <p className=" mt-1 subtitle ">Sexta-feira</p>
              <p className=" mt-1 p-1 bi-clock horario">a partir das 15:00</p>
            </div>

            <div className=" unidade d-flex flex-wrap flex-row  ">
              <div className="d-flex flex-column">
                <p className="p-title mx-2">Unidade</p>
                <p className="  text-center ">1 /</p>
              </div>

              <div className="d-flex flex-column flex-row">
                <p className="  subtitle ">Diaria</p>
                <p className=" text-center ">2</p>
              </div>
            </div>
          </Card.Body>

        </Card>

      </Container>
      <Footer />
    </>
  );
}
