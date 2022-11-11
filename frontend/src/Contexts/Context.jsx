import React, { createContext, useState, useEffect} from "react";

const DEFAULT_VALUE = {
  state: {categorias:[], anuncios:[]},
  setState: () => {} //função de inicialização
};
const Context = createContext(DEFAULT_VALUE);

const ContextProvider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};

export { ContextProvider };
export default Context;
