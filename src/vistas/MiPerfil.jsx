import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const Perfil = () => {
  
  return (
    <div>
      <ListGroup>
        <ListGroup.Item>Nombre y apellido</ListGroup.Item>
        <ListGroup.Item>Edad</ListGroup.Item>
        <ListGroup.Item>Dirección</ListGroup.Item>
        <ListGroup.Item>Correo electrónico</ListGroup.Item>
        <ListGroup.Item>Contraseña</ListGroup.Item>
        <ListGroup.Item>Celular</ListGroup.Item>
      </ListGroup>
      <div>
        <img></img>
        <Button variant="primary" type="submit">
          Mis productos en venta
        </Button>
        <Button variant="primary" type="submit">
          Mis favoritos
        </Button>
      </div>
    </div>
  );
};

export default Perfil;