import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import dailymission from '../../images/dailymission.PNG';

function CardCharacter({name, vision, weapon, nation}) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dailymission}/>
      <Card.Body>   
        <Card.Title>Missões Diárias</Card.Title>
        <Card.Text>
          Quer um desafio extra nas missões diárias de hoje? Utilize personagens de forma aleatória 
          para completar o desafio.
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