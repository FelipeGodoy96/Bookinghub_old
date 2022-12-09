import React, { useContext } from 'react';
import {
  Container, Navbar, Nav, Button,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import LogomarcaIco from '../../assets/icon/booking_hub_logo_semfundo.png';
import LoginContext, { DEFAULT_VALUE_LOGIN } from '../../Contexts/LoginContext';

export default function NavBarDefault() {
  const { loginState, setLoginState } = useContext(LoginContext);
  const { isLoged, user } = loginState;
  const navigate = useNavigate();
  const logout = () => {
    setLoginState(DEFAULT_VALUE_LOGIN);
    localStorage.removeItem('sessionTokenJWT');
    localStorage.removeItem('localUser');
    sessionStorage.removeItem('sessionTokenJWT');
    sessionStorage.removeItem('localUser');

    navigate('/');
  };

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
                <div className="mx-auto mt-2">
                  <BsFillPersonFill className="icon-person" />
                </div>

                <div className="mx-auto nav-link" to="/login">
                  Olá,
                  <br />
                  {user.nome}
                </div>
                <Button>
                  <Link className="mx-auto nav-link " to="/minhasreservas" id="meuspedidosButtonNavBar">
                    Meus Pedidos
                  </Link>
                </Button>
                <Button onClick={() => logout()}>
                  <p className="mx-auto nav-link " id="logOutButtonNavBar">
                    Desconectar Conta
                  </p>
                </Button>

              </Nav>

            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </header>
  );
}
