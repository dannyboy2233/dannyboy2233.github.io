import React from 'react';
import PropTypes from 'prop-types';
import './Publication.scss';

const Publication = ({
  title,
  paperUrl,
  repoUrl,
  authors,
  status,
  venue,
  thumbnailSource,
  ...props
}) => {
  // Generate a comma-separated list of authors.
  const authorLinks = authors.map(({ name, url: authorUrl }) => (
    <a href={authorUrl} className="link-secondary" key={name}>
      {name}
    </a>
  ));
  const authorBlob = [];
  if (authorLinks.length > 0) {
    authorBlob.push('(with ');
    authorLinks.forEach((authorLink, index) => {
      authorBlob.push(authorLink);
      if (index === authorLinks.length - 2) {
        if (authorLinks.length === 2) {
          authorBlob.push(' and ');
        } else {
          authorBlob.push(', and ');
        }
      } else if (index < authorLinks.length - 2) {
        authorBlob.push(', ');
      }
    });
    authorBlob.push(')');
  }

  return (
    <div {...props}>
      <div className="d-flex flex-column">
        <div>
          <a href={paperUrl} className="publication-link">
            {title}
          </a>{' '}
          {authorBlob}
        </div>

        <div>
          {status} <i>{venue}</i>
        </div>
        <a href={repoUrl} className="link-secondary">
          Download replication code and data.
        </a>
      </div>
    </div>
  );
};

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  paperUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  status: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  thumbnailSource: PropTypes.string.isRequired,
};

export default Publication;
