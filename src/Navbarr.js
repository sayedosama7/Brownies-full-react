import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {HashLink} from 'react-router-hash-link';
import "./App.css"
const Navbarr = () => {
  return (
    <>
<Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home">Brownies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navLinks">
          <HashLink to="/#Component">Oriental </HashLink>
            <HashLink to="/#Gateau">Gateau</HashLink>
            <HashLink to="/#Bakery">Bakery</HashLink>
            <HashLink to="/#About Us">About Us</HashLink>
            <HashLink to="/#Contact Us">Contact Us</HashLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navbarr