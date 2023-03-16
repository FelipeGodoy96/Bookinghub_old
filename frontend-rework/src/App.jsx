import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home";
import { Login }  from "./pages/Login";
import GlobalStyles from './styles'
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import { useState } from 'react'

export default function App() {
    const [ login, setLogin ] = useState(false)
    const [ sidebar, setSidebar ] = useState(false)
    return (
        <>
        <GlobalStyles />
        <Header sidebar={sidebar} setSidebar={setSidebar} login={login} setLogin={setLogin} />
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} login={login} setLogin={setLogin} />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        </>
    )
}