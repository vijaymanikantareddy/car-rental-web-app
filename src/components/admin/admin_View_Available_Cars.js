import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card,CardGroup, Col, Button} from 'react-bootstrap';  
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.webp'
import c3 from '../assets/c3.webp'
import c4 from '../assets/c4.jpg'
import c5 from '../assets/c5.jpg'
import c6 from '../assets/c6.webp'
import c7 from '../assets/c7.jpg'
import c8 from '../assets/c8.jpg'
// import ImagePopup from './ImagePopup';
function View_Available_Cars() {  
  return (    
    <div className='App'>
        <h1 text-align="center">CAR FOR RENT</h1>
   {/* <Container className='p-3 col-md-12 m-5 shadow-lg bg-white rounded' >   */}
  < div className=" p-3 col-md-12 m-3 shadow-lg bg-white rounded" id="demo">
   <CardGroup> 
 
  <Card >  
  <Card.Img variant="top" src={c1} />  
  <Card.Body>  
    <Card.Title>HYUNDAI</Card.Title>  
    {/* <Card.Text>  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
    </Card.Text>   */}
    <Button variant="primary">CAR FOR RENT</Button>  
  </Card.Body>  
</Card>  <br></br>
<Card >  
  <Card.Img variant="top" src={c2} />  
  <Card.Body>  
    <Card.Title>MARUTHI SWIFT</Card.Title>  
    {/* <Card.Text>  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
    </Card.Text>   */}
    <Button variant="primary"> CAR FOR RENT</Button>  
  </Card.Body>  
</Card> <br></br> 
<Card >  
  <Card.Img variant="top" src={c3} />  
  <Card.Body>  
    <Card.Title>BMW</Card.Title>  
    {/* <Card.Text>  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
    </Card.Text>   */}
    <Button variant="primary">CAR FOR RENT</Button>  
  </Card.Body>  
</Card>  <br></br>
<Card>  
  <Card.Img variant="top" src={c4} />  
  <Card.Body>  
    <Card.Title>MAHINDRA</Card.Title>  
    {/* <Card.Text>  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
    </Card.Text>   */}
    <Button variant="primary">CAR FOR RENT</Button>  
  </Card.Body>  
</Card>  <br></br>
</CardGroup> 
</div><br></br>

{/* </Container>  
<Container className='p-4 col-md-12 m-5 shadow-lg bg-white rounded ' >   */}
   <div className="demo p-3 col-md-12 m-3 shadow-lg bg-white rounded">
   <CardGroup> 
 
  <Card >  
  <Card.Img variant="top" src={c5} />  
  <Card.Body>  
    <Card.Title>MARUTI SUZUKI</Card.Title>  
    {/* <Card.Text>  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
    </Card.Text>   */}
    <Button variant="primary">CAR FOR RENT</Button>  
  </Card.Body>  
</Card>  <br></br>
<Card >  
  <Card.Img variant="top" src={c6} />  
  <Card.Body>  
    <Card.Title>TATA</Card.Title>  
    {/* <Card.Text>  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
    </Card.Text>   */}
    <Button variant="primary">CAR FOR RENT</Button>  
  </Card.Body>  
</Card> <br></br> 
<Card >  
  <Card.Img variant="top" src={c7} />  
  <Card.Body>  
    <Card.Title>BENTLEY</Card.Title>  
    {/* <Card.Text>  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
    </Card.Text>   */}
    <Button variant="primary">CAR FOR RENT</Button>  
  </Card.Body>  
</Card>  <br></br>
<Card>  
  <Card.Img variant="top" src={c8} />  
  <Card.Body>  
    <Card.Title>FERRARI</Card.Title>  
    {/* <Card.Text>  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
    </Card.Text>   */}
    <Button variant="primary">CAR FOR RENT</Button>  
  </Card.Body>  
</Card>  <br></br>
</CardGroup> 
</div><br></br>

</div> 

  );  
}  
export default View_Available_Cars;