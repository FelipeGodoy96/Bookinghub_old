import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Footer from './components/Footer/Footer';
import LogomarcaIco from './assets/icon/booking_hub_logo_semfundo.png';
import Erroimg from './assets/img/erro-imagem.png';
import Cripto from './assets/img/criptomoeda.png';
import Visa from './assets/img/logotipo-visa.png'
import Pix from './assets/img/logo-pix.png'
import Boleto from './assets/img/Boleto-Bancario.png'
import American from './assets/img/american-credit-card.png'
import Blue from './assets/img/credit-card-blue.png'
export default function DetalhesReserva() {
  return (
    <>
      <Container className="vh-100">
        <div className="logoBooking  d-flex align-items-center">
          <img width="60" height="auto" src={LogomarcaIco} alt="logomarcaIcone" id="logomarcaIcone" />
          <p className="textIcon" style={{ margin: '0' }}>
            Booking Hub
          </p>
        </div>

        <Card className="cardContainer-1 p-0 m-0">

          <Card.Body>
            <div className="d-flex  flex-wrap flex-column flex-lg-row" style={{ borderBottom: '1px solid' }}>
              <Card.Img src={Erroimg} />

              <div className="textCard d-flex flex-column flex-wrap mx-2  " style={{ width: '25%' }}>
                <h6><b>Ibis Hotel</b></h6>
                <p>
                  <b>Cidade: </b>
                  Vila Sésamo
                </p>
                <p>
                  <b>Email: </b>
                  emailtal@tal.com
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

            <div className="politica-preco mt-5" style={{ borderBottom: '1px solid' }}>
              <div className="d-flex justify-content-between">
                <h2>Taxa de Serviço: </h2>
                <p>2%</p>
              </div>

              <div className="d-flex justify-content-between">
                <p>Preço: </p>
                <p>R$XX,XX </p>
              </div>

            </div>
            <div className="mt-4 politaPreco" style={{ borderBottom: '1px solid' }}>
              <h2>Preço</h2>
              <p>
                O preço final exibido é o valor que você vai pagar à acomodação.
                A Booking Hub não cobra dos hóspedes nenhuma taxa de reserva,
                administrativa ou de qualquer outro tipo.
                O emissor do seu cartão pode cobrar uma taxa de transação internacional.
              </p>
            </div>

            <div className="mt-4 politaPreco" style={{ borderBottom: '1px solid' }}>
              <h2>Informação sobre pagamentos</h2>
              <div className='d-flex flex-wrap'>
              <p>Esta propriedade aceita as seguintes formas de pagamento:  </p>
              <img className='mx-1'  src={Cripto} style={{width:'35px', height:'35px '}} />
              <img className='mx-1'  src={Visa} style={{width:'35px', height:'35px '}} />
              <img className='mx-1'  src={Pix} style={{width:'60px ', height:'35px '}} />
              <img className='mx-1'  src={Boleto} style={{width:'35px ', height:'35px '}} />
              <img className='mx-1'  src={American} style={{width:'35px ', height:'35px '}} />
              <img className='mx-1'  src={Blue} style={{width:'35px ', height:'35px '}} />
              </div>
             
            </div>

            <div className="mt-4 politaPreco">
              <h2>Outras informações</h2>
              <p>
                Por favor, observe que pedidos adicionais (por exemplo, cama extra)
                não estão incluídos neste valor.
                <br />
                Impostos adicionais ainda poderão ser cobrados
                pela acomodação se você não comparecer ou cancelar.
                <br />
                Por favor, lembre-se de ler as Informações importantes abaixo,
                pois podem conter dados importantes que não foram mencionados aqui.
              </p>
            </div>

          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
}
