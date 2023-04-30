import 'bootstrap/dist/css/bootstrap.min.css';  
import { useState } from 'react';
import {Container ,Card,Row,Image, Col,Modal, Button} from 'react-bootstrap';  
// import ViewCars from './Components/ViewCars';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react';
import './admin_table.css';

const CardComponent = ({ card, handleShow }) => {
  return (
    <Card className='card-item'>
      <Card.Img variant="top" src={card.image} onClick={handleShow} />
      <Card.Body>
        <Card.Title>Model Name : {card.modelname}</Card.Title>
        <Card.Text>Model Number: {card.modelnumber}</Card.Text>
        <Card.Text>Miles Driven: {card.miles}</Card.Text>
        <Card.Text>Required Documents: {card.documentneed}</Card.Text>
        <Card.Text>Status: {card.status}</Card.Text>
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
    <div className="card-list-container p-3 col-md-12 m-2 shadow-lg rounded">
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
          <h2>RENT FOR ONE MONTH</h2>
            <Button variant="primary">60,000/-</Button><br/>
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

const OwnerViewStatus = () => {
  const cards = [
    {
      image: 'd1.jpg',
      modelname: 'FROBES',
      modelnumber: '12',
      status:'not avilable',
      documentneed: 'License, C Book',
      miles: '1252 Miles'
    },
    {
      image: 'd9.jpg',
      modelname: 'ROLL-ROYCE',
      modelnumber: '33',
      status: 'available',
      documentneed: 'License, C Book',
      miles: '1000 miles',
    },
    {
      image: 'd3.jpeg',
      modelname: 'BENZ',
      status: 'available',
      modelnumber: '54',
      documentneed: 'License, C Book',
      miles: '2323 miles',
    },
    {
      image: 'd4.webp',
      modelname: 'BMW',
      modelnumber: '23',
      status: 'not available',
      documentneed: 'License, C Book',
      miles: '4543 miles',
    },
    {
      image: 'd2.jpg',
      modelname: 'HYUNDAI',
      status: 'available',
      modelnumber: '52',
      documentneed: 'License, C Book',
      miles: '235 miles',
    },
    {
      image: 'd6.jpg',
      modelname: 'Volvo',
      documentneed: 'License, C Book',
      modelnumber: '79',
      status: 'not available',
      miles: '2452 miles',
    },
    {
      image: 'd7.jpg',
      modelname: 'MAHINDRA THAR',
      modelnumber: '56',
      documentneed: 'License, C Book',
      status: 'available',
      miles: '2352 miles',
    },
    {
      image: 'd8.jpg',
      modelname: 'TATA HARRIER',
      documentneed: 'License, C Book',
      modelnumber: '96',
      status: 'available',
      miles: '7867 miles',
    },
    {
      image: 'd5.jpg',
      modelname: 'MARUTI SUZUKI',
      documentneed: 'License, C Book',
      modelnumber: '97',
      status: 'not available',
      miles: '457 Description',
    }
  ];

  return (
    <div>
      {/* <h1>Card List</h1> */}
      <CardList cards={cards} />
    </div>
  );
};


export default OwnerViewStatus;