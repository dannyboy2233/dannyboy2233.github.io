import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedinFilled, GithubFilled } from '@ant-design/icons';
import Page from './Page';
import '../home/Home.scss';
import Me from '../home/me.jpg';
import IconButton from '../home/IconButton';

const Home = () => (
  <Page padding="p-4">
    <div className="d-flex flex-row align-items-center justify-content-center home-breakpoint">
      <img src={Me} alt="Me" className="me p-4" />
      <div className="p-4">
        <h1>David Charatan</h1>
        <div>
          Hello! I&apos;m a research engineer at{' '}
          <a href="https://csm.ai/">Common Sense Machines</a> and a former
          undergraduate student at Brown University. I will be a PhD student at
          the{' '}
          <a href="https://www.scenerepresentations.org/">
            Scene Representation Group at MIT EECS
          </a>{' '}
          starting in September 2022. Click the links below to learn more!
        </div>
        <div className="mt-2">
          <Link to="/research">Research</Link>
          <span className="mx-3 text-secondary">|</span>
          <Link to="/projects">Projects</Link>
          <span className="mx-3 text-secondary">|</span>
          <Link to="/resume">Resume</Link>
        </div>
        <div className="mt-4 d-flex flex-row">
          <IconButton
            className="mr-2"
            href="https://www.linkedin.com/in/davidcharatan/"
          >
            <LinkedinFilled />
          </IconButton>
          <IconButton href="https://github.com/dcharatan">
            <GithubFilled />
          </IconButton>
        </div>
      </div>
    </div>
  </Page>
);

export default Home;
