// import React, {Component, useState} from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import HomeCom from './admin_View_Available_Cars';
// import StatusCom from './admin_View_Status_Of_Cars';
// import HistoryCom from './admin_View_History_Of_Cars';
// import PayCom from './PayCom';
// import CardCom from './CardCom';
// import { Dropdown } from 'react-bootstrap';


// function NavbarAdminCom() {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleMouseEnter = () => {
//     setShowDropdown(true);
//   };

//   const handleMouseLeave = () => {
//     setShowDropdown(false);
//   };
//   return (<Router>
//     <>    <Navbar bg="dark" variant='dark' expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to={"/"}>Car Rental Application</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             {/* <Nav.Link as={Link} to={"/"}>Home</Nav.Link> */}
//             <Nav.Link as={Link} to={"admin/status"}>View Status</Nav.Link>
//             <Nav.Link as={Link} to={"admin/history"}>View History</Nav.Link>
//             <Nav.Link as={Link} to={"admin/payment"}>Payment Page</Nav.Link>
//           </Nav>
//           <Nav>
            
//             <Dropdown
//             show={showDropdown}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}>
//             <Dropdown.Toggle variant="dark">Profile</Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item style={{cursor:"default"}}>Owner Name: Vijay</Dropdown.Item>
//               <Dropdown.Item style={{cursor:"default"}}>Owner Amount: 9999</Dropdown.Item>
//               <Dropdown.Item><Nav.Link as={Link} to={"logout"} style={{color: "black", WebkitTextStroke:"0.6px black"}}>LogOut</Nav.Link></Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar></>
//     <Routes>

//         <Route path='/' element={<HomeCom/>}/>
//         <Route path='/card' element={<CardCom/>}/>
//         <Route path='/owner/status' element={<StatusCom/>}/>
//         <Route path='/owner/history'element={<HistoryCom/>}/>
//         <Route path='/owner/payment'element={<PayCom/>}/>
//         <Route path='/owner/logout' element={<HomeCom/>}/>
//     </Routes>
//     </Router>
//   );
// }

// export default NavbarAdminCom;