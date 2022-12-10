import React from 'react';
import Footer from './components/Footer/Footer';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LogomarcaIco from './assets/icon/booking_hub_logo_semfundo.png'
import Erroimg from './assets/img/erro-imagem.png';
export default function DetalhesReserva() {
  return (
    <>
        <Container>
         
          <div className='logoBooking  d-flex align-items-center'>
          <img width="60" height="auto" src={LogomarcaIco} alt="logomarcaIcone" id="logomarcaIcone"/>
              <p className="textIcon" style={{ margin: '0' }}>
                Booking Hub
              </p>
          </div>
          

        
               <Card className='cardContainer-1 p-2 d-flex flex-column flex-md-row flex-lg-row  align-items-center'>
                <Card.Img src={Erroimg}/>
                    
                    <Card.Body className='d-flex flex-column flex-md-row'>´
                      <div className='textCard d-flex flex-column'>
                      <h6><b>Ibis Hotel</b></h6>
                      <p><b>Endereço: </b>Vila Sésamo</p>
                      <p><b>Telefone: </b>(xxx) x xxxx-xxxx</p>
                      </div>
                      <div className='entradaSaida mx-auto '>
                      
                        <p className='mx-4 p-2'>6</p>

                      </div>
                    </Card.Body>
               </Card>
             
      
          </Container>
      <Footer />
    </>
  );
}
