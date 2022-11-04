import React from 'react';
import { ReactComponent as Photo } from '../../assets/images/photo.svg';
import AnimatedBalls from '../AnimatedBalls/AnimatedBalls';
import CVLink from '../../assets/docs/cv.pdf';
import './index.scss';

const AboutMe = () => {
  return (
    <>
      <div className="aboutme-wrapper">
        <section className="aboutme-wrapper__text">
          <h3>
            <span>&#060;</span>Hello, world<span>/&#062;</span>, I&#039;m <span>Anna</span>
          </h3>
          <h1>Frontend Developer</h1>
          <div className="aboutme-wrapper__btn">
            <div className="aboutme-wrapper__link">
              <a href={CVLink} download="Voroshilova_CV.pdf">
                Download CV
              </a>
            </div>
          </div>
          <AnimatedBalls />
        </section>
        <Photo />
      </div>
      <section className="aboutme-info">
        <p>
          <span>&#060;</span>I&#039;m a frontend developer from Samara (Russia).<span>/&#062;</span>
          <br />
          <span>&#060;</span>I have experience with JavaScript, TypeScript, Wepback, React, React
          Native and Redux.<span>/&#062;</span>
          <br />
          <span>&#060;</span>In addition, I worked as a technical support specialist (web-hosting
          issues), so I also have knowledge in Linux system administration, working with many CMS,
          setting up mail, working with Apache, Nginx and Mysql.<span>/&#062;</span>
          <br /> <span>&#060;</span>I&#039;m always happy to get new experiences and learn new
          development tools. I will be glad to communicate and work in a team!<span>/&#062;</span>
        </p>
      </section>
    </>
  );
};

export default AboutMe;
