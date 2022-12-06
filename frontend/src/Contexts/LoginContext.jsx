/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

const DEFAULT_VALUE_LOGIN = {
  state: {
    isLoged: false,
    user: {
      id: 0,
      username: 'teste',
      nome: 'teste',
      sobrenome: 'teste',
      roles: [],
      type: [],
      produto: [],
    },
    token: '',
  },
  setState: () => {}, // função de inicialização
};
const LoginContext = createContext(DEFAULT_VALUE_LOGIN);

function LoginProvider({ children }) {
  const [loginState, setLoginState] = useState(DEFAULT_VALUE_LOGIN.state);

  return (
    <LoginContext.Provider value={{ loginState, setLoginState }}>
      {children}
    </LoginContext.Provider>
  );
}

export { LoginProvider, DEFAULT_VALUE_LOGIN };
export default LoginContext;
