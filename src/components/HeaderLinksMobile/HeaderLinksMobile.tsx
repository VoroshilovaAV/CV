import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

interface Props {
  closeSideBar: () => void;
}

const HeaderLinksMobile: React.FC<Props> = ({ closeSideBar }) => {
  const { t } = useTranslation(['main']);

  return (
    <>
      <Link
        onClick={closeSideBar}
        className="bm-item"
        to="skills"
        smooth={true}
        offset={-150}
        duration={500}
      >
        {t('skills')}
      </Link>
      <Link
        onClick={closeSideBar}
        className="bm-item"
        to="projects"
        smooth={true}
        offset={-150}
        duration={500}
      >
        {t('projects')}
      </Link>
      <Link
        onClick={closeSideBar}
        className="bm-item"
        to="experience"
        smooth={true}
        offset={-150}
        duration={500}
      >
        {t('experience')}
      </Link>
      <Link
        onClick={closeSideBar}
        className="bm-item"
        to="education"
        smooth={true}
        offset={-150}
        duration={500}
      >
        {t('education')}
      </Link>
    </>
  );
};

export default HeaderLinksMobile;
