import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/Cadastro.css'
import { Link } from "react-router-dom";
import { useState } from 'react'
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'


export default function Cadastro () {
  function isEmail (email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  }
  function isName (name) {
    return /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm.test(name)
  }
  const [ nome, setNome ] = useState('')
  const [ sobrenome, setSobrenome ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ pw, setPw ] = useState('')
  const [ confirmPw, setConfirmPw ] = useState('')
  const [ type, setType ] = useState(false);
  const [ icon, setIcon ] = useState(false);

  const handleToggle = () => {   
    setType(!type)
    setIcon(!icon)
  }
  return (
    <Container fluid className="d-flex p-0  vh-100">
      <div className="d-flex flex-column text-center login">
        <span className='content__title'>
          Criar conta
        </span>
        <div className='content__form'>
          <Form onSubmit={(event) => {
            event.preventDefault()
          }}>
    <Row className="mb-3">
        <Form.Group as={Col} className='text-start' controlId="formName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
                onChange={
                  (e) => {                   
                    if (!isName(e.target.value) || e.target.value.length > 20) {
                      e.target.classList.add('is-invalid')
                    }
                    else if (isName(e.target.value) && e.target.value.length <= 20) {
                      e.target.classList.remove('is-invalid')
                      e.target.classList.add('is-valid')
                      setNome(e.target.value)
                    }        
                  }
                } 
                type="text" 
                placeholder="Insira seu nome">
              </Form.Control>
        </Form.Group>
        <Form.Group as={Col}  className='text-start' controlId="formSobrenome">
          <Form.Label >Sobrenome</Form.Label>
          <Form.Control
                onChange={
                  (e) => {
                    if (!isName(e.target.value) || e.target.value.length > 20) {
                      e.target.classList.add('is-invalid')
                    }
                    else if (isName(e.target.value) && e.target.value.length <= 20) {
                      e.target.classList.remove('is-invalid')
                      e.target.classList.add('is-valid')
                      setSobrenome(e.target.value)
                    }   
                  }
                  } 
                type="text" 
                placeholder="Insira seu sobrenome">
              </Form.Control>
        </Form.Group>
      </Row>
            <Form.Group className="mb-3 text-start" controlId="formEmail">
              <Form.Label>
                E-mail
              </Form.Label>
              <Form.Control 
                onChange={
                  (e) => {
                    if (!isEmail(e.target.value)) {
                      e.target.classList.add('is-invalid')
                    }
                    else if (isEmail(e.target.value)) {
                      e.target.classList.remove('is-invalid')
                      e.target.classList.add('is-valid')
                      setEmail(e.target.value)
                    }
                  } 
                }
                type="email" 
                placeholder="Insira seu e-mail">
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 text-start  " controlId="formPassword">
              <Form.Label>
                Senha
              </Form.Label>
              <Form.Control 
                onChange={
                  (e) => {
                    if (e.target.value.length <= 6) {
                      e.target.classList.add('is-invalid')
                    }
                    else if (e.target.value.length > 6 && e.target.value.length <= 20) {
                      e.target.classList.add('is-valid')
                      e.target.classList.remove('is-invalid')
                      setPw(e.target.value)
                    }
                  }
                }
                type={type ? "text" : "password"}
                placeholder="********">
                </Form.Control>
                <span className='toogle' onClick={handleToggle}><Icon icon={icon ? eye : eyeOff} size={20}/></span>
            </Form.Group>
            <Form.Group className="mb-3 text-start  " controlId="formPassword">
              <Form.Label>
                Confirmar senha
              </Form.Label>
              <Form.Control 
                onChange={
                  (e) => {
                    if (e.target.value !== pw) {
                      e.target.classList.add('is-invalid')
                    }
                    else if (e.target.value === pw) {
                      e.target.classList.add('is-valid')
                      e.target.classList.remove('is-invalid')
                      setConfirmPw(e.target.value)
                    }
                  }
                }
                type={type ? "text" : "password"}
                placeholder="********">
                </Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">Criar conta</Button>
          </Form>
          <div className='d-flex account justify-content-center'>
            <p>Já tem uma conta?⠀</p>
            <Link to="/login">
                Iniciar sessão
              </Link>
            </div>
        </div>
    </div>
    </Container>
  )
}