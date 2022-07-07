import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Service = (props) => {
    const {id, img, name, description} = props.service;
    return (
        <div>
             <Col>
            
            <Card className='mb-4 h-100'>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                 {description}
                
                </Card.Text>
                <Link to={`/serviceDetail/${id}`}>
                <Button className='btn btn-secondary'>Details {name} </Button>
                </Link>
              </Card.Body>
            </Card>
            </Col>
        </div>
    );
};

export default Service;