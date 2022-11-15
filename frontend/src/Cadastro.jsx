/* eslint-disable no-useless-escape */
import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import './styles/Cadastro.css';
import { Link, useNavigate } from 'react-router-dom';

import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import Footer from './components/Footer/Footer';

export default function Cadastro() {
  const navigate = useNavigate();
  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    );
  }
  function isName(name) {
    return /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm.test(name);
  }
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [type, setType] = useState(false);
  const [icon, setIcon] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const target = useRef(null);

  const handleToggle = () => {
    setType(!type);
    setIcon(!icon);
  };
  return (
    <div className="d-flex flex-column m-0 vh-100">
      <Container fluid className="d-flex vh-100">
        <div className="d-flex flex-column text-center cadastro">
          <span className="content__title">Criar conta</span>
          <div className="content__form">
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                const formInputsCollection = document.getElementsByTagName('input');
                const formInputs = Array.from(formInputsCollection);
                const isValid = formInputs.every((element) => element.classList.contains('is-valid'));

                if (isValid) {
                  const user = {
                    nome,
                    sobrenome,
                    email,
                    password: pw,
                  };
                  window.localStorage.setItem(
                    user.email,
                    JSON.stringify(user),
                  );
                  navigate('/');
                } else {
                  // feedback de credenciais inválidas - a implementar
                }
              }}
            >
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  className="text-start"
                  controlId="formName"
                >
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    name="nome"
                    required
                    onChange={(e) => {
                      if (
                        (!isName(e.target.value)
                            && e.target.value.length > 0)
                          || e.target.value.length > 20
                      ) {
                        e.target.classList.add('is-invalid');
                        e.target.classList.remove('is-valid');
                        setShowTooltip(true);
                        target.current = e.target;
                      } else if (
                        isName(e.target.value)
                          && e.target.value.length <= 20
                      ) {
                        e.target.classList.remove('is-invalid');
                        e.target.classList.add('is-valid');
                        setNome(e.target.value);
                        setShowTooltip(false);
                      } else if (
                        e.target.value === ''
                          || e.target.value === undefined
                      ) {
                        e.target.classList.remove('is-invalid');
                        e.target.classList.remove('is-valid');
                        setShowTooltip(false);
                      }
                    }}
                    onBlur={() => {
                      target.current = null;
                    }}
                    type="text"
                    placeholder="Nome"
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  className="text-start"
                  controlId="formSobrenome"
                >
                  <Form.Label>Sobrenome</Form.Label>
                  <Form.Control
                    name="sobrenome"
                    required
                    onChange={(e) => {
                      if (
                        (!isName(e.target.value)
                            && e.target.value.length > 0)
                          || e.target.value.length > 20
                      ) {
                        e.target.classList.add('is-invalid');
                        e.target.classList.remove('is-valid');
                        setShowTooltip(true);
                        target.current = e.target;
                      } else if (
                        isName(e.target.value)
                          && e.target.value.length <= 20
                      ) {
                        e.target.classList.remove('is-invalid');
                        e.target.classList.add('is-valid');
                        setSobrenome(e.target.value);
                        setShowTooltip(false);
                      } else if (
                        e.target.value === ''
                          || e.target.value === undefined
                      ) {
                        e.target.classList.remove('is-invalid');
                        e.target.classList.remove('is-valid');
                        setShowTooltip(false);
                      }
                    }}
                    onBlur={() => {
                      target.current = null;
                    }}
                    type="text"
                    placeholder="Sobrenome"
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3 text-start" controlId="formEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  name="email"
                  required
                  onChange={(e) => {
                    if (
                      !isEmail(e.target.value)
                        && e.target.value.length > 0
                    ) {
                      e.target.classList.add('is-invalid');
                      e.target.classList.remove('is-valid');
                      setShowTooltip(true);
                      target.current = e.target;
                    } else if (isEmail(e.target.value)) {
                      e.target.classList.remove('is-invalid');
                      e.target.classList.add('is-valid');
                      setEmail(e.target.value);
                      setShowTooltip(false);
                    } else if (
                      e.target.value === ''
                        || e.target.value === undefined
                    ) {
                      e.target.classList.remove('is-invalid');
                      e.target.classList.remove('is-valid');
                      setShowTooltip(false);
                    }
                  }}
                  onBlur={() => {
                    target.current = null;
                  }}
                  type="email"
                  placeholder="Insira seu e-mail"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 text-start  "
                controlId="formPassword"
              >
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  name="senha"
                  required
                  onChange={(e) => {
                    if (
                      e.target.value.length > 0
                        && e.target.value.length < 6
                    ) {
                      e.target.classList.add('is-invalid');
                      e.target.classList.remove('is-valid');
                    } else if (
                      e.target.value.length >= 6
                        && e.target.value.length <= 20
                    ) {
                      e.target.classList.add('is-valid');
                      e.target.classList.remove('is-invalid');
                      setPw(e.target.value);
                    } else if (
                      e.target.value === ''
                        || e.target.value === undefined
                    ) {
                      e.target.classList.remove('is-invalid');
                      e.target.classList.remove('is-valid');
                    }
                  }}
                  onBlur={(e) => {
                    target.current = null;
                    if (
                      e.target.value !== confirmPw
                        && e.target.value.length > 0
                        && confirmPw.length > 1
                    ) {
                      e.target.classList.add('is-invalid');
                      e.target.classList.remove('is-valid');
                    } else if (
                      e.target.value === confirmPw
                        && e.target.value.length > 1
                    ) {
                      e.target.classList.add('is-valid');
                      e.target.classList.remove('is-invalid');
                    } else if (
                      e.target.value === ''
                        || e.target.value === undefined
                    ) {
                      e.target.classList.remove('is-invalid');
                      e.target.classList.remove('is-valid');
                    }
                  }}
                  type={type ? 'text' : 'password'}
                  placeholder="********"
                />
                <span className="toogle" onClick={handleToggle}>
                  <Icon icon={icon ? eye : eyeOff} size={20} />
                </span>
              </Form.Group>
              <Form.Group
                className="mb-3 text-start  "
                controlId="formConfirmPassword"
              >
                <Form.Label>Confirmar senha</Form.Label>
                <Form.Control
                  name="confirmarSenha"
                  required
                  onChange={(e) => {
                    if (e.target.value !== pw && e.target.value.length > 0) {
                      e.target.classList.add('is-invalid');
                      e.target.classList.remove('is-valid');
                    } else if (e.target.value === pw) {
                      e.target.classList.add('is-valid');
                      e.target.classList.remove('is-invalid');
                      setConfirmPw(e.target.value);
                    } else if (
                      e.target.value === ''
                        || e.target.value === undefined
                    ) {
                      e.target.classList.remove('is-invalid');
                      e.target.classList.remove('is-valid');
                    }
                  }}
                  onBlur={(e) => {
                    target.current = null;
                    if (e.target.value !== pw && e.target.value.length > 0) {
                      e.target.classList.add('is-invalid');
                      e.target.classList.remove('is-valid');
                    } else if (
                      e.target.value === pw
                        && e.target.value.length > 1
                    ) {
                      e.target.classList.add('is-valid');
                      e.target.classList.remove('is-invalid');
                    } else if (
                      e.target.value === ''
                        || e.target.value === undefined
                    ) {
                      e.target.classList.remove('is-invalid');
                      e.target.classList.remove('is-valid');
                    }
                  }}
                  type={type ? 'text' : 'password'}
                  placeholder="********"
                />
              </Form.Group>
              <Button type="submit" variant="primary">
                Criar conta
              </Button>
              <Overlay
                target={target.current}
                show={showTooltip}
                placement="right"
              >
                {(props) => <Tooltip props={{ ...props }}>Campo inválido</Tooltip>}
              </Overlay>
            </Form>
            <div className="d-flex account justify-content-center">
              <p>Já tem uma conta?⠀</p>
              <Link to="/login">Iniciar sessão</Link>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
