import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './CardCharacter.css';
//import ListCharacter from '../ListCharacters/ListCharacter';



function CardCharacter({name, vision, weapon, nation, input}) {
  const [filename] = useState(name);

  return (
    <Card style={{ width: '18rem' }}>
      <div className="container">
      <Card.Img variant="top" 
      src={require(`../../images/${filename}.png`)} 
      alt={name} 
      className="imgChar"/>
      </div>
      <Card.Body>   
        <Card.Title>
          <div className="inputName">{input}</div>
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><strong>Nome</strong>: {name}</ListGroup.Item>
        <ListGroup.Item><strong>Elemento</strong>: {vision}</ListGroup.Item>
        <ListGroup.Item><strong>Arma</strong>: {weapon}</ListGroup.Item>
        <ListGroup.Item><strong>Nação</strong>: {nation}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardCharacter;
