import React from 'react';
import { Link } from 'react-scroll';
import './index.scss';

const Header = () => {
  return (
    <>
      <header>
        <section>Logo</section>
        <section className="header-links">
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Experience
          </Link>
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Education
          </Link>
          <Link
            activeClass="active"
            to="languages"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Languages
          </Link>
        </section>
      </header>
    </>
  );
};

export default Header;
