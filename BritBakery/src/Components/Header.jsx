import React from "react";
import { Container, Navbar, Nav, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();

  function handleBrandClick() {
    navigate("/");
  }
  return (
    <Container fluid>
      <Row>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand onClick={handleBrandClick} className="title">
              <h1>Britt's Bakery</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <NavLink className="navLink" to="/">
                    Home
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink className="navLink" to="/gallery">
                    Gallery
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink className="navLink" to="/contact">
                    Contact
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      
    </Container>
      
);
}

export default Header;
