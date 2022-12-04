import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import HeaderBar from './components/HeaderBar'


function App() {
  return (
    <div className="App">
      <HeaderBar />
      <h1>Hello World!</h1>
      <Button variant="link">Link</Button>
    </div>
  );
}

export default App;
