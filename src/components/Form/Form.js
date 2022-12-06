import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const FormInput = () => {

  const [input, setInput] = useState('');
  
  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(input);
  }

    return (
      <Form.Group className="mb-3 input-characters">
        <Form type="text" placeholder="Escolha o Personagem">
          <input type="text" value={input}
          onChange={(e) => handleChange(e)} />
        </Form>
      </Form.Group>
    );
}

export default FormInput;