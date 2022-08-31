import React from 'react';
import Masonry from 'react-masonry-css';
import ProjectCard from '../projects/ProjectCard';
import Page from './Page';
import '../projects/masonry.scss';
import projects from '../projects/projects';

const breakpoints = {
  default: 3,
  992: 2,
  768: 1,
};

const Projects = () => (
  <Page
    title="Projects"
    subtitle="This page contains a selection of the projects and paper implementations I've completed."
    invisible
  >
    <Masonry
      breakpointCols={breakpoints}
      className="projects-masonry-grid"
      columnClassName="projects-masonry-column"
    >
      {projects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </Masonry>
  </Page>
);

export default Projects;
