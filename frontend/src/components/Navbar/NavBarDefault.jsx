import React, { useContext } from 'react';
import {
  Container, Navbar, Nav, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogomarcaIco from '../../assets/icon/booking_hub_logo_semfundo.png';
import LoginContext from '../../Contexts/LoginContext';

export default function NavBarDefault() {
  const { loginState } = useContext(LoginContext);
  const { isLoged } = loginState;

  return (
    <header className="NavBar">
      <Navbar expand="lg" className="NavStyle">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link d-flex align-items-center" to="/">
              <img width="60" height="auto" src={LogomarcaIco} alt="logomarcaIcone" id="logomarcaIcone" />
              <p className="textIcon" style={{ margin: '0' }}>
                Booking Hub
              </p>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" id="sandwichmenuNav" />

          {!isLoged && (
            <Navbar.Collapse className="notLogedNav" id="basic-navbar-nav">
              <Nav className="ms-auto gap-2">
                <Button>
                  <Link className="mx-auto nav-link" to="/login" id="loginButtonNavBar">
                    Iniciar Sessão
                  </Link>
                </Button>

                <Button>
                  <Link className="mx-auto nav-link" to="/cadastro" id="cadastroButtonNavBar">
                    Cadastre-se
                  </Link>
                </Button>
              </Nav>
            </Navbar.Collapse>
          )}
          {isLoged && (
            <Navbar.Collapse className="logedNav " id="basic-navbar-nav">
              <Nav className="ms-auto gap-2">
                <div className="mx-auto">
                  <img width="60" height="auto" src={LogomarcaIco} alt="logomarca" />
                </div>

                <div className="mx-auto nav-link" to="/login">
                  Olá,
                  <br />
                  Fulano
                </div>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </header>
  );
}
