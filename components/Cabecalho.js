import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Cabecalho = () => {



  return (
    <>
      <Navbar bg="warning" expand="lg">
        
      <Container fluid>
        <Navbar.Brand href="#">
        <img src={'https://www.camara.leg.br/midias/image/2022/03/marca-camara-filete-preto.png'} alt="image.logo.png" style={{ height: '30px', width: 'auto', marginTop: '10px', marginBottom: '10px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/noticias">
              Notícias
            </Nav.Link>
            <Nav.Link href='/partidos'>
              Partidos
            </Nav.Link>
            <Nav.Link href="/deputados">
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