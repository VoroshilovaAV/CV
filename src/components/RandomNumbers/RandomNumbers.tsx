import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation(['main']);

  return (
    <article className="random">
      <h3>{t('randomNumbers')}</h3>
      <div className="random__numbers">
        <div className="random__block">
          <CountUp end={didViewCountUp ? 529 : 0}>
            {({ countUpRef }) => (
              <VisibilitySensor onChange={onVisibilityChange} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p>{t('kata')}</p>
        </div>
        <div className="random__block">
          <CountUp end={didViewCountUp ? 580 : 0}>
            {({ countUpRef }) => (
              <VisibilitySensor onChange={onVisibilityChange} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p>{t('commits')}</p>
        </div>
        <div className="random__block">
          <CountUp end={didViewCountUp ? 19 : 0}>
            {({ countUpRef }) => (
              <VisibilitySensor onChange={onVisibilityChange} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p>{t('technologies')}</p>
        </div>
        <div className="random__block">
          <CountUp end={didViewCountUp ? 7 : 0}>
            {({ countUpRef }) => (
              <VisibilitySensor onChange={onVisibilityChange} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p>{t('readyMade')}</p>
        </div>
      </div>
    </article>
  );
};

export default RandomNumbers;
