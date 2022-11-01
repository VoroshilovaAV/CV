import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Languages from '../Languages/Languages';
import './index.scss';

const Main = () => {
  return (
    <main>
      <div className="main-wrapper">
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Languages />
      </div>
    </main>
  );
};

export default Main;
