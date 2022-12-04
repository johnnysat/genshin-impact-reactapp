import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import dailymission from '../../images/dailymission.PNG';
import Input from '../Input/Input'

function CardCharacter() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dailymission}/>
      <Card.Body>
      <Input />
        <Card.Title>Missões Diárias</Card.Title>
        <Card.Text>
          Quer um desafio extra nas missões diárias de hoje? Utilize personagens de forma aleatória 
          para completar o desafio.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Personagem 1</ListGroup.Item>
        <ListGroup.Item>Personagem 2</ListGroup.Item>
        <ListGroup.Item>Personagem 3</ListGroup.Item>
        <ListGroup.Item>Personagem 4</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardCharacter;