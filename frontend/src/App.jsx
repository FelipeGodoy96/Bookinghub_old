import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import "./App.css";

export default function App(){
 
  return (
     <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    <Footer/>
    </div>
  )
}

