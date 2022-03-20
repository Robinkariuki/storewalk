import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Naivas</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#home">Pending</Nav.Link>
  
    </Nav>
    </Container>
  </Navbar>
  )
}

export default Navigation