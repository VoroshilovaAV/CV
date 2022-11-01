import html from '../assets/icons/html.svg';
import css from '../assets/icons/css.svg';
import js from '../assets/icons/js.svg';
import ts from '../assets/icons/ts.svg';
import webpack from '../assets/icons/webpack.svg';
import react from '../assets/icons/react.svg';
import redux from '../assets/icons/redux.svg';
import git from '../assets/icons/git.svg';
import figma from '../assets/icons/figma.svg';
import ph from '../assets/icons/ph.svg';
import rest from '../assets/icons/rest.svg';
import bem from '../assets/icons/bem.svg';
import rickmorty from '../assets/images/rickmorty.jpg';
import lang from '../assets/images/lang.jpg';
import area from '../assets/images/area.jpg';

export const CardsSkills = [
  {
    id: 0,
    image: `${html}`,
    name: 'HTML',
  },
  {
    id: 1,
    image: `${css}`,
    name: 'CSS',
  },
  {
    id: 2,
    image: `${js}`,
    name: 'JavaScript',
  },
  {
    id: 3,
    image: `${ts}`,
    name: 'TypeScript',
  },
  {
    id: 4,
    image: `${webpack}`,
    name: 'Webpack',
  },
  {
    id: 5,
    image: `${react}`,
    name: 'React',
  },
  {
    id: 6,
    image: `${redux}`,
    name: 'Redux',
  },
  {
    id: 7,
    image: `${git}`,
    name: 'Git',
  },
  {
    id: 8,
    image: `${figma}`,
    name: 'Figma',
  },
  {
    id: 9,
    image: `${ph}`,
    name: 'PhotoShop',
  },
  {
    id: 10,
    image: `${rest}`,
    name: 'REST API',
  },
  {
    id: 11,
    image: `${bem}`,
    name: 'BEM',
  },
];

export const CardProject = [
  {
    id: 0,
    image: `${rickmorty}`,
    name: 'Rick and Morty characters',
    tech: 'React, TypeScript, SCSS, React Hook Form, Redux Toolkit with Thunk, React testing library, Webpack',
    description:
      'The app with all the "Rick and Morty" characters. You can simply search for a character card or use filters.',
    deploy: 'https://r-and-m-characters-voroshilova.netlify.app/',
    gh: 'https://github.com/VoroshilovaAV/Rick-and-Morty',
  },
  {
    id: 1,
    image: `${area}`,
    name: 'Reactive Area',
    tech: 'React, Redux, TypeScript, Material UI, Styled Components, React Hook Form with Yup, React Dnd, i18next, Webpack, Figma',
    description:
      'This application is an easy-to-use and user-friendly project management software that will help you significantly increase the efficiency of your team at work.',
    deploy: 'https://reactive-area-app.web.app/',
    gh: 'https://github.com/VoroshilovaAV/Reactive-Area',
  },
  {
    id: 2,
    image: `${lang}`,
    name: 'RS Lang',
    tech: 'HTML, SCSS, TypeScript, Bootstrap, Chart.js library, Webpack, Figma',
    description: `This is an application for learning English. Learning English will be much easier, because you don't have to force yourself learning words - just memorise them by playing!`,
    deploy: 'https://voroshilovaav.github.io/RS-Lang/',
    gh: 'https://github.com/VoroshilovaAV/RS-Lang',
  },
];

export const Courses = [
  {
    id: 0,
    year: 'Mar 2022 - Jun 2022',
    company: 'Rolling Scopes School',
    name: 'React 2022Q1',
    result: 'Certificate',
    link: 'https://app.rs.school/certificate/mjcuo7c6',
  },
  {
    id: 1,
    year: 'Sep 2022 - Mar 2022',
    company: 'Rolling Scopes School',
    name: 'JavaScript/Front-end 2021Q3',
    result: 'Certificate',
    link: 'https://app.rs.school/certificate/qijxt04g',
  },
  {
    id: 2,
    year: '2018 - 2021',
    company: 'Samara State Aerospace University',
    name: 'AIRCRAFT ENGINES',
    result: "Master's Degree",
    link: '#',
  },
];
