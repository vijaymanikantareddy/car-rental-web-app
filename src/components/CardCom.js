import React from 'react'
// import './cardcomstyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

// import image from 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Rolls-Royce/Rolls-Royce-Phantom/7783/1587206758888/front-left-side-47.jpg?impolicy=resize&imwidth=420';
function CardCom(props) {
  return (
    <div>
       <div className="container">
      <div className="row" style={{paddingTop: "15px", height: "300px"}}>
        <div className="col-md-4 mb-3">
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Rolls-Royce/Rolls-Royce-Phantom/7783/1587206758888/front-left-side-47.jpg?impolicy=resize&imwidth=420" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-3" >
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46LbqZynQM3akxOmOKD5b879WYWJVvrbk9w&usqp=CAU"/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-3">
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcQiLvi5vHtvz-1W7lCw5EPL_1MZ81Y1ydQ&usqp=CAU" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CardCom