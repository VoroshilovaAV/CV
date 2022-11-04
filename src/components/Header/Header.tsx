import React, { useState } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import HeaderLinksDesktop from '../HeaderLinksDesktop/HeaderLinksDesktop';
import HeaderLinksMobile from '../HeaderLinksMobile/HeaderLinksMobile';
import './index.scss';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const handleIsOpen = () => {
    setOpen(!isOpen);
  };
  const closeSideBar = () => setOpen(false);

  return (
    <>
      <header>
        <nav className="header-burger">
          <Menu right isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen} width={'100%'}>
            <HeaderLinksMobile
              closeSideBar={() => {
                closeSideBar();
              }}
            />
          </Menu>
        </nav>
        <div className="header-wrapper">
          <section>Logo</section>
          <nav className="header-links">
            <HeaderLinksDesktop />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
