import React from 'react';
import Form from 'react-bootstrap/Form';

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  };

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <Form.Group className="mb-3 input-characters">
        <Form type="text" placeholder="Escolha o Personagem" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input variant="primary" type="submit">
          </input>
        </Form>
      </Form.Group>
    );
  }
}

export default FormInput;