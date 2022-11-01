import React from 'react';
import { ReactComponent as En } from '../../assets/icons/en.svg';
import { ReactComponent as Ru } from '../../assets/icons/ru.svg';
import './index.scss';

const Languages = () => {
  return (
    <section id="languages">
      <h3>Languages</h3>
      <section className="languages-wrapper">
        <div className="languages-wrapper__ru">
          <Ru />
          <h4>Russian</h4>
          <p>( Native )</p>
        </div>
        <div className="languages-wrapper__en">
          <En />
          <h4>English</h4>
          <p>( Intermediate )</p>
        </div>
      </section>
    </section>
  );
};

export default Languages;
