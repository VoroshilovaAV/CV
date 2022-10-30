import React from 'react';
import { CardsSkills } from '../../constants';
import SkillCard from '../SkillCard/SkillCard';
import './index.scss';

const Skills = () => {
  return (
    <section id="skills">
      <h3>My hard skills</h3>
      <div className="skills-cards">
        {CardsSkills.map((item) => (
          <SkillCard key={item.id} image={item.image} name={item.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
