import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react';
import Logo from '../../assets/IEM_Logo.png';
import Logo1 from '../../assets/MUN_Logo.png'
import './navbar.css';

function NavbarFixed(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="navabar" variant="dark" fixed="top">
      <Container>
          <Navbar.Brand >
              <img alt="" src={Logo1}  height="60"  className="d-inline-block align-top" />
              <img alt="" src={Logo} height="60" margin="0px  10px"className="d-inline-block align-top logo"/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            </Nav>
            <Nav > 
          <Nav.Link href="#hero">Home</Nav.Link>        
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#committees">Committee</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarFixed;