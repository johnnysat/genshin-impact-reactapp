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
      value: '',
      characters: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  async componentDidMount() {
    const response = await Api.get('Amber');
    this.setState({ characters: response.data});
    console.log(response.data);
  }

  render(){
    const {characters} = this.state;

  return (
    <div className="App">
      <HeaderBar />

      <Form.Group className="mb-3 input-characters">
        <Form type="text" placeholder="Escolha o Personagem" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="Pesquisar"/>
        </Form>
      </Form.Group>

      <div className="cardContent">
        <CardCharacter 
        name= {`${characters.name}, ${characters.title}`}
        vision= {characters.vision}
        weapon= {characters.weapon}
        nation= {characters.nation} />
      </div>
    </div>
  );
}
}

export default App;
