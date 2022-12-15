
import React from 'react';
import Lottie from 'react-lottie';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import PageNot404Json from '../../assets/lottie/page-not-404.json'
function PageNot404() {
    const navigate = useNavigate();

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: PageNot404Json,
    };

  return (
    <div className="d-flex row text-center justify-content-center align-content-center mt-5">

    <Lottie options={defaultOptions} width={400} height={400} />
    <h2>O Endereço solicitado não foi encontrado!.</h2>
    <Button className="m-2 no-product-btn" onClick={() => navigate('/')}>
      Voltar para home
    </Button>

  </div>
  )
}

export default PageNot404