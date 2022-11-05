import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { bubble as Menu } from 'react-burger-menu';
import HeaderLinksDesktop from '../HeaderLinksDesktop/HeaderLinksDesktop';
import HeaderLinksMobile from '../HeaderLinksMobile/HeaderLinksMobile';
import './index.scss';
import './toggle.scss';

const Header = () => {
  const { i18n } = useTranslation();
  const lang = localStorage.getItem('i18nextLng');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? i18n.changeLanguage('ru') : i18n.changeLanguage('en');
  };

  const [isOpen, setOpen] = useState(false);
  const handleIsOpen = () => setOpen(!isOpen);
  const closeSideBar = () => setOpen(false);

  return (
    <>
      <header>
        <nav className="header-burger">
          <Menu right isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen} width={'100%'}>
            <HeaderLinksMobile closeSideBar={closeSideBar} />
          </Menu>
        </nav>
        <div className="header-wrapper">
          <section>
            <div className="header-toggle header-toggle_neon">
              <input
                type="checkbox"
                onChange={handleChange}
                id="header-toggle_neon"
                className="header-checkbox"
                checked={lang === 'ru' ? true : false}
              />
              <label
                className="header-toggle__btn"
                htmlFor="header-toggle_neon"
                data-label-en="en"
                data-label-ru="ru"
              >
                |
              </label>
            </div>
          </section>
          <nav className="header-links">
            <HeaderLinksDesktop />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
