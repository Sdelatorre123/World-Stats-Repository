import { Button, Container, Form, Navbar, Nav } from 'react-bootstrap';

import Subscription from './Success';
import SingUpForm from './SingupForm';
import LoginForm from './LoginForm';
import Discussion from '../pages/Discussion';
import Subscription from './Subscription'

import Auth from '../utils/auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { handleError } from '@apollo/client/link/http/parseAndCheckHttpResponse';


function WorldCupNavbar() {
    return (
      <>
      <Navbar bg="primary" expand="lg">
        <Container fluid>
          <Navbar.Brand className='text-white'>WorldStat
  
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="login"><h3 className='text-white mainlink'  >Login</h3></Nav.Link>
              <Nav.Link href="signup"><h3 className='text-white mainlink'  >SignUp</h3></Nav.Link>
              <Nav.Link href="discussion"><h3 className='text-white mainlink'  >Discussion</h3></Nav.Link>
              <Nav.Link href="subscription"><h3 className='text-white mainlink'  >Subscription</h3></Nav.Link>
            
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className='text-white mainlink' variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
  }
  
  export default WorldCupNavbar;