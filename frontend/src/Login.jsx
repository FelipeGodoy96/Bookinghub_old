/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from './components/Footer/Footer';
import LoginContext from './Contexts/LoginContext';
import apiHandle from './services/apiHandle';

export default function Login() {
  const navigate = useNavigate();
  const { loginState, setLoginState } = useContext(LoginContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const [keepConected, setKeepConected] = useState(false);

  async function logon(emailProps, passwordProps) {
    const userData = await apiHandle
      .login({ username: emailProps, password: passwordProps });
    if (userData.token) {
      setLoginState({
        ...loginState, token: userData.token, user: userData, isLoged: true,
      });
      if (keepConected) {
        localStorage.setItem('sessionTokenJWT', `${userData.token}`);
        localStorage.setItem('localUser', JSON.stringify(userData));
      } else {
        sessionStorage.setItem('sessionTokenJWT', `${userData.token}`);
        sessionStorage.setItem('localUser', JSON.stringify(userData));
      }

      navigate('/');
    } else {
      setIsVisible(true);
    }
  }
  return (
    <>
      <div className="loginContainer d-flex flex-column m-0 vh-100">
        <Container fluid className="notLogedLogin d-flex vh-100">
          <div className="d-flex flex-column text-center login">
            <span className="content__title">Iniciar sessão</span>
            <div className="content__form">
              <Form
                onSubmit={(event) => {
                  event.preventDefault();
                  logon(email, password);
                }}
              >
                <Form.Group className="mb-3 text-start" controlId="formEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Insira seu e-mail"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="formPassword"
                >
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="********"
                  />
                </Form.Group>

                {isVisible ? (
                  <div className="loginFail mt-2 mb-3">
                    Infelizmente não foi possível iniciar a sessão.
                    Verique suas credenciais e tente novamente
                  </div>
                ) : null}

                <Button id="fazerLoginFormLogin" type="submit" variant="primary">
                  Entrar
                </Button>
              </Form>

              <div className="form-check mt-4 mb-4 p-0">
                <label className="form-check-label d-flex align-items-center justify-content-center" htmlFor="keepConected">
                  <input className="form-check-input m-0 p-0" type="checkbox" value="" id="keepConected" onChange={() => setKeepConected(!keepConected)} />
                  <h6 className="p-0 m-0 px-1">
                    Manter-me conectado
                  </h6>
                </label>
              </div>

              <div className="d-flex account justify-content-center">
                <p className="opsLogin">Não tem uma conta?⠀</p>
                <Link id="irParaCadastroFormLogin" to="/cadastro">Criar conta</Link>
              </div>

              <div className="d-flex account justify-content-center">
                <p className="opsLogin">Esqueceu sua senha?⠀</p>
                <Link id="irParaRedefinirSenha" to="/redefinirsenha">Redefinir senha</Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />

    </>
  );
}
