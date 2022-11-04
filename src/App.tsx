import React, { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useTranslation } from 'react-i18next';
import './App.scss';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem('i18nextLng');
    i18n.changeLanguage(lang ? lang : 'en');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
