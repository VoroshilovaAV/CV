import React from 'react';
import { Link } from 'react-scroll';

interface Props {
  closeSideBar: () => void;
}

const HeaderLinksMobile: React.FC<Props> = ({ closeSideBar }) => {
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
        Skills
      </Link>
      <Link
        onClick={closeSideBar}
        className="bm-item"
        to="projects"
        smooth={true}
        offset={-150}
        duration={500}
      >
        Projects
      </Link>
      <Link
        onClick={closeSideBar}
        className="bm-item"
        to="experience"
        smooth={true}
        offset={-150}
        duration={500}
      >
        Experience
      </Link>
      <Link
        onClick={closeSideBar}
        className="bm-item"
        to="education"
        smooth={true}
        offset={-150}
        duration={500}
      >
        Education
      </Link>
    </>
  );
};

export default HeaderLinksMobile;
