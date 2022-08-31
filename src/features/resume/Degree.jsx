import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ name, university, years, notes, ...props }) => (
  <div {...props}>
    <div className="d-flex flex-row justify-content-between">
      <div className="font-weight-bold">
        {`${name}${notes ? ', ' : ''}`}
        <span className="font-italic">{notes}</span>
      </div>
      <div>{years}</div>
    </div>
    <div className="d-flex flex-row justify-content-between">
      <div>{university}</div>
    </div>
  </div>
);

Degree.propTypes = {
  name: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  years: PropTypes.string.isRequired,
  notes: PropTypes.string,
};

Degree.defaultProps = {
  notes: '',
};

export default Degree;
