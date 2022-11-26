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
  const { token, user } = loginState;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState('hidden');

  async function logon(emailProps, passwordProps) {
    const { token: respostaToken } = await apiHandle
      .login({ username: emailProps, password: passwordProps });
    if (respostaToken) {
      setLoginState({ ...loginState, token: respostaToken });
      document.cookie = `_sessionTokenJWT=${respostaToken}`;
      navigate('/');
    } else {
      setIsVisible('visible');
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
                <div className="loginFail mt-1 mb-2" style={{ visibility: `${isVisible}` }}> Falha nas credenciais de Login</div>
                <Button id="fazerLoginFormLogin" type="submit" variant="primary">
                  Entrar
                </Button>
              </Form>

              {/* <div className="form-check mt-4">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label text-center" htmlFor="defaultCheck1">
                  <h5>
                    Continuar conectado?
                  </h5>
                  <p>
                    Mantenha-se conectado para que você não precise entrar novamente da próxima vez.
                  </p>
                </label>
              </div> */}

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
