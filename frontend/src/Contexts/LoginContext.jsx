import React, { createContext, useState } from "react";

// const DEFAULT_VALUE = {
//   state:JSON.parse(localStorage.getItem('meuLoginToken')) || [],
//   setState: () => {}, //função de inicialização
// };

const DEFAULT_VALUE = {
  state:{
    isLoged:false,
    user:{
      email:'',
      password:'',
      role:''
    }
  },
  setState: () => {}, //função de inicialização
};
const LoginContext = createContext(DEFAULT_VALUE);

const LoginProvider = ({children}) => {
  const [loginState, setLoginState] = useState(DEFAULT_VALUE.state);
  


  return (
    <LoginContext.Provider value={{loginState,setLoginState}}> 
    {children}
    </LoginContext.Provider>
  )
}

export { LoginProvider };
export default LoginContext;