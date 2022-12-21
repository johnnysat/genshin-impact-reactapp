import React, {useState, useEffect} from 'react';
//import ListGroup from 'react-bootstrap/ListGroup';
import myApi from '../../Api';

function ListCharacter({select}) {
  const [characters, setCharacters] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    async function fetchData(value) {
      const response = await myApi.get(value);
      setCharacters(response.data);
      console.log(response.data)
    }
    fetchData(value);
  }, [value]);

  return (
    <div>
      <select value={value} onChange={event => setValue(event.target.value)}>
        {characters.map(character => (
          <option key={character.id} value={character.id}>
            {character.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ListCharacter;
