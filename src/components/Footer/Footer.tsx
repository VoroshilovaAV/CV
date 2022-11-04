import React from 'react';
import githubIcon from '../../assets/icons/github.svg';
import linkedInIcon from '../../assets/icons/linked.svg';
import telegramIcon from '../../assets/icons/telegram.svg';
import './index.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <p className="footer-wrapper__text">❮ ❯ by Voroshilova A. - 2022</p>
        <div className="footer-container__links">
          <a href="https://github.com/VoroshilovaAV" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://www.linkedin.com/in/anna-voroshilova" target="_blank" rel="noreferrer">
            <img src={linkedInIcon} alt="linkeIn icon" />
          </a>
          <a href="https://t.me/AVoroshilova" target="_blank" rel="noreferrer">
            <img src={telegramIcon} alt="telegram icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
