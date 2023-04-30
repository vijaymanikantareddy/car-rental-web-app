import 'bootstrap/dist/css/bootstrap.min.css';  
import { useState } from 'react';
import {Container ,Card,Row,Image, Col,Modal, Button} from 'react-bootstrap';  
// import ViewCars from './Components/ViewCars';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react';
import './table.css';

const CardComponent = ({ card, handleShow }) => {
  return (
    <Card className='card-item'>
      <Card.Img variant="top" src={card.image} onClick={handleShow} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.description}</Card.Text>
        {/* <Button variant="primary"  onClick={handleShow} >DETAILS
        
        </Button> */}
      </Card.Body>
    </Card>
  );
};

const CardList = ({ cards }) => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  return (
    <div className="card-list-container p-3 col-md-12 m-3 shadow-lg rounded">
      {cards.map((card, index) => (
        <CardComponent
          key={index}
          card={card}
          handleShow={() => handleShow(card.image)}
        />
      ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <img src={selectedImage} alt="" style={{ width: '80%' }} />
          <h2>RENT FOR ONE MONTH</h2><br></br>
            <Button variant="primary">60,000/-</Button><br></br>
             <h2>RENT FOR ONE DAY</h2>
             <Button variant="primary">2,500/-</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const App = () => {
  const cards = [
    {
      image: 'd1.jpg',
      title: 'FROBES',
      status:'not avilable'
      // description: 'Card 1 Description',
    },
    {
      image: 'd9.jpg',
      title: 'ROLL-ROYCE',
      // description: 'Card 2 Description',
    },
    {
      image: 'd3.jpeg',
      title: 'BENZ',
      // description: 'Card 3 Description',
    },
    {
      image: 'd4.webp',
      title: 'BMW',
      // description: 'Card 3 Description',
    },
    {
      image: 'd2.jpg',
      title: 'HYUNDAI',
      // description: 'Card 3 Description',
    },
    {
      image: 'd6.jpg',
      title: 'Volvo',
      // description: 'Card 3 Description',
    },
    {
      image: 'd7.jpg',
      title: 'MAHINDRA THAR',
      // description: 'Card 3 Description',
    },
    {
      image: 'd8.jpg',
      title: 'TATA HARRIER',
      // description: 'Card 3 Description',
    },
    {
      image: 'd5.jpg',
      title: 'MARUTI SUZUKI',
      // description: 'Card 3 Description',
    }
  ];

  return (
    <div>
      {/* <h1>Card List</h1> */}
      <CardList cards={cards} />
    </div>
  );
};


export default App;