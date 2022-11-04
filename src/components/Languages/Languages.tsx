import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as En } from '../../assets/icons/en.svg';
import { ReactComponent as Ru } from '../../assets/icons/ru.svg';
import './index.scss';

const Languages = () => {
  const { t } = useTranslation(['main']);

  return (
    <section id="languages">
      <h3>{t('languages')}</h3>
      <section className="languages-wrapper">
        <div className="languages-wrapper__ru">
          <Ru />
          <h4>{t('russian')}</h4>
          <p>( {t('native')} )</p>
        </div>
        <div className="languages-wrapper__en">
          <En />
          <h4>{t('english')}</h4>
          <p>( {t('intermediate')} )</p>
        </div>
      </section>
    </section>
  );
};

export default Languages;
