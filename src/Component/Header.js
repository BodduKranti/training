import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="primary" expand="lg" className='navbar-dark shadow'>
                <Container>
                    <Navbar.Brand as={NavLink} to="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            <NavDropdown title="Product" id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to="/product">Product</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/productadd">
                                    Product Add
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
