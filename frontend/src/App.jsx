import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Login from "./Login";
import "./App.css";

export default function App(){
 
  return (
     <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/login' element={<Login />} />
    </Routes>
    <Footer/>
    </div>
  )
}

