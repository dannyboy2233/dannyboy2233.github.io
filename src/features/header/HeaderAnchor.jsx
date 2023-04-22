import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';

const HeaderLink = ({ className, children, to, ...props }) => (
  <Nav.Link
    as="a"
    href={to}
    target="_blank"
    className={`${className} px-3 py-2`}
    {...props}
  >
    {children}
  </Nav.Link>
);

HeaderLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

HeaderLink.defaultProps = {
  className: '',
  children: null,
};

export default HeaderLink;
