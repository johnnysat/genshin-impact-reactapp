import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function CardCharacter({name, vision, weapon, nation}) {
  const [filename, ] = useState(name);

  return (
    <Card style={{ width: '18rem' }}>
      <LazyLoadImage variant="top" src={require(`../../images/${filename}.png`)} alt={name} />
      <Card.Body>   
        <Card.Title>GenshinDex</Card.Title>
        <Card.Text>
          Pesquise pelo seu personagem aqui!
        </Card.Text>
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
