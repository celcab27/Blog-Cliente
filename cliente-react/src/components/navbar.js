import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavbarComponent extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Alkemy's Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Link className="nav-link" to="/ABM">
              Editar
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarComponent;
