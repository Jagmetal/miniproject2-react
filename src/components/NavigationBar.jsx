import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link to="/" className="navbar-brand">Home</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/contact" className="nav-link">Contact</Link> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
