import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import LogomarcaIco from './assets/icon/booking_hub_logo_semfundo.png';
import Footer from './components/Footer/Footer';
import PageNot404 from './components/LottieAnimations/PageNot404';

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center vh-100">
      <div>header</div>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center  w-100 h-100"
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
        
          <h1 style={{ textAlign: 'center' }}>
           <PageNot404/>
               
          </h1>
        </div>
        
    

      </Container>
{/* 
      <Footer /> */}
    </div>
  );
}
