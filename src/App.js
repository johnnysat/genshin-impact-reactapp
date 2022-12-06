import React from 'react';
import Api from './Api';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './components/Header/HeaderBar';
import CardCharacter from './components/CardCharacters/CardCharacter';
import Form from 'react-bootstrap/Form';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      inputValue: event.target.value
    });
  }

  state= {
    characters: [],
  }

  async componentDidMount() {
    const response = await Api.get('Diluc');
    this.setState({ characters: response.data});
    console.log(response.data)
  }

  render(){
    const {characters} = this.state;

  return (
    <div className="App">
      <HeaderBar />

      <Form.Group className="mb-3 input-characters">
        <Form type="text" placeholder="Escolha o Personagem">
          <input type="text" onChange={this.handleChange}/>
          <button type="button">Enviar</button>
        </Form>
      </Form.Group>

      <div className="cardContent">
        <CardCharacter 
        name= 'Nome'
        vision= 'Visão'
        weapon= 'Arma'
        nation= 'Nação' />
      </div>
    </div>
  );
}
}

export default App;
