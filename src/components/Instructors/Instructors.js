import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './Instructors.css';
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/3.jpg';

const Instructors = () => {
    return (
     <div>
            <h1 className="h1 my-4 text-primary fw-bold">Our Instructors</h1>
       <div>
        <CardGroup>
          <Card className="mx-4 rounded" >
            <Card.Img variant="top" src={img1}/>
            <Card.Body>
              <Card.Title>Benjamin Stone</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-1 rounded">
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>Katleen Stone</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            
          </Card>
          <Card className="mx-4 rounded">
            <Card.Img variant="top" src={img3}/>
            <Card.Body>
              <Card.Title>Sadie White</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
       </div>
     </div>
    );
};

export default Instructors;