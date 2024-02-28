import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Icon from "../assets/images/icon.svg";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={Icon}
              width="30px"
              height="30px"
              className="d-inline-block align-top"
            />{" "}
            Ariston Catipay
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} to="/experience">
                Experience
              </Nav.Link>
              <Nav.Link as={Link} to="/awards">
                Awards
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
