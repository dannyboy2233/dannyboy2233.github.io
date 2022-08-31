import React from 'react';
import PropTypes from 'prop-types';
import './Publication.scss';

const Publication = ({
  title,
  url,
  authors,
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
  authorLinks.forEach((authorLink, index) => {
    authorBlob.push(authorLink);
    if (index === authorLinks.length - 2) {
      authorBlob.push(', and ');
    } else if (index < authorLinks.length - 2) {
      authorBlob.push(', ');
    }
  });

  return (
    <div {...props}>
      <div className="d-flex flex-row">
        <img
          src={thumbnailSource}
          alt={`Thumbnail for ${title}`}
          className="publication-image mr-3 border"
        />
        <div className="d-flex flex-column">
          <a href={url} className="publication-link">
            {title}
          </a>
          <div>{authorBlob}</div>
          <div className="font-italic">{venue}</div>
        </div>
      </div>
    </div>
  );
};

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  venue: PropTypes.string.isRequired,
  thumbnailSource: PropTypes.string.isRequired,
};

export default Publication;
