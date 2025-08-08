import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function NavBar(props) {
    const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
    return (
       <div className="position-sticky top-0" style={{ zIndex: 1030 }}>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">React Apps</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/app" className="nav-link">Calculator</Link>
                <Link to="/todo" className="nav-link">ToDo</Link>

              {/* Hover-enabled Dropdown */}
              <NavDropdown
                title="More"
                id="basic-nav-dropdown"
                show={showDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/course">Course</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/map">Map</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/team">Team</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
 );
}

export default NavBar;