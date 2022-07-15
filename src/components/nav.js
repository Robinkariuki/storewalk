import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
import {  Link } from "react-router-dom";
const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Naivas</Navbar.Brand>
    <Nav className="me-auto">
      
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/Pending">Pending</Nav.Link>
  
    </Nav>
    </Container>
  </Navbar>
  )
}

export default Navigation