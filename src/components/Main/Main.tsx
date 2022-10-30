import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import './index.scss';

const Main = () => {
  return (
    <main>
      <div className="main-wrapper">
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <section id="education">Education</section>
        <section id="languages">Languages</section>
      </div>
    </main>
  );
};

export default Main;
