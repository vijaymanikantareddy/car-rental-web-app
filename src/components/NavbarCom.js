import React, {Component} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomeCom from './HomeCom';
import StatusCom from './StatusCom';
import HistoryCom from './HistoryCom';
import PayCom from './PayCom';


function NavbarCom() {
  return (<Router>
    <>    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"ownerhome"}>Car Rental Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"ownerhome"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"ownerstatus"}>View Status</Nav.Link>
            <Nav.Link as={Link} to={"ownerhistory"}>View History</Nav.Link>
            <Nav.Link as={Link} to={"ownerpayment"}>Payment Page</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"ownerlogout"}>LogOut</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></>
    <Routes>
        <Route path='/ownerhome'><HomeCom/></Route>
        <Route path='/ownerstatus'><StatusCom/></Route>
        <Route path='/ownerhistory'><HistoryCom/></Route>
        <Route path='/ownerpayment'><PayCom/></Route>
        <Route path='/ownerlogout'><HomeCom/></Route>
    </Routes>
    </Router>
  );
}

export default NavbarCom;