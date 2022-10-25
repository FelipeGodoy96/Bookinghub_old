import React, { createContext, useState } from "react";
import { useEffect } from "react";

const DEFAULT_VALUE = {
  state:JSON.parse(localStorage.getItem('meuLoginToken')) || [],
  setState: () => {}, //função de inicialização
};
const LoginContext = createContext(DEFAULT_VALUE);
const LoginProvider = ({children}) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  


  return (
    <LoginContext.Provider value={{loginState,setLoginState}}> 
    {children}
    </LoginContext.Provider>
  )
}

export { LoginProvider };
export default LoginContext;