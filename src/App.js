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
    const response = await Api.get('');
    const data = response.data;
    console.log(data);

    this.setState({ characters: data});
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
