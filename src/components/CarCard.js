import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Navibar from './Navbar';

function CarCard() {
  return (<>
  {/* <Navibar/> */}
    <div style={{gap: "10px", marginTop:"20px", display:"flex"}}>
        <a href='#' style={{listStyle:"none", textDecoration:"none"}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Rolls-Royce/Rolls-Royce-Phantom/7783/1587206758888/front-left-side-47.jpg?impolicy=resize&imwidth=420" />
      <Card.Body>
        <Card.Title> Model Name: Rolls Royce </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Model Number: 1111</ListGroup.Item>
        <ListGroup.Item>Miles Driven: 1000</ListGroup.Item>
        <ListGroup.Item>Required Documents: Driving License</ListGroup.Item>
      </ListGroup>
      {/* <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
    </Card>
    </a>
    </div>
    </>
  );
}


export default CarCard