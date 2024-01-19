import React from 'react';
import PropTypes from 'prop-types';

const OngoingWork = ({ title, description, authors, ...props }) => {
  // Generate a comma-separated list of authors.
  const authorLinks = authors.map(({ name, url: authorUrl }) => (
    <a href={authorUrl} className="link-secondary" key={name}>
      {name}
    </a>
  ));

  const authorBlob = [];
  if (authorLinks.length > 0) {
    authorBlob.push(' (with ');
    authorLinks.forEach((authorLink, index) => {
      authorBlob.push(authorLink);
      if (index === authorLinks.length - 2) {
        authorBlob.push(' and ');
      } else if (index < authorLinks.length - 2) {
        authorBlob.push(', ');
      }
    });
    authorBlob.push(')');
  }

  return (
    <div {...props}>
      <div>
        <span style={{ fontWeight: 'bold' }}>{title}</span>
        {authorBlob}. {description}
      </div>
    </div>
  );
};

OngoingWork.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
};

export default OngoingWork;
