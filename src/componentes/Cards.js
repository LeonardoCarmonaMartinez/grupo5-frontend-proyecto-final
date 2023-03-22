import React from "react";

//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";


const Cards = ({id, img, name, desc, category, price}) => {
 
 
  return (
    <div>     
      <Card className="m-3" style={{ width: "18rem" }} >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush ">
          <Card.Text className="m-3 fw-bold">Descripción: {desc}</Card.Text>
          <Card.Text className="m-3 fw-bold">{category}</Card.Text>
        </ListGroup>
        <Card.Body>
          <Card.Text className="text-center fs-2 fw-normal">
            ${price}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;