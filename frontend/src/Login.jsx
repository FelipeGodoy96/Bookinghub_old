/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Footer from './components/Footer/Footer';
import LoginContext from './Contexts/LoginContext';
import apiHandle from './services/apiHandle';

export default function Login() {
  const { loginState, setLoginState } = useContext(LoginContext);
  const { token, user } = loginState;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState('hidden');

  async function logon(emailProps, passwordProps) {
    const { token: respostaToken } = await apiHandle.login(emailProps, passwordProps);
    if (respostaToken) {
      setLoginState({ ...loginState, token: respostaToken });
    } else {
      setIsVisible('visible');
    }
  }

  if (token) return <Profile user={user} />;
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
                <div className="loginFail mt-1 mb-2" style={{ visibility: `${isVisible}` }}> Falha nas credenciais de Login</div>
                <Button type="submit" variant="primary">
                  Entrar
                </Button>
              </Form>

              <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label text-start" htmlFor="defaultCheck1">
                  <h5>
                    Continuar conectado?
                  </h5>
                  <p>
                    Mantenha-se conectado para que você não precise entrar novamente da próxima vez.
                  </p>
                </label>
              </div>

              <div className="d-flex account justify-content-center">
                <p className="opsLogin">Não tem uma conta?⠀</p>
                <Link to="/Cadastro">Criar conta</Link>
              </div>

              <div className="d-flex account justify-content-center">
                <p className="opsLogin">Esqueceu sua senha?⠀</p>
                <Link to="/RedefinirSenha">Redefinir senha</Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />

    </>
  );
}

function Profile({ user }) {
  const { loginState, setLoginState } = useContext(LoginContext);
  function logout() {
    setLoginState({ ...loginState, isLoged: false, user: '' });
  }
  return (
    <>
      <div className="logedContainer d-flex flex-column m-0 vh-100">
        <Container fluid className="LogedLogin d-flex flex-column vh-100">
          <h1 className="mt-5 p-5">{user.email}</h1>
          <Button type="button" variant="primary" onClick={() => logout()}>
            Logout
          </Button>
        </Container>
      </div>
      <Footer />
    </>
  );
}
