import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import React from "react";
import Logo from "../../assets/IEM_Logo.png";
import Logo1 from "../../assets/MUN_Logo.png";
import Logo2 from "../../assets/new1.png";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavbarFixed(props) {
  const Homenav = () => {
    return (
      <>
        <Nav>
          <Nav.Link href="#hero">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#committees">Committee</Nav.Link>
          <Nav.Link href="/team">Team</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </>
    );
  };

  const Defaultnav = () => {
    return (
      <>
        <Nav>
          <Link to="/">
            <Nav.Link href="#hero">Home</Nav.Link>{" "}
          </Link>
        </Nav>
      </>
    );
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navabar"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={Logo1}
              height="60"
              className="d-inline-block align-top"
            />
            <img
              alt=""
              src={Logo}
              height="60"
              margin="0px  10px"
              className="d-inline-block align-top logo"
            />
            <img
              alt=""
              src={Logo2}
              height="60"
              margin="0px  10px"
              className="d-inline-block align-top logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          {props.homenav ? <Homenav /> : <Defaultnav />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarFixed;
