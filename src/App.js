import React from 'react';
import './App.css';
import myApi from './Api';
import HeaderBar from './components/Header/HeaderBar';
import CardCharacter from './components/CardCharacters/CardCharacter';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      characters: [],
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchAPI = this.searchAPI.bind(this);
  }

  handleInput(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });

    if (this.timer) {
      clearTimeout(this.timer)}
    this.timer = setTimeout(() => this.searchAPI(), 5000);
  }

  handleSubmit(event) {
    event.preventDefault();
    myApi.get(this.state.value).then(({ data }) => {
      this.setState({ characters: data });
    });
  }

  searchAPI() {
    myApi.get(this.state.value).then(({ data }) => {
      this.setState({ characters: data });
    });
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="App">
        <HeaderBar />

        <Form.Group className="mb-3 input-characters">
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value} onInput={this.handleInput} />
            <input type="submit" value="Pesquisar" />
          </form>
        </Form.Group>

        <div className="cardContent">
          <CardCharacter
            key={characters.name}
            name={characters.name}
            vision={characters.vision}
            weapon={characters.weapon}
            nation={characters.nation}
          />
        </div>
      </div>
    );
  }
}

export default App;
