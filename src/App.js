import React, { Component } from 'react';
import Api from './Api';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './components/Header/HeaderBar';
import CardCharacter from './components/CardCharacters/CardCharacter';

class App extends Component {

  state= {
    filmes: [],
  }

  async componentDidMount() {
    const response = await Api.get('');
    console.log(response.data);

    this.setState({ filmes: response.data});
  }

  render(){
  return (
    <div className="App">
      <HeaderBar />
      <div className="cardContent">
        <CardCharacter />
        <CardCharacter />
      </div>
    </div>
  );
}
}

export default App;
