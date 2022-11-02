import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import './index.scss';

const RandomNumbers = () => {
  const [didViewCountUp, setDidViewountUp] = useState(false);

  const onVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      setDidViewountUp(true);
    }
  };

  return (
    <article className="random">
      <h3>Random Numbers</h3>
      <div className="random__numbers">
        <div className="random__block">
          <CountUp end={didViewCountUp ? 529 : 0}>
            {({ countUpRef }) => (
              <VisibilitySensor onChange={onVisibilityChange} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p>completed Katas on CodeWars</p>
        </div>
        <div className="random__block">
          <CountUp end={didViewCountUp ? 580 : 0}>
            {({ countUpRef }) => (
              <VisibilitySensor onChange={onVisibilityChange} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p>commits in 2022</p>
        </div>
        <div className="random__block">
          <CountUp end={didViewCountUp ? 19 : 0}>
            {({ countUpRef }) => (
              <VisibilitySensor onChange={onVisibilityChange} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p>technologies studied</p>
        </div>
        <div className="random__block">
          <CountUp end={didViewCountUp ? 7 : 0}>
            {({ countUpRef }) => (
              <VisibilitySensor onChange={onVisibilityChange} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p>ready-made applications developed in 2022</p>
        </div>
      </div>
    </article>
  );
};

export default RandomNumbers;
