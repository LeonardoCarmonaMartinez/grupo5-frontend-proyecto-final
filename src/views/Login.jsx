import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Correo electrónico" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Iniciar Sesión 
      </Button>
    </Form>
  );
};

export default Login;