import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav} from 'react-bootstrap';
function Navibar() {
  return (
    <>
    {/* <h1>Navibar</h1> */}
    <Navbar bg="dark" expand="lg" >
      <Container style={{color: "white"}}>
        <Navbar.Brand href="#home">Car Rental Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className=''>List Car</Nav.Link>
            <Nav.Link href="#link">View Status</Nav.Link>
            <Nav.Link href="#link">View History</Nav.Link>
            <Nav.Link href="#link" style={{float:"right"}}>Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navibar