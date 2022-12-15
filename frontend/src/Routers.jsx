/* eslint-disable no-unused-expressions */
import React, { useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Buscar from './Buscar';
import Home from './Home';
import Anuncio from './Anuncio';
import NotFound from './NotFound';
import Login from './Login';
import Cadastro from './Cadastro';
import FazerReserva from './FazerReserva';
import RedefinirSenha from './RedefinirSenha';
import LoginContext from './Contexts/LoginContext';
import AdminPanel from './AdminPanel';
import MinhasReservas from './MinhasReservas';
import DetalhesReserva from './DetalhesReserva';

export default function Routers() {
  const { loginState, setLoginState } = useContext(LoginContext);

  useEffect(() => {
    const tokenFindLocal = localStorage.getItem('sessionTokenJWT');
    const userFindLocal = localStorage.getItem('localUser');
    const tokenFindSession = sessionStorage.getItem('sessionTokenJWT');
    const userFindSession = sessionStorage.getItem('localUser');

    if (tokenFindLocal) {
      setLoginState({
        ...loginState, token: tokenFindLocal, user: JSON.parse(userFindLocal), isLoged: true,
      });
    } else if (tokenFindSession) {
      setLoginState({
        ...loginState, token: tokenFindSession, user: JSON.parse(userFindSession), isLoged: true,
      });
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* {loginState?.isLoged &&
        <Route path="/anuncio/reserva/:id" element={<FazerReserva />} />} */}

      <Route path="/minhasreservas" element={<MinhasReservas />} />
      <Route path="/anuncio/reserva/:idAnuncio" element={<FazerReserva />} />
      <Route path="/minhasreservas/detalhes/:id" element={<DetalhesReserva />} />
      <Route path="/anuncio/:idAnuncio" element={<Anuncio />} />
      <Route path="/buscar/:parametro" element={<Buscar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/redefinirsenha" element={<RedefinirSenha />} />
      <Route path="/404naoencontrado" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404naoencontrado" />} />
    </Routes>
  );
}
