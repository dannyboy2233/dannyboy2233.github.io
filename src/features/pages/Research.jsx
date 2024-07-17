import React from 'react';
import publications from '../research/publications';
import Publication from '../research/Publication';
import ongoingworks from '../research/ongoingworks';
import OngoingWork from '../research/OngoingWork';
import Page from './Page';

const Research = () => {
  const publicationNodes = publications.map(
    (
      { title, paperUrl, repoUrl, thumbnailSource, authors, status, venue },
      index
    ) => (
      <Publication
        title={title}
        paperUrl={paperUrl}
        repoUrl={repoUrl}
        thumbnailSource={thumbnailSource}
        authors={authors}
        status={status}
        venue={venue}
        key={title}
        className={index < publications.length - 1 ? 'mb-4' : ''}
      />
    )
  );

  const ongoingWorkNodes = ongoingworks.map(
    ({ title, description, authors }, index) => (
      <ul>
        <li>
          <OngoingWork
            title={title}
            description={description}
            authors={authors}
            className={index < publications.length - 1 ? 'mb-4' : ''}
          />
        </li>
      </ul>
    )
  );

  const subtitle = (
    <>
      As an undergraduate, I was a research assistant for{' '}
      <a href="https://raulsanchezdelasierra.com/">Raúl Sánchez de la Sierra</a>{' '}
      (now at the University of Chicago&apos;s Harris School of Public Policy)
      and <a href="https://www.jblumenstock.com/">Josh Blumenstock</a> at
      Berkeley&apos;s School of Information.
    </>
  );

  return (
    <Page title="Research" subtitle={subtitle}>
      <div className="mb-4">
        <h2>Papers Under Revision</h2>
        {publicationNodes}
      </div>
      <div className="mb-4">
        <h2>Ongoing Research</h2>
        {ongoingWorkNodes}
      </div>
    </Page>
  );
};

export default Research;
