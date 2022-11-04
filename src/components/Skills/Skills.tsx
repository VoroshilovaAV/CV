import React from 'react';
import { useTranslation } from 'react-i18next';
import { CardsSkills } from '../../constants';
import SkillCard from '../SkillCard/SkillCard';
import './index.scss';

const Skills = () => {
  const { t } = useTranslation(['main']);

  return (
    <section id="skills">
      <h3>{t('myHardSkills')}</h3>
      <div className="skills-cards">
        {CardsSkills.map((item) => (
          <SkillCard key={item.id} image={item.image} name={item.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
