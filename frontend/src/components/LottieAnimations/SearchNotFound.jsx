import React from 'react';
import Lottie from 'react-lottie';

import SearchNotFoundJson from '../../assets/lottie/search-not-found.json';

export default function SearchNotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SearchNotFoundJson,
  };

  return (
    <div className="d-flex row text-center justify-content-center align-content-center">
      <h2>
        Ops... Não encontramos nada
      </h2>
      <Lottie options={defaultOptions} width={250} height={250} />
      <h2>Tente em outra cidade, data ou categoria</h2>

    </div>
  );
}
