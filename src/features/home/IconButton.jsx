import React from 'react';
import PropTypes from 'prop-types';
import './Home.scss';

const IconButton = ({ href, children, className }) => (
  <a href={href} className={`icon-button ${className}`}>
    {children}
  </a>
);

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

IconButton.defaultProps = {
  className: '',
};

export default IconButton;
