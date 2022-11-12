import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {HashLink} from 'react-router-hash-link';
import {Link} from 'react-router-dom';

import "./App.css"
const Navbarr = () => {
  return (
    <>

          <Navbar expand="lg">
      <Container>
        <Link to="/" ><img src="/Images/Logo/براونيز ابيض.jpg" alt=''/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navlinks justify-content-end  ">
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