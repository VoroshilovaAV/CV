import React, { useEffect, useState } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Languages from '../Languages/Languages';
import './index.scss';

const Main = () => {
  const [showButton, setShowButton] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener('scroll', handleScrollButtonVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility);
    };
  }, []);

  return (
    <main>
      <div className="main-wrapper">
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Languages />
        {showButton && (
          <div className="main-wrapper__scrollToTop">
            <button className="main-wrapper__button" onClick={handleScrollToTop}>
              &#8679;
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Main;
