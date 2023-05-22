import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/deputados">ApiDeputados</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Deputados" id="basic-nav-dropdown">
              <Link className='dropdown-item' href="/filmes"></Link>
              <Link className='dropdown-item' href="/filmes/lancamentos"></Link>
              <Link className='dropdown-item' href="/filmes/cartaz"></Link>
              <Link className='dropdown-item' href="/filmes/top"></Link>
            </NavDropdown>
            <NavDropdown title="Deputados" id="basic-nav-dropdown">
              <Link className='dropdown-item' href="/series"></Link>
              <Link className='dropdown-item' href="/series/cartaz"></Link>
              <Link className='dropdown-item' href="/series/lancamentos"></Link>
              <Link className='dropdown-item' href="/series/top"></Link>
            </NavDropdown>
            <Link className='nav-link' href="/atores"></Link>
            <Link className='nav-link' href="/generos"></Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho