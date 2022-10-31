import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image
            src="images/pokemon-logo-white-transparent.png"
            fluid
            width={200}
          />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#">
            <FaGithubAlt size={28} className="white icon" />
          </Nav.Link>
          <Nav.Link href="#">
            <FaLinkedin size={28} className="white  icon" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
