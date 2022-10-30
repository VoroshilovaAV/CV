import React from 'react';
import { ProjectCardType } from '../../types/types';
import './index.scss';

const ProjectCard = (props: ProjectCardType) => {
  const { image, name, tech, description, deploy, gh } = props;

  return (
    <article className="project">
      <img className="project__img" src={image} alt="project image" />
      <div className="project__text">
        <h4 className="project__title">{name}</h4>
        <div className="project__subtitle project__subtitle_small">{tech}</div>
        <div className="project__bar"></div>
        <div className="project__preview-txt">{description}</div>
        <ul className="project__tagbox">
          <li className="tag__item">
            <a href={gh} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li className="tag__item">
            <a href={deploy} target="_blank" rel="noreferrer">
              &#10032; View Deploy
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
