import React from 'react';
import PropTypes from 'prop-types';

const OngoingWork = ({ title, description, ...props }) => (
  <div {...props}>
    <div>
      <span style={{ fontWeight: 'bold' }}>{title}</span>. {description}
    </div>
  </div>
);

OngoingWork.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default OngoingWork;
