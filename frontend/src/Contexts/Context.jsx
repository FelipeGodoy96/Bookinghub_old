/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import apiHandle from '../services/apiHandle';

const { categorias, cidades, anuncios } = apiHandle;
const filtroParametros = {
  categoriaFilter: '',
  cidadeFilter: '',
};
const DEFAULT_VALUE = {
  state: {
    categorias, cidades, anuncios, filtroParametros,
  },
  setState: () => {}, // função de inicialização
};

const Context = createContext(DEFAULT_VALUE);

function ContextProvider({ children }) {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
}

export { ContextProvider };
export default Context;
