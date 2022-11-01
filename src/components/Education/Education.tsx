import React from 'react';
import { Courses } from '../../constants';
import EducationCard from '../EducationCard/EducationCard';
import './index.scss';

const Education = () => {
  return (
    <section id="education">
      <h3>Education</h3>
      {Courses.map((item) => (
        <EducationCard
          key={item.id}
          id={item.id}
          year={item.year}
          company={item.company}
          name={item.name}
          result={item.result}
          link={item.link}
        />
      ))}
    </section>
  );
};

export default Education;
