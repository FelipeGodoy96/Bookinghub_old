import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBarDefault from "./components/Navbar/NavBarDefault"
import Login from "./Login";
import Cadastro from "./Cadastro"
import RedefinirSenha from "./RedefinirSenha"
import "./App.css";

export default function App(){
 
  return (
     <div className="App">
    <NavBarDefault/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/cadastro' element={<Cadastro />} />
      <Route path='/redefinirSenha' element={<RedefinirSenha />} />
    </Routes>
    </div>
  )
}

