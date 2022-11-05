import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.scss';

const Experience = () => {
  const { t } = useTranslation(['main']);

  return (
    <section id="experience">
      <h3>{t('experience')}</h3>
      <section className="experience-wrapper">
        <div className="experience-wrapper__info">
          <p>2019-2022</p>
          <div className="experience-wrapper__bar"></div>
          <p className="experience-wrapper__info_bold">REG.RU</p>
          <p>{t('samara')}</p>
        </div>
        <div className="experience-wrapper__info">
          <p className="experience-wrapper__info_bold">{t('technicalSupport')}</p>
          <ul>
            <li>
              <span>&#10004;</span> {t('duties.0')}
            </li>
            <li>
              <span>&#10004;</span> {t('duties.1')}
            </li>
            <li>
              <span>&#10004;</span> {t('duties.2')}
            </li>
            <li>
              <span>&#10004;</span> {t('duties.3')}
            </li>
            <li>
              <span>&#10004;</span> {t('duties.4')}
            </li>
            <li>
              <span>&#10004;</span> {t('duties.5')}
            </li>
          </ul>
        </div>
      </section>
      <hr></hr>
      <section className="experience-wrapper">
        <div className="experience-wrapper__info">
          <p>2018-2019</p>
          <div className="experience-wrapper__bar"></div>
          <p className="experience-wrapper__info_bold">{t('samaraState')}</p>
          <p>{t('samara')}</p>
        </div>
        <div className="experience-wrapper__info">
          <p className="experience-wrapper__info_bold">{t('engineer')}</p>
          <ul>
            <li>
              <span>&#10004;</span> {t('duties.6')}
            </li>
            <li>
              <span>&#10004;</span> {t('duties.7')}
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Experience;
