import { Routes, Route,Navigate } from "react-router-dom";
import Home from "./Home";
import Anuncio from "./Anuncio";
import NotFound from "./NotFound";
import NavBarDefault from "./components/Navbar/NavBarDefault";
import Login from "./Login";
import Cadastro from "./Cadastro";
import RedefinirSenha from "./RedefinirSenha";
import "./App.css";
import { LoginProvider } from "./Contexts/LoginContext";
import {ContextProvider} from "./Contexts/Context";
import { useState, useEffect } from 'react'




export default function App() {
  const [ data, setData ] = useState([])
  useEffect(() => {   
    const fetchData = async () => {
      try {
        const request = await fetch('54.183.252.14:8080/imagens')
        // const response = await request.json()
        setData(request)
        console.log(request)
      } catch (error) {
        console.error(error)
        console.log(error.message)
      }
    }
    fetchData()
  }, [])
  
  return (
    <div className="App">
      <ContextProvider>
      <LoginProvider>
        <NavBarDefault />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anuncio" element={<Anuncio/>} />
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
