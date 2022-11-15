/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

const DEFAULT_VALUE = {
  state: {
    isLoged: false,
    user: {
      email: '',
      password: '',
      role: '',
    },
  },
  setState: () => {}, // função de inicialização
};
const LoginContext = createContext(DEFAULT_VALUE);

function LoginProvider({ children }) {
  const [loginState, setLoginState] = useState(DEFAULT_VALUE.state);

  return (
    <LoginContext.Provider value={{ loginState, setLoginState }}>
      {children}
    </LoginContext.Provider>
  );
}

export { LoginProvider };
export default LoginContext;
