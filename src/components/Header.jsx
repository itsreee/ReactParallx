import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-secondary">
    <Container>
      <Navbar.Brand href="#home">Travel</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Contact Us</Nav.Link>
          <NavDropdown title="Destinations" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Beach</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
             Forest
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Hill Stations</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              more info
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header

