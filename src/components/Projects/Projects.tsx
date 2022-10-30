import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { CardProject } from '../../constants/index';
import './index.scss';

const Projects = () => {
  return (
    <section id="projects">
      <h3>Recent projects</h3>
      {CardProject.map((item) => (
        <ProjectCard
          key={item.id}
          image={item.image}
          name={item.name}
          tech={item.tech}
          description={item.description}
          deploy={item.deploy}
          gh={item.gh}
        />
      ))}
    </section>
  );
};

export default Projects;
