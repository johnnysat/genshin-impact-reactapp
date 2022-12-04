import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import dailymission from '../../images/dailymission.PNG';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function CardCharacter() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dailymission}/>
      <Card.Body>
      <InputGroup className="mb-3 input-characters">
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Personagem"
        />
        <Button variant="outline-secondary" id="button-addon1" type="submit">
          Enviar
        </Button>
      </InputGroup>        
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