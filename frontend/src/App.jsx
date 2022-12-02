import React from 'react';
import NavBarDefault from './components/Navbar/NavBarDefault';
import { LoginProvider } from './Contexts/LoginContext';
import { ContextProvider } from './Contexts/Context';

import './styles/index.css';
import Routers from './Routers';

export default function App() {
  return (
    <div className="App">
      <ContextProvider>
        <LoginProvider>
          <NavBarDefault />
          <Routers />
        </LoginProvider>
      </ContextProvider>
    </div>
  );
}
