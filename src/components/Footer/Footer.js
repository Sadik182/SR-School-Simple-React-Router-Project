import React from 'react';
import './Footer.css'
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const Footer = () => {
    
    return (
        <div className="footer">
            <div  className="left">
                <h1>Stay Update</h1>
                  <InputGroup className="mb-3 my-4 w-75 ms-5">
                    <FormControl
                    placeholder="Enter Your Email"
                    aria-label="Enter Your Email"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary bg-white" >
                    Subscribe Now
                    </Button>
                    
                </InputGroup>
                <p>Copyright ©  2021 All rights reserved Md. Sadikur Rahman </p>
            </div>
            
        </div>
    );
};

export default Footer;