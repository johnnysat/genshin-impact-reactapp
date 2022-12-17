import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function ListCharacter({name}) {

  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li">{name}</ListGroup.Item>
    </ListGroup>
  );
}

export default ListCharacter;