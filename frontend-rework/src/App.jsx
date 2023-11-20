import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home";
import { Login }  from "./pages/Login";
import GlobalStyles from './styles'
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import { useState } from 'react'
import { Register } from "./pages/Register";
import { ForgotPw } from "./pages/ForgotPw";
import { LogonStateContextProvider } from "./hooks/contexts/LogonStateContext";

export default function App() {
    const [ sidebar, setSidebar ] = useState(false)
    return (
        <>
        <LogonStateContextProvider>
        <GlobalStyles />
        <Header sidebar={sidebar} setSidebar={setSidebar} />
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/forgotpw" element={<ForgotPw/>} />
            </Routes>
        </div>        
        <Footer />
        </LogonStateContextProvider>
        </>
    )
}