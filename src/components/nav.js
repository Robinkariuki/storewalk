import React,{useEffect} from 'react'
import {Nav,Navbar,Container,Button} from 'react-bootstrap'
import {  Link } from "react-router-dom";
const Navigation = ({token}) => {
  // const [isLoggedin, setIsLoggedin] = useState(false);
 



  
  const logOut = () =>{
  
    sessionStorage.removeItem('token')
    window.location.reload(); 
   }


  if(!token){

    return( 
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand>Naivas</Navbar.Brand>

      </Container>
    </Navbar>

    )
  }
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>Naivas</Navbar.Brand>
    <Nav className="me-auto">
      
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/Pending">Pending</Nav.Link>
  
    </Nav>
    <Nav>
    <Button variant="outline-light" onClickCapture={logOut}>Log out</Button>
          </Nav>
    </Container>
  </Navbar>
  )
}

export default Navigation