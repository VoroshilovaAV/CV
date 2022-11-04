import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Photo } from '../../assets/images/photo.svg';
import AnimatedBalls from '../AnimatedBalls/AnimatedBalls';
import CVLink from '../../assets/docs/cv.pdf';
import './index.scss';

const AboutMe = () => {
  const { t } = useTranslation(['main']);

  return (
    <>
      <div className="aboutme-wrapper">
        <section className="aboutme-wrapper__text">
          <h3>
            <span>&#060;</span>
            {t('hello')}
            <span>/&#062;</span>, {t('i')} <span>{t('anna')}</span>
          </h3>
          <h1>Frontend Developer</h1>
          <div className="aboutme-wrapper__btn">
            <div className="aboutme-wrapper__link">
              <a href={CVLink} download="Voroshilova_CV.pdf">
                {t('CV')}
              </a>
            </div>
          </div>
          <AnimatedBalls />
        </section>
        <Photo />
      </div>
      <section className="aboutme-info">
        <p>
          <span>&#060;</span>
          {t('p1')}
          <span>/&#062;</span>
          <br />
          <span>&#060;</span>
          {t('p2')}
          <span>/&#062;</span>
          <br />
          <span>&#060;</span>
          {t('p3')}
          <span>/&#062;</span>
          <br /> <span>&#060;</span>
          {t('p4')}
          <span>/&#062;</span>
        </p>
      </section>
    </>
  );
};

export default AboutMe;
