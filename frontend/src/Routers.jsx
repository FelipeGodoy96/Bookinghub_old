/* eslint-disable no-unused-expressions */
import React, { useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Buscar from './Buscar';
import Categoria from './Categoria';
import Home from './Home';
import Anuncio from './Anuncio';
import NotFound from './NotFound';
import Login from './Login';
import Cadastro from './Cadastro';
import Reserva from './Reserva';
import ConfirmacaoReserva from './ConfirmacaoReserva';
import RedefinirSenha from './RedefinirSenha';
import LoginContext from './Contexts/LoginContext';
import CriarProduto from './CriarProduto';
import ProductNotFound from './components/ProductNotFound/ProductNotFound'  //apenas para teste :>
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
      <Route path="/" element={<CriarProduto />} />
      <Route path="/anuncio/reserva/:id" element={<Reserva />} />
      <Route path="/categoria/:nomecategoria" element={<Categoria />} />
      <Route path="/anuncio/:id" element={<Anuncio />} />
      <Route path="/buscar/" element={<Buscar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/redefinir-senha" element={<RedefinirSenha />} />
      <Route path="/confirmacao-reserva" element={<ConfirmacaoReserva />} />
      <Route path="/404-NaoEncontrado" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404-NaoEncontrado" />} />
      <Route path='/productnotfound' element={<ProductNotFound/>}/>
    </Routes>
  );
}
