import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const InfoProducto = () => {
  
  return (
    <div className="contenedor m-5">
      <Container>
        <Row>
          <Col>
            <img></img> 
          </Col>
          <Col>
            <h3>{}</h3>
            <p className="descrip"></p>
            <p className="fw-bold"></p>
            <p className="fw-bold fs-2">Precio ${}</p>
            <p></p>
            <p></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoProducto;