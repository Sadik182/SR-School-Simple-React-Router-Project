import React from 'react';
import { Button } from 'react-bootstrap';
// Using Props For Receving data
const ShowServices = (props) => {
    // Destructring From Props
    const {CourseName, image, CourseFee} = props.service;
    return (
        <div>
           <img src={image} alt="" /> 
           <h2>{CourseName}</h2>
           <p>Course Fee: {CourseFee}</p>
           <Button>Show Details</Button>

        </div>
    );
};

export default ShowServices;