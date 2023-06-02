import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Cabecalho = () => {
  return (
    <>
      <Navbar bg="warning" expand="lg">
        
      <Container fluid>
        <Navbar.Brand href="#">
        <img
              src=''
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Despesas</Nav.Link>
            <Nav.Link href='#action3'>vjdkrugil</Nav.Link>
            <Nav.Link href="#">
              Deputados
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

    </>
  )
}

export default Cabecalho