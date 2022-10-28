import React from 'react';
import { ReactComponent as Photo } from '../../assets/images/photo.svg';
import './index.scss';

const AboutMe = () => {
  return (
    <div className="aboutme-wrapper">
      <section className="aboutme-wrapper__text">
        <h1>Frontend Developer</h1>
        <h3>Anna Voroshilova</h3>
        <div className="aboutme-wrapper__btn">
          <div className="aboutme-wrapper__link">
            <a href="#">Download CV</a>
          </div>
        </div>
      </section>
      <Photo />
    </div>
  );
};

export default AboutMe;
