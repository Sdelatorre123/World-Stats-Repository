import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import SingUpForm from './SingupForm';
// import LoginForm from './LoginForm';

// import Auth from '../utils/auth';



function WorldCupNavbar() {
    return (
      <Navbar bg="primary" expand="lg">
        <Container fluid>
          <Navbar.Brand className='text-white'>WorldCup
  
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="home"><h3 className='text-white mainlink'  >Home</h3></Nav.Link>
              <Nav.Link href="worldcup"><h3 className='text-white mainlink'  >WorldCup</h3></Nav.Link>
  
              <Nav.Link href="login"><h3 className='text-white mainlink'  >Login</h3></Nav.Link>
              <Nav.Link href="signup"><h3 className='text-white mainlink'  >SignUp</h3></Nav.Link>
            
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
    );
  }
  
  export default WorldCupNavbar;