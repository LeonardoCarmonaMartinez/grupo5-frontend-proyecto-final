import React from 'react';

import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const BarraNavegacion = () => {
  
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className="text-white ms-3 text-decoration-none">
          <Navbar.Brand href="#">CONECTADOS</Navbar.Brand>
        </Link>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          >
            <Nav.Link href="/registro"> Registrate </Nav.Link>
            <Nav.Link href="/login"> Inicio de Sesión </Nav.Link>
            <Nav.Link href="/perfil" disabled> Mi perfil </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Buscar"
            className="me-2"
            aria-label="Search"
          />
            <Button variant="outline-success">Buscar</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default BarraNavegacion;