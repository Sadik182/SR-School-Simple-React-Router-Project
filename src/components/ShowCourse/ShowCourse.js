import React from 'react';
import { Button } from 'react-bootstrap';
import './ShowCourse.css'
// Using Props For Receving data
const ShowCourse = (props) => {
    // Destructing 
    const {CourseName, image, CourseFee} = props.course;
    return (
        <div>
            <img src={image} alt="" />
            <h2>{CourseName}</h2>
            <p>Course Fee: {CourseFee}</p>
            <Button>Show Details</Button>
        </div>
    );
};

export default ShowCourse;