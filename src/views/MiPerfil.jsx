import React, { useContext } from 'react';

import MyContext from "../MyContext";

import { useParams } from "react-router-dom";

import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col } from "react-bootstrap";

const Perfil = () => {
  const { users } = useContext(MyContext);
  const { id_us } = useParams();
  console.log(users)
  
  return (
    <div>
      {users.filter(user => user.id_usuario === id_us)
             .map (us =>
        <div className="contenedor m-5" key={us.id_usuario}>
          <ListGroup >
            <ListGroup.Item>{us.nombre}</ListGroup.Item>
            <ListGroup.Item>{us.edad}</ListGroup.Item>
            <ListGroup.Item>{us.direccion}</ListGroup.Item>
            <ListGroup.Item>{us.correo}</ListGroup.Item>
            <ListGroup.Item>{us.contrasena}</ListGroup.Item>
            <ListGroup.Item>{us.telefono}</ListGroup.Item>
          </ListGroup>

          <Row>
            <Col>
              <img src={us.imagen} alt="imagen usuario"/>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default Perfil;