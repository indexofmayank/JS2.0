import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Mynavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Janta Group</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">AtalTinkering Lab</Nav.Link>
            <Nav.Link href='#link'>Arificail Intelligence</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
             <NavDropdown title="Janta Digital Platfroms" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Online Summer Camp</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Janta Coders - online classes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Janta AI Connect AI & MI</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Janta Coders
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#link'>Acheivements</Nav.Link>
            <Nav.Link href='#link'>Shop</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynavbar;