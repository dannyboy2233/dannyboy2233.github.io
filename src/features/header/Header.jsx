import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import HeaderLink from './HeaderLink';
import HeaderAnchor from './HeaderAnchor';

const Header = () => (
  <Navbar
    bg="white"
    expand="lg"
    className="border-bottom p-0 align-items-stretch"
  >
    <HeaderLink to="/" className="border-right px-4 py-3">
      Daniel Cohen
    </HeaderLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
    <Navbar.Collapse>
      <Nav className="p-2">
        <HeaderLink to="/research">Research</HeaderLink>
        {/* <HeaderLink to="/projects">Projects</HeaderLink> */}
        <HeaderAnchor to="https://www.dropbox.com/s/bmxlo05oi67zp2h/Daniel%20Cohen%20Academic%20CV.pdf?dl=0">
          CV
        </HeaderAnchor>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
