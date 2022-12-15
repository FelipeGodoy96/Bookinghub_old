import React from 'react';
import Lottie from 'react-lottie';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import NoproductJson from '../../assets/lottie/no-product.json';

export default function Noproduct() {
  const navigate = useNavigate();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: NoproductJson,
  };

  return (
    <div className="d-flex row text-center justify-content-center align-content-center mt-5">

      <Lottie options={defaultOptions} width={250} height={250} />
      <h2>Você ainda não possui nenhuma reserva.</h2>
      <Button className="m-2 no-product-btn" onClick={() => navigate('/')}>
        Voltar para home
      </Button>

    </div>
  );
}
