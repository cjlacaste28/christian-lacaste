import React from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Assets/logo.png';
import './NavbarStyle.css';



const NavbarComponent = () => {
	return (
      <Navbar className='navbar__container' expand="lg" id='home'>
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt='logo' id="logo-img"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Row className='nav-link__container'>
                  <Nav.Link href="#home" className='ls-3'>Home</Nav.Link>
                  <Nav.Link href="#about" className='ls-3'>About</Nav.Link>
                  <Nav.Link href="#skills" className='ls-3'>Skills</Nav.Link>
                  <Nav.Link href="#projects" className='ls-3'>Projects</Nav.Link>
                  <Nav.Link href="#contacts" className='ls-3'>Contacts</Nav.Link>
                </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
	)
}

export default NavbarComponent;