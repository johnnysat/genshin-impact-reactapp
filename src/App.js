import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './components/Header/HeaderBar';
import CardCharacter from './components/CardCharacters/CardCharacter';


function App() {
  return (
    <div className="App">
      <HeaderBar />
      <body className="mainContent">
        <CardCharacter />

      </body>
    </div>
  );
}

export default App;
