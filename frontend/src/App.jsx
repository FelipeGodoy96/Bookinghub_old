import React from 'react';
import VLibras from '@djpfs/react-vlibras';
import NavBarDefault from './components/Navbar/NavBarDefault';
import { LoginProvider } from './Contexts/LoginContext';
import { ContextProvider } from './Contexts/Context';
import './styles/index.css';
import Routers from './Routers';

export default function App() {
  return (
    <div className="App">
      <VLibras forceOnload />
      <ContextProvider>
        <LoginProvider>
          <NavBarDefault />
          <Routers />
        </LoginProvider>
      </ContextProvider>
    </div>
  );
}
