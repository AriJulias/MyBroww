import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Product</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
