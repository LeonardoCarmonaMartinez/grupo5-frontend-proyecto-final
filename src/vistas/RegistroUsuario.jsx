import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Registro = () => {

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Nombre y apellido" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Edad" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Dirección" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Correo electrónico" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Celular" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Imagen" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
};

export default Registro;