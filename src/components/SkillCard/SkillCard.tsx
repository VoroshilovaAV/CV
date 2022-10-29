import React from 'react';
import { SkillCardType } from '../../types/types';
import './index.scss';

const SkillCard = (props: SkillCardType) => {
  const { image, name } = props;

  return (
    <div className="skill-card">
      <img src={image} alt="skill" />
      <div className="skill-card__info">
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default SkillCard;
