import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "./components/Footer/Footer";
import LoginContext from "../src/Contexts/LoginContext";
import "./styles/login.css";
import { useState, useContext, useRef ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAuth } from "./utils/auth";

export default function Login() {
  const { loginState, setLoginState } = useContext(LoginContext);
  const { isLoged, user } = loginState;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState('hidden');

  console.log(isVisible);

  function logon(email, password) {
  
    const { loged, user: userData } = loginAuth(email, password);
    if (loged) {
      setLoginState({ ...loginState, isLoged: true, user: userData });
    } else {

      setIsVisible("visible") 
    
    }
  }

  if (isLoged) return <Profile user={user} />;
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
                <div className="loginFail mt-1 mb-2" style={{visibility:`${isVisible}`}}> Falha nas credenciais de Login</div>
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
        <Footer />
      </div>
    </>
  );
}

const Profile = ({ user }) => {
  const { loginState, setLoginState } = useContext(LoginContext);
  function logout() {
    setLoginState({ ...loginState, isLoged: false, user: "" });
    alert("Logout efetuado");
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
};
