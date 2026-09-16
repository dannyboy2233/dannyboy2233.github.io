import React from 'react';
// import { Link } from 'react-router-dom';
import { LinkedinFilled, GithubFilled } from '@ant-design/icons';
import Page from './Page';
import '../home/Home.scss';
import Me from '../home/me.jpg';
import IconButton from '../home/IconButton';
// import EmailButton from '../home/EmailButton';

const Home = () => (
  <Page padding="p-4">
    <div className="d-flex flex-row align-items-center justify-content-center home-breakpoint">
      <img src={Me} alt="Me" className="me p-4" />
      <div className="p-4">
        <h1>Daniel Cohen</h1>
        <div>
          I am a PhD candidate in Managerial Economics &amp; Strategy at
          Northwestern University&apos;s Kellogg School of Management. I am also
          a Visiting Scholar with the Microeconomics Research Team at the{' '}
          <a
            href="https://www.chicagofed.org/people/teams/microeconomics/index"
            target="_blank"
            rel="noopener noreferrer"
          >
            Federal Reserve Bank of Chicago
          </a>{' '}
          and a Visiting Researcher at{' '}
          <a
            href="https://www.banxico.org.mx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Banco de México
          </a>
          . Before graduate school, I was a research fellow in the Economics and
          Computation group at{' '}
          <a
            href="https://www.microsoft.com/en-us/research/lab/microsoft-research-new-england/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Research New England
          </a>
          . I graduated from UC Berkeley in 2021 with High Distinction and High
          Honors, where I studied Economics and Data Science. <br />
          <br />
          In my research, I use novel data (primarily administrative) to
          understand how firms compete in markets for consumer financial
          products. In my free time, I can be found hiking, biking, climbing,
          snowboarding, or obsessing over the perfect espresso.
          <br />
          <br /> I&apos;m grateful to be supported in my graduate studies by the
          National Science Foundation&apos;s{' '}
          <a
            href="https://www.nsfgrfp.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Graduate Research Fellowship Program
          </a>{' '}
          under Grant No. DGE-2234667. I&apos;m also grateful for
          project-specific support from{' '}
          <a
            href="https://www.banxico.org.mx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Banco de México
          </a>
          , Northwestern&apos;s{' '}
          <a
            href="https://www.kellogg.northwestern.edu/academics-research/global-poverty-research-lab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Global Poverty Research Lab
          </a>
          , and Northwestern&apos;s{' '}
          <a
            href="https://buffett.northwestern.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roberta Buffett Institute for Global Affairs
          </a>
          .
        </div>
        <br /> <span style={{ fontWeight: 'bold' }}>Email:</span>{' '}
        [first].[last]@kellogg.northwestern.edu
        {/* <div className="mt-2">
          <Link to="/research">Research</Link>
          <span className="mx-3 text-secondary">|</span>
          <Link to="/projects">Projects</Link>
          <span className="mx-3 text-secondary">|</span>
          <Link to="/resume">Resume</Link>
</div> */}
        <div className="mt-3 d-flex flex-row">
          {/* <IconButton
            className="mr-2"
            href="mailto:daniel.cohen@kellogg.northwestern.edu"
          >
            <MailOutlined />
</IconButton> */}
          <IconButton
            className="mr-2"
            href="https://www.linkedin.com/in/daniel-cohen-12312a140"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinFilled />
          </IconButton>
          <IconButton
            href="https://github.com/dannyboy2233"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubFilled />
          </IconButton>
        </div>
      </div>
    </div>
  </Page>
);

export default Home;
