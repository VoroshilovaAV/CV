import React from 'react';
import { useSpring, animated } from 'react-spring';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linked.svg';
import { ReactComponent as Telegram } from '../../assets/icons/telegram.svg';
import './index.scss';

const AnimatedBalls = () => {
  const pinkBallStyles = useSpring({
    loop: { reverse: true },
    config: { duration: 3500 },
    from: { x: 15, y: 15 },
    to: { x: 0, y: 0 },
  });

  const whiteBallStyles = useSpring({
    loop: { reverse: true },
    config: { duration: 2500 },
    from: { x: 0, y: 0 },
    to: { x: 10, y: 15 },
  });

  const blueBallStyles = useSpring({
    loop: { reverse: true },
    config: { duration: 3200 },
    from: { x: 15, y: 0 },
    to: { x: 0, y: 15 },
  });

  return (
    <>
      <animated.div className="aboutme-wrapper__ball aboutme-wrapper__pink" style={pinkBallStyles}>
        <a href="https://github.com/VoroshilovaAV">
          <Github />
        </a>
      </animated.div>
      <animated.div
        className="aboutme-wrapper__ball aboutme-wrapper__white"
        style={whiteBallStyles}
      >
        <a href="https://www.linkedin.com/in/anna-voroshilova/">
          <LinkedIn />
        </a>
      </animated.div>
      <animated.div className="aboutme-wrapper__ball aboutme-wrapper__blue" style={blueBallStyles}>
        <a href="https://t.me/AVoroshilova">
          <Telegram />
        </a>
      </animated.div>
    </>
  );
};

export default AnimatedBalls;
