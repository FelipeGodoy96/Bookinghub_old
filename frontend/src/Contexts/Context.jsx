/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import apiHandle from '../services/apiHandle';

const {
  getCategorias, getCidades, getAnuncios, getReservasUsuario,
} = apiHandle;
const filtroParametros = {
  categoriaFilter: '',
  cidadeFilter: '',
};

const DEFAULT_VALUE = {
  state: {
    anuncios: await getAnuncios(),
    cidades: await getCidades(),
    categorias: await getCategorias(),
    reservas: await getReservasUsuario(),
    filtroParametros,
  },
  setState: () => {}, // função de inicialização
};

const Context = createContext(DEFAULT_VALUE);

function ContextProvider({ children }) {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  const getCidadeByID = (id) => state.cidades.find((f) => f.idCidade === id);
  const getCategoriaByID = (id) => state.categorias.find((f) => f.idCategoria === id);
  const getAnuncioByID = (id) => state.anuncios.find((f) => f.idAnuncio === id);
  const getReservaByID = (id) => state.reservas.find((f) => f.id === id);

  return (
    <Context.Provider value={{
      state,
      setState,
      filters: {
        getCidadeByID,
        getCategoriaByID,
        getAnuncioByID,
        getReservaByID,
      },
    }}
    >
      {children}

    </Context.Provider>
  );
}

export { ContextProvider };
export default Context;
