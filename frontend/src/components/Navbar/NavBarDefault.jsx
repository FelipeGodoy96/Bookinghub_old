
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogomarcaIco from "../../assets/icon/kingLionIco.svg";
import "./NavBarDefault.css";


export default function NavBarDefault() {
  return (
    <header>
      <Navbar expand="lg" className="NavStyle">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to="/">
              <img width="60" height="auto" src={LogomarcaIco} />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse className="notLogedNav" id="basic-navbar-nav">
            <Nav className="ms-auto gap-2">
              <Link className="mx-auto nav-link" to="/login">
                Fazer Login
              </Link>
              <Link className="mx-auto nav-link" to="/cadastro">
                Cadastre-se
              </Link>
              
            </Nav>
          </Navbar.Collapse>

          {/* <Navbar.Collapse className="logedNav " id="basic-navbar-nav">
            <Nav className="ms-auto gap-2">
              <div className="mx-auto">
              <img width="60" height="auto" src={LogomarcaIco} />
              </div>
             
              <div className="mx-auto nav-link" to="/login">
               Olá,<br/>
               Fulano
              </div>
            </Nav>
          </Navbar.Collapse> */}

        </Container>
      </Navbar>
    </header>
  );
}