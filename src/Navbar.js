import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function NavBar () {

    return (     
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">HelpU</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#JumpTo">Jump To</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                {/* update search function  */}
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default NavBar;