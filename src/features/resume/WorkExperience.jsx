import React from 'react';
import PropTypes from 'prop-types';

const WorkExperience = ({ company, location, position, dates, bullets }) => (
  <div className="mb-3">
    <div className="d-flex flex-row justify-content-between">
      <div className="font-weight-bold">{`${company} — ${location}`}</div>
      <div>{dates}</div>
    </div>
    <div className="font-italic">{position}</div>
    <ul>
      {bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  </div>
);

WorkExperience.propTypes = {
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string.isRequired),
};

WorkExperience.defaultProps = {
  bullets: [],
};

export default WorkExperience;
