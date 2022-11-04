import React from 'react';
import './index.scss';

const Experience = () => {
  return (
    <section id="experience">
      <h3>Work experience</h3>
      <section className="experience-wrapper">
        <div className="experience-wrapper__info">
          <p>2019-2022</p>
          <div className="experience-wrapper__bar"></div>
          <p className="experience-wrapper__info_bold">REG.RU</p>
          <p>Samara, Russia</p>
        </div>
        <div className="experience-wrapper__info">
          <p className="experience-wrapper__info_bold">
            Technical support specialist (web-hosting issues)
          </p>
          <ul>
            <li>
              <span>&#10004;</span> Sites hosting, work with Apache, Nginx, Mysql and PHP
            </li>
            <li>
              <span>&#10004;</span> Troubleshooting server errors and work with the command line
            </li>
            <li>
              <span>&#10004;</span> Installing and configuring the software, including the CMS
            </li>
            <li>
              <span>&#10004;</span> Mail setup, routing and connection troubleshooting
            </li>
            <li>
              <span>&#10004;</span> Creating bug cards when problems are detected
            </li>
            <li>
              <span>&#10004;</span> Monitoring hosting servers
            </li>
          </ul>
        </div>
      </section>
      <hr></hr>
      <section className="experience-wrapper">
        <div className="experience-wrapper__info">
          <p>2018-2019</p>
          <div className="experience-wrapper__bar"></div>
          <p className="experience-wrapper__info_bold">Samara State Aerospace University</p>
          <p>Samara, Russia</p>
        </div>
        <div className="experience-wrapper__info">
          <p className="experience-wrapper__info_bold">Engineer</p>
          <ul>
            <li>
              <span>&#10004;</span> Creating documentation of expert opinions on university exhibits
            </li>
            <li>
              <span>&#10004;</span> Working at exhibitions with scientific exhibits
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Experience;
