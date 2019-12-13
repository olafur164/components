import { checkA11y } from '@storybook/addon-a11y';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import MegaMenu, { IMegaMenu } from '../';
import { ILanguage } from '../../../../Interfaces';
import MegaMenuLanguageIndicatior from './';

storiesOf('MegaMenu/MegaMenuLanguageIndicatior', module)
  .addDecorator(checkA11y)
  .add('Basic', () => (
    <>
      <h1>Transition level none</h1>
      <MegaMenuLanguageIndicatior
        translationLevel="none"
        explinationText="This content isn’t available in your selected language, so we switched to English"
        actionText="See other languages"
      />
      <h1>Transition level partial</h1>
      <MegaMenuLanguageIndicatior
        translationLevel="partial"
        explinationText="Content in your selected language might be limited"
        actionText="Switch language for more content"
      />
    </>
  ));

const megamenuTree: IMegaMenu[] = [
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
    ],
  },
  {
    name: 'Software',
    mainContent: [
      {
        name: 'SSPages',
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
    name: 'Service',
    mainContent: [],
    src: '/#',
  },
];

const languages: ILanguage[] = [
  {
    name: "English",
    url: "/articles/hb-grandi-purchases-revoportioner/",
    languageCode: "en-US",
    notAllContentAvailable: false,
    selected: false
  },
  {
    name: "Íslenska",
    url: "/is/frettir/hb-grandi-purchases-revoportioner/",
    languageCode: "is-IS",
    notAllContentAvailable: false,
    selected: false
  },
  {
    name: "中文",
    url: "/zh/articles/hb-grandi-purchases-revoportioner/",
    languageCode: "zh",
    notAllContentAvailable: true,
    selected: false
  },
  {
    name: "Dansk",
    url: "/da/articles/hb-grandi-purchases-revoportioner/",
    languageCode: "da",
    notAllContentAvailable: true,
    selected: false
  },
  {
    name: "Deutsch",
    url: "/de/articles/hb-grandi-purchases-revoportioner/",
    languageCode: "de",
    notAllContentAvailable: true,
    selected: false
  },
  {
    name: "Español",
    url: "/es/articles/hb-grandi-purchases-revoportioner/",
    languageCode: "es",
    notAllContentAvailable: false,
    selected: false
  },
  {
    name: "Français",
    url: "/fr/articles/hb-grandi-purchases-revoportioner/",
    languageCode: "fr",
    notAllContentAvailable: false,
    selected: false
  },
  {
    name: "Italiano",
    url: "/it/articles/hb-grandi-purchases-revoportioner/",
    languageCode: "it",
    notAllContentAvailable: true,
    selected: false
  },
  {
    name: "Nederlands",
    url: "/nl/articles/hb-grandi-purchases-revoportioner/",
    languageCode: "nl",
    notAllContentAvailable: true,
    selected: false
  },
  {
    name: "Norsk",
    url: "/no/articles/hb-grandi-purchases-revoportioner/",
    languageCode: "no",
    notAllContentAvailable: true,
    selected: false
  },
  {
    name: "Polskie",
    url: "/pl/articles/hb-grandi-purchases-revoportioner/",
    languageCode: "pl",
    notAllContentAvailable: true,
    selected: false
  },
  {
    name: "Português",
    url: "/pt/articles/hb-grandi-purchases-revoportioner/",
    languageCode: "pt",
    notAllContentAvailable: false,
    selected: false
  },
  {
    name: "Русский",
    url: "/ru/articles/hb-grandi-purchases-revoportioner/",
    languageCode: "ru",
    notAllContentAvailable: false,
    selected: false
  },
  {
    name: "Slovenský",
    url: "/sv/articles/hb-grandi-purchases-revoportioner/",
    languageCode: "sv",
    notAllContentAvailable: true,
    selected: false
  },
  {
    name: "Viet",
    url: "/vi/articles/hb-grandi-purchases-revoportioner/",
    languageCode: "vi",
    notAllContentAvailable: true,
    selected: false
  }
];

storiesOf('MegaMenu/MegaMenuLanguageIndicatior', module)
  .addDecorator(checkA11y)
  .add('With MegaMenu', () => (
    <>
      <MegaMenu
        menuTree={megamenuTree}
        languages={languages}
        industryLogo="meat"
      />
    </>
  ));
