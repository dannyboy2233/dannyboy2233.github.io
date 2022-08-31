import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import HeaderLink from './HeaderLink';

const Header = () => (
  <Navbar
    bg="white"
    expand="lg"
    className="border-bottom p-0 align-items-stretch"
  >
    <HeaderLink to="/" className="border-right px-4 py-3">
      David Charatan
    </HeaderLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
    <Navbar.Collapse>
      <Nav className="p-2">
        <HeaderLink to="/research">Research</HeaderLink>
        <HeaderLink to="/projects">Projects</HeaderLink>
        <HeaderLink to="/resume">Resume</HeaderLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
