
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './styles/login.css'

export default function Login () {
  return (
    <Container fluid>
    <div className="login">
      <div className="login_content">
        <span className='content__title'>
          Iniciar sessão
        </span>
        <div className='content__form'>
          <Form>
            <Form.Group className="mb-3 text-start" controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Insira seu e-mail"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="* * * * * * * *"></Form.Control>
            </Form.Group>
            <Button variant="primary">Entrar</Button>
          </Form>
        </div>
      </div>
    </div>
    </Container>
  )
}