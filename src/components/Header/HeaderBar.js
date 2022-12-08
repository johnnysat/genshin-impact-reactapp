import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './HeaderBar.css';

function HeaderBar() {
  return (
    <Navbar bg="light" expand="lg" className="main_navbar">
      <Container>

        <Navbar.Brand href="#home">Genshin Impact - Aleatorizador</Navbar.Brand>
          <Nav className="navbar_link">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>

      </Container>
    </Navbar>
  );
}

export default HeaderBar;