import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cidade from './Cidade';
import Categoria from './Categoria';
import Home from './Home';
import Anuncio from './Anuncio';
import NotFound from './NotFound';
import Login from './Login';
import Cadastro from './Cadastro';
import Reserva from './Reserva';
import ConfirmacaoReserva from './ConfirmacaoReserva';
import RedefinirSenha from './RedefinirSenha';
import NavBarDefault from './components/Navbar/NavBarDefault';
import { LoginProvider } from './Contexts/LoginContext';
import { ContextProvider } from './Contexts/Context';
import './App.css';
import './styles/index.css';

export default function App() {
  return (
    <div className="App">
      <ContextProvider>
        <LoginProvider>
          <NavBarDefault />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/confirmacao-reserva" element={<ConfirmacaoReserva />} />
            <Route path="/reserva" element={<Reserva />} />
            <Route path="/anuncio/:id" element={<Anuncio />} />
            <Route path="/cidade/:nome" element={<Cidade />} />
            <Route path="/categoria/:nomecategoria" element={<Categoria />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/redefinirSenha" element={<RedefinirSenha />} />
            <Route path="/404-NaoEncontrado" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404-NaoEncontrado" />} />
          </Routes>
        </LoginProvider>
      </ContextProvider>
    </div>
  );
}
