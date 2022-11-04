import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import './index.scss';

const HeaderLinksDesktop = () => {
  const { t } = useTranslation(['main']);

  return (
    <>
      <Link to="skills" spy={true} smooth={true} offset={-150} duration={500}>
        {t('skills')}
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        {t('projects')}
      </Link>
      <Link
        activeClass="active"
        to="experience"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        {t('experience')}
      </Link>
      <Link
        activeClass="active"
        to="education"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        {t('education')}
      </Link>
    </>
  );
};

export default HeaderLinksDesktop;
