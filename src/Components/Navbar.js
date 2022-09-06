import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (<>
    <Navbar expand="lg navbar-dark" style={{
        backgroundColor:"black"
    }}>
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href=" https://stadium-stars.gitbook.io/docs/" className='nav-link text-white ms-2'>WHITEPAPER</Nav.Link>
            <Nav.Link href="#grid" className='nav-link text-white ms-2'>About US</Nav.Link>
            <Nav.Link href="#sec4h" className='nav-link text-white ms-2'>LINEUP</Nav.Link>
            <Nav.Link href="#footer" className='nav-link text-white ms-2'>FAQ</Nav.Link>
            <Nav.Link href=" https://discord.gg/stadiumstars" className='nav-link text-white ms-2'>DISCORD</Nav.Link>
            <Nav.Link href=" https://twitter.com/stadiumstarsnft" className='nav-link text-white ms-2'>TWITTER</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    </>);
}

export default NavScrollExample;
