import React, { useContext }  from "react";

import MyContext from "../MyContext";

import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";



const InfoProducto = () => {
  const { products } = useContext(MyContext);
  const { id } = useParams();
  
  return (
    <main>
      {products.filter(product => product.id === id)
      .map(info =>
      <div className="contenedor m-5" >
        <Container>
          <h3>{info.name}</h3>
          <Row>
            <Col>
              <img src={info.img} alt="imagen de referencia"/> 
            </Col>
            <Col>              
              <p className="descrip">Descripción:{info.desc}</p>
              <p className="fw-bold">Categoria:{info.category}</p>
              <p className="fw-bold fs-2">Precio ${info.price}</p>
              <p></p>
              <p></p>
            </Col>
          </Row>
        </Container>
      </div>)}
      
    </main>
  );
};

export default InfoProducto;