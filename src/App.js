import React, { Component } from 'react';
import Api from './Api';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './components/Header/HeaderBar';
import CardCharacter from './components/CardCharacters/CardCharacter';

class App extends Component {

  state= {
    characters: [],
  }

  async componentDidMount() {
    const response = await Api.get('yoimiya');
    this.setState({ characters: response.data});
  }

  render(){
    const {characters} = this.state;
    //const input = document.querySelector('.input-characters');

  return (
    <div className="App">
      <HeaderBar />
      <div className="cardContent">
        <CardCharacter 
        name={characters.name}
        vision={characters.vision}
        weapon={characters.weapon}
        nation={characters.nation} />
      </div>
    </div>
  );
}
}

export default App;
