import React from 'react';
import './App.css';
import myApi from './Api';
import HeaderBar from './components/Header/HeaderBar';
import CardCharacter from './components/CardCharacters/CardCharacter';
import 'bootstrap/dist/css/bootstrap.min.css';


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
    this.timer = setTimeout(() => this.searchAPI(), 100000);
  }

  handleSubmit(event) {
    event.preventDefault();
    myApi.get(this.state.value).then(({ data }) => {
      this.setState({ characters: data });
    });
    this.setState({value: ''});
  }

  searchAPI() {
    myApi.get(this.state.value).then(({ data }) => {
      const charactersLowercase = data.map(character => character.toLowerCase());
      this.setState({ characters: charactersLowercase });
    });
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="App">
        <HeaderBar />
        <div className="cardContent">
          <CardCharacter
            input={
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  className="inputChar"
                  value={this.state.value}
                  onInput={this.handleInput}
                  placeholder={"Nome do personagem"}
                />
              </form>
            }
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
