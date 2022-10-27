import { Routes, Route,Navigate } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import NavBarDefault from "./components/Navbar/NavBarDefault";
import Login from "./Login";
import Cadastro from "./Cadastro";
import RedefinirSenha from "./RedefinirSenha";
import "./App.css";
import { LoginProvider } from "./Contexts/LoginContext";
import {ContextProvider} from "./Contexts/Context";



export default function App() {
  return (
    <div className="App">
      <ContextProvider>
      <LoginProvider>
        <NavBarDefault />
        <Routes>
          <Route path="/" element={<Home />} />
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