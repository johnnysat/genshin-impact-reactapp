import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function HeaderBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Genshin Déx</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Feito por: <a href="https://github.com/johnnysat">JohnnySat</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderBar;