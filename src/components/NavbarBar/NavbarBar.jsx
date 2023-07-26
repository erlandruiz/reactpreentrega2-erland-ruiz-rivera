

// Agregamos ReactBoosTrap para Navbar
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//Agregando el CartWidget


CardWidget

import "./NavbarBar.css";
import { Link, Outlet } from "react-router-dom";
import { CardWidget } from '../CardWidget/CardWidget';



export const NavbarBar = () => {
  return (
    <>
    <header>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="navbar-container">
         

          <Navbar.Brand as={Link} to={"/"} className="navbar-brand-titulo">Erland EPP</Navbar.Brand>
          

          
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to ="/">Todos Los Productos</Nav.Link>
              <Nav.Link as={Link} to={"nosotros"}>Nosotros</Nav.Link>
              <Nav.Link as={Link} to={"conocenos"}>Conocenos</Nav.Link>
              <Nav.Link as={Link} to={"contactanos"}>Contáctanos</Nav.Link>

          

              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={"category/auditiva"}>
                  Proteccion Auditiva
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"category/cabeza"}>
                  Proteccion de Cabeza
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"category/manos"}>
                  Protección de Manos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to={"ofertas/true"}>Ofertas</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <CardWidget/>
        </Container>
      </Navbar>

    </header>
      
      <Outlet/>
      
    </>
  );
};
