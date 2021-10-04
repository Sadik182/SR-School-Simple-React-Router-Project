import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
               
           <Container>
               <Navbar.Brand>SR</Navbar.Brand>
           <Nav className = "ms-auto p-3 fw-bold">
                <Stack direction="horizontal" gap={5}>
                <NavLink  className="text-decoration-none text-white ps-2" to="/home">Home</NavLink>
                <NavLink  className="text-decoration-none text-white ps-2" to="/about">About</NavLink>
                <NavLink  className="text-decoration-none text-white ps-2" to="/services">Services</NavLink>
                <NavLink  className="text-decoration-none text-white ps-2" to="/instructors">Instructors</NavLink>
                </Stack>
            </Nav>
           </Container>
            </Navbar>  
        </div>
    );
};

export default Header;