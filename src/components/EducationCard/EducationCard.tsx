import React from 'react';
import { CourseType, lastCardId } from '../../types/types';

const EducationCard = (props: CourseType) => {
  const { id, year, company, name, result, link } = props;
  return (
    <>
      <section className="education-wrapper">
        <div className="education-wrapper__info">
          <p>{year}</p>
          <div className="education-wrapper__bar"></div>
          <p className="education-wrapper__info_bold">{company}</p>
        </div>
        <div className="education-wrapper__info">
          <p className="education-wrapper__info_bold">{name}</p>
          {id !== lastCardId && (
            <a href={link} target="_blank" rel="noreferrer">
              <span>&#10004;</span> {result}
            </a>
          )}
          {id === lastCardId && (
            <p>
              <span>&#10004;</span> {result}
            </p>
          )}
        </div>
      </section>
      {id !== lastCardId && <hr></hr>}
    </>
  );
};

export default EducationCard;
