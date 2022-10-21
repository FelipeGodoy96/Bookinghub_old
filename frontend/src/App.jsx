import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBarDefault from "./components/Navbar/NavBarDefault"
import Footer from "./components/Footer/Footer"
import Login from "./Login";
import Cadastro from "./Cadastro"
import "./App.css";

export default function App(){
 
  return (
     <div className="App">
    <NavBarDefault/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/cadastro' element={<Cadastro />} />
    </Routes>
    <Footer/>
    </div>
  )
}

