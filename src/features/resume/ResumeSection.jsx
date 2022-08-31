import React from 'react';
import PropTypes from 'prop-types';

const ResumeSection = ({ name, last, children }) => (
  <div className={last ? '' : 'mb-4'}>
    <h2 className="resume">{name}</h2>
    {children}
  </div>
);

ResumeSection.propTypes = {
  name: PropTypes.string.isRequired,
  last: PropTypes.bool,
  children: PropTypes.node,
};

ResumeSection.defaultProps = {
  last: false,
  children: null,
};

export default ResumeSection;
