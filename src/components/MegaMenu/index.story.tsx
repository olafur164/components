import { checkA11y } from '@storybook/addon-a11y';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ILanguage } from '../../../Interfaces';
import MegaMenu, { IMegaMenu } from './';

export const megamenuTree: IMegaMenu[] = [
  {
    name: 'Industries',
    color: 'blue',
    industries: [
      {
        name: 'Poultry',
        icon: 'poultry',
        src: '/#',
        mainContent: [
          {
            name: 'PPages',
            navType: 'links',
            content: [
              {
                name: 'Link1',
                src: '/',
              },
              {
                name: 'Link2',
                src: '/',
              },
              {
                name: 'Link3',
                src: '/',
              },
              {
                name: 'Link4',
                src: '/',
              },
            ],
          },
          {
            name: 'PSpecies',
            navType: 'products',
            content: [
              {
                name: 'Broiler',
                src: '/',
                icon: 'broiler-line',
              },
              {
                name: 'Turkey',
                src: '/',
                icon: 'turkey-line',
              },
              {
                name: 'Duck',
                src: '/',
                icon: 'duck-line',
              },
            ],
          },
          {
            name: 'PHighlights',
            navType: 'highlight',
            content: [
              {
                name: 'Get ready for smarter processing',
                src: '/',
                image: 'https://dummyimage.com/300x300.png',
                date: '01.01.2018',
                startTime: '21:00',
                endTime: '23:00',
                type: 'event',
              },
            ],
          },
        ],
      },
      {
        name: 'Meat',
        icon: 'meat',
        src: '/#',
        mainContent: [
          {
            name: 'MPages',
            navType: 'links',
            content: [
              {
                name: 'Link1',
                src: '/',
              },
              {
                name: 'Link2',
                src: '/',
              },
              {
                name: 'Link3',
                src: '/',
              },
              {
                name: 'Link4',
                src: '/',
              },
            ],
          },
          {
            name: 'MSpecies',
            navType: 'products',
            content: [
              {
                name: 'Sheep',
                src: '/',
                icon: 'sheep-line',
              },
              {
                name: 'Kattle',
                src: '/',
                icon: 'cattle-line',
              },
              {
                name: 'Pig',
                src: '/',
                icon: 'pig-line',
              },
            ],
          },
          {
            name: 'MHighlights',
            navType: 'highlight',
            content: [
              {
                name: 'Get ready for smarter processing',
                src: '/',
                image: 'https://dummyimage.com/300x300.png',
                date: '01.01.2018',
                startTime: '21:00',
                endTime: '23:00',
                type: 'event',
              },
            ],
          },
        ],
      },
      {
        name: 'Fish',
        icon: 'fish',
        src: '/#',
        mainContent: [
          {
            name: 'FPages',
            navType: 'links',
            content: [
              {
                name: 'Link1',
                src: '/',
              },
              {
                name: 'Link2',
                src: '/',
              },
              {
                name: 'Link3',
                src: '/',
              },
              {
                name: 'Link4',
                src: '/',
              },
            ],
          },
          {
            name: 'FSpecies',
            navType: 'products',
            content: [
              {
                name: 'Salmon',
                src: '/',
                icon: 'salmon-line',
              },
              {
                name: 'White fish',
                src: '/',
                icon: 'whitefish-line',
              },
            ],
          },
          {
            name: 'FHighlights',
            navType: 'highlight',
            content: [
              {
                name: 'Get ready for smarter processing',
                src: '/',
                image: 'https://dummyimage.com/300x300.png',
                date: '01.01.2018',
                startTime: '21:00',
                endTime: '23:00',
                type: 'event',
              },
            ],
          },
        ],
      },
      {
        name: 'Other',
        icon: 'icon-other-line',
        src: '',
        mainContent: [
          {
            navType: 'iconLinks',
            content: [
              {
                name: 'Water Treatment',
                icon: 'icon-duck-line',
                src: '/#',
              },
              {
                name: 'Intralogistics',
                icon: 'icon-duck-line',
                src: '/#',
              },
              {
                name: 'Alternative proteins',
                icon: 'icon-duck-line',
                src: '/#',
              },
              {
                name: 'Potatoes',
                icon: 'icon-duck-line',
                src: '/#',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Processes',
    mainContent: [],
    src: '/#',
  },
  {
    name: 'Service',
    mainContent: [],
    src: '/#',
  },
  {
    name: 'Software',
    mainContent: [
      {
        name: 'SSPages',
        navType: 'links',
        content: [
          {
            name: 'Link1',
            src: '/',
          },
          {
            name: 'Link2',
            src: '/',
          },
          {
            name: 'Link3',
            src: '/',
          },
          {
            name: 'Link4',
            src: '/',
          },
        ],
      },
      {
        name: 'SSModules',
        navType: 'products',
        content: [
          {
            name: 'Device controller',
            src: '/',
            icon: 'other-line',
          },
          {
            name: 'Performance monitoring',
            src: '/',
            icon: 'other-line',
          },
          {
            name: 'Weighing & labelling',
            src: '/',
            icon: 'other-line',
          },
        ],
      },
      {
        name: 'SSHighlights',
        content: [
          {
            name: 'Get ready for smarter processing',
            src: '/',
            image: 'https://dummyimage.com/300x300.png',
            date: '01.01.2018',
            startTime: '21:00',
            endTime: '23:00',
            type: 'event',
          },
        ],
      },
    ],
    src: '/#',
  },
  {
    name: 'About',
    mainContent: [],
    src: '/#',
  },
  {
    name: 'Investors',
    mainContent: [],
    src: '/#',
  },
  {
    name: 'Jobs',
    mainContent: [],
    src: '/#',
  },
];

const languages: ILanguage[] = [
  {
    name: 'English',
    url: '/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'en-US',
    notAllContentAvailable: false,
    selected: false
  },
  {
    name: 'Íslenska',
    url: '/is/frettir/hb-grandi-purchases-revoportioner/',
    languageCode: 'is-IS',
    notAllContentAvailable: false,
    selected: false
  },
  {
    name: '中文',
    url: '/zh/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'zh',
    notAllContentAvailable: true,
    selected: false
  },
  {
    name: 'Dansk',
    url: '/da/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'da',
    notAllContentAvailable: true,
    selected: false
  },
  {
    name: 'Deutsch',
    url: '/de/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'de',
    notAllContentAvailable: true,
    selected: false
  },
  {
    name: 'Español',
    url: '/es/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'es',
    notAllContentAvailable: false,
    selected: false
  },
  {
    name: 'Français',
    url: '/fr/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'fr',
    notAllContentAvailable: false,
    selected: false
  },
  {
    name: 'Italiano',
    url: '/it/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'it',
    notAllContentAvailable: true,
    selected: false
  },
  {
    name: 'Nederlands',
    url: '/nl/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'nl',
    notAllContentAvailable: true,
    selected: false
  },
  {
    name: 'Norsk',
    url: '/no/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'no',
    notAllContentAvailable: true,
    selected: false
  },
  {
    name: 'Polskie',
    url: '/pl/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'pl',
    notAllContentAvailable: true,
    selected: false
  },
  {
    name: 'Português',
    url: '/pt/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'pt',
    notAllContentAvailable: false,
    selected: false
  },
  {
    name: 'Русский',
    url: '/ru/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'ru',
    notAllContentAvailable: false,
    selected: false
  },
  {
    name: 'Slovenský',
    url: '/sv/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'sv',
    notAllContentAvailable: true,
    selected: false
  },
  {
    name: 'Viet',
    url: '/vi/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'vi',
    notAllContentAvailable: true,
    selected: false
  },
];

storiesOf('MegaMenu', module)
  .addDecorator(checkA11y)
  .add('Basic', () => (
    <div style={{ height: '200vh' }}>
      <MegaMenu menuTree={megamenuTree} languages={languages} industryLogo="logo" />
    </div>
  ));
