import React from 'react';
import PropTypes from 'prop-types';

const InformationPoint = ({ heading, children }) => (
  <div>
    <span className="font-weight-bold">{`${heading}:`}</span> {children}
  </div>
);

InformationPoint.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default InformationPoint;
