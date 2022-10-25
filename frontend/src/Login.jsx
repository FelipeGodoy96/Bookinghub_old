import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "./components/Footer/Footer";
import LoginContext from "../src/Contexts/LoginContext";
import "./styles/login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  // const { state, setState } = useContext(LoginContext);

  const navigate = useNavigate();
  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
                  const localObject = JSON.parse(
                    window.localStorage.getItem(email)
                  );
                  if (
                    email === localObject.email &&
                    password === localObject.password
                  ) {
                    // implementar useContext lógica aqui
                    navigate("/");
                  } else {
                    // feedback de credências inválidas
                    console.log(
                      "Por favor, tente novamente, suas credenciais são inválidas"
                    );
                  }
                }}
              >
                <Form.Group className="mb-3 text-start" controlId="formEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Insira seu e-mail"
                  ></Form.Control>
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
                  ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">
                  Entrar
                </Button>
              </Form>
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
        <Footer/>
      </div>
    </>
  );
}
