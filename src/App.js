import React, {useEffect, useState } from 'react';
import myApi from './Api';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './components/Header/HeaderBar';
import CardCharacter from './components/CardCharacters/CardCharacter';
import Form from 'react-bootstrap/Form';

function MyComponent(props) {
  const [, setValue] = useState([]);

  useEffect(() => {
    myApi.get(props.value).then(({ data }) => {
      setValue(data);
    });
  }, [props.value]);
}

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
    event.preventDefault();
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    myApi.get(this.state.value).then(({ data }) => {
      this.setState({ characters: data });
    });
  }

  render(){
    const {characters} = this.state;

  return (
    <div className="App">
      <HeaderBar />

      <Form.Group className="mb-3 input-characters">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="Pesquisar"/>
        </form>
      </Form.Group>

      <MyComponent value={this.state.value} />
      <div className="cardContent">
        <CardCharacter 
          key={characters.name}
          name={`${characters.name}, ${characters.title}`}
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
