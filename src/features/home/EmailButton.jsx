import React from 'react';
import PropTypes from 'prop-types';
import './Home.scss';

/* const EmailButton = ({ me, server, children, className }) => (
  <a
    href={`mailto:${encodeURIComponent(`${me}@${server}`)}`}
    className={`icon-button ${className}`}
  >
    {children}
  </a>
); */

const handleClick = (e) => {
  e.preventDefault();
  const email = 'daniel.cohen@kellogg.northwestern.edu';
  const encodedEmail = encodeURIComponent(email);
  window.location.href = `mailto:${encodedEmail}`;
};

const EmailButton = ({ children, className }) => (
  <button
    type="button"
    style={{
      backgroundColor: 'white',
      boxShadow: 'white',
      outline: 'white',
      color: 'default',
      elevation: 0,
    }}
    onClick={handleClick}
    className={`icon-button ${className}`}
  >
    {children}
  </button>
);

EmailButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

EmailButton.defaultProps = {
  className: '',
};

export default EmailButton;
