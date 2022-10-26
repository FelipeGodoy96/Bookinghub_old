
import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogomarcaIco from "../../assets/icon/kingLionIco.svg";
import "../../styles/NavBarDefault.css";


export default function NavBarDefault() {
  return (
    <header className="NavBar">
      <Navbar expand="lg" className="NavStyle">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link d-flex align-items-center" to="/">
              <img width="60" height="auto" src={LogomarcaIco} />
              <p className="textIcon" style={{ margin: "0" }}>Lion's Rest</p> 
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse className="notLogedNav" id="basic-navbar-nav">
            <Nav className="ms-auto gap-2">
              <Button>
              <Link className="mx-auto nav-link" to="/login">
                Fazer Login
              </Link>
              </Button>
              
              <Button>
              <Link className="mx-auto nav-link" to="/cadastro">
                Cadastre-se
              </Link>
              </Button>
              
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="logedNav " id="basic-navbar-nav">
            <Nav className="ms-auto gap-2">
              <div className="mx-auto">
              <img width="60" height="auto" src={LogomarcaIco} />
              </div>
             
              <div className="mx-auto nav-link" to="/login">
               Olá,<br/>
               Fulano
              </div>
            </Nav>
          </Navbar.Collapse>  
        </Container>
      </Navbar>
    </header>
  );
}