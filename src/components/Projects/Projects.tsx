import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../ProjectCard/ProjectCard';
import { CardProject } from '../../constants/index';
import './index.scss';

const Projects = () => {
  const { t } = useTranslation(['main']);

  return (
    <section id="projects">
      <h3>{t('recentProjects')}</h3>
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
