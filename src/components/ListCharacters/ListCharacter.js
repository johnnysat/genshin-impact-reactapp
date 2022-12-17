import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function ListCharacter({name}) {

  return (
    <>
    <ListGroup as="ul">
      <select>
        <option value="volvo">Diluc</option>
        <option value="volvo">Albedo</option>
        <option value="volvo">Mona</option>
      </select>
    </ListGroup>
    </>
  );
}

export default ListCharacter;