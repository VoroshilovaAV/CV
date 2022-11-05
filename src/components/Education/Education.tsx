import React from 'react';
import { useTranslation } from 'react-i18next';
import { Courses } from '../../constants';
import EducationCard from '../EducationCard/EducationCard';
import './index.scss';

const Education = () => {
  const { t } = useTranslation(['main']);

  return (
    <section id="education">
      <h3>{t('education')}</h3>
      {Courses.map((item) => (
        <EducationCard
          key={item.id}
          id={item.id}
          year={t(`${item.id}.year`, { keyPrefix: 'cardCourses' })}
          company={t(`${item.id}.company`, { keyPrefix: 'cardCourses' })}
          name={t(`${item.id}.name`, { keyPrefix: 'cardCourses' })}
          result={t(`${item.id}.result`, { keyPrefix: 'cardCourses' })}
          link={item.link}
        />
      ))}
    </section>
  );
};

export default Education;
