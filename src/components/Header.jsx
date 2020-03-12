import React from 'react';
import { Navbar, Nav, NavDropdown }from 'react-bootstrap';
import './../Header.css';

function Header(){
  const HeaderGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderTop: '8px solid #3C0142cd ',
    borderBottom: '8px solid #3C0142cd ',
    backgroundColor: '#E5FCF5'
  }




  return (
    <>
    <Navbar style={HeaderGrid}>
      <Navbar.Brand href="#home" className="brandName">My MS Stories</Navbar.Brand>
      <div id="header">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#signin">Sign In</Nav.Link>
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              <NavDropdown title="Medical" className="collapsible-nav-dropdown">
                <NavDropdown.Item href="#med-digest">See all entries</NavDropdown.Item>
                <NavDropdown.Item href="#med-milestone">Add new medical</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Selfcare" className="collapsible-nav-dropdown">
                <NavDropdown.Item href="#exp-digest">See all entries</NavDropdown.Item>
                <NavDropdown.Item href="#exp-milestone">Add new selfcare</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Journal" className="collapsible-nav-dropdown">
                <NavDropdown.Item href="#journal">See all entries</NavDropdown.Item>
                <NavDropdown.Item href="#journal-entry">Add new journal</NavDropdown.Item>
              </NavDropdown>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </>
);
}

export default Header;
