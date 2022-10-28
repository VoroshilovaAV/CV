import React from 'react';
import { useSpring, animated } from 'react-spring';
import './index.scss';

const AnimatedBalls = () => {
  const pinkBallStyles = useSpring({
    loop: { reverse: true },
    config: { duration: 3500 },
    from: { x: 10, y: 10 },
    to: { x: 0, y: 0 },
  });

  const whiteBallStyles = useSpring({
    loop: { reverse: true },
    config: { duration: 2500 },
    from: { x: 0, y: 0 },
    to: { x: 5, y: 10 },
  });

  const blueBallStyles = useSpring({
    loop: { reverse: true },
    config: { duration: 3200 },
    from: { x: 10, y: 0 },
    to: { x: 0, y: 10 },
  });

  return (
    <>
      <animated.div
        className="aboutme-wrapper__ball aboutme-wrapper__pink"
        style={pinkBallStyles}
      ></animated.div>
      <animated.div
        className="aboutme-wrapper__ball aboutme-wrapper__white"
        style={whiteBallStyles}
      ></animated.div>
      <animated.div
        className="aboutme-wrapper__ball aboutme-wrapper__blue"
        style={blueBallStyles}
      ></animated.div>
    </>
  );
};

export default AnimatedBalls;
