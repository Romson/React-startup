import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

export const Navbarmenu = () => (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="#home">
            <img className="logo img-fluid" src="https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/907967/logo256_20_1_.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>             
            </Nav>
            <Form inline>
                <Button className="buttonLogin" variant="outline-light"><i className="fas fa-user"></i> Login</Button>
                <Button variant="outline-light">Register</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
)