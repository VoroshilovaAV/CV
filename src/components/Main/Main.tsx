import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import './index.scss';

const Main = () => {
  return (
    <main>
      <div className="main-wrapper">
        <AboutMe />
        <section id="skills">Skills</section>
        <section id="projects">Projects</section>
        <section id="experience">Experience</section>
        <section id="education">Education</section>
        <section id="languages">Languages</section>
      </div>
    </main>
  );
};

export default Main;
