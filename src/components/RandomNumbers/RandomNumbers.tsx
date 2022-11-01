import React from 'react';
import './index.scss';

const RandomNumbers = () => {
  return (
    <article className="random">
      <h3>Random Numbers</h3>
      <div className="random__numbers">
        <div className="random__block">
          <h4>529</h4>
          <p>completed Katas on CodeWars</p>
        </div>
        <div className="random__block">
          <h4>580</h4>
          <p>commits in 2022</p>
        </div>
        <div className="random__block">
          <h4>19</h4>
          <p>technologies studied</p>
        </div>
        <div className="random__block">
          <h4>7</h4>
          <p>ready-made applications developed in 2022</p>
        </div>
      </div>
    </article>
  );
};

export default RandomNumbers;
