import { checkA11y } from '@storybook/addon-a11y';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ILanguage } from '../../../../Interfaces';

import MobileMegaMenu, { IMobileMenuLink } from './';

const languages: ILanguage[] = [
  {
    name: 'English',
    url: '/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'en-US',
    notAllContentAvailable: false,
    selected: false,
  },
  {
    name: 'Íslenska',
    url: '/is/frettir/hb-grandi-purchases-revoportioner/',
    languageCode: 'is-IS',
    notAllContentAvailable: false,
    selected: false,
  },
  {
    name: '中文',
    url: '/zh/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'zh',
    notAllContentAvailable: true,
    selected: false,
  },
  {
    name: 'Dansk',
    url: '/da/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'da',
    notAllContentAvailable: true,
    selected: false,
  },
  {
    name: 'Deutsch',
    url: '/de/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'de',
    notAllContentAvailable: true,
    selected: false,
  },
  {
    name: 'Español',
    url: '/es/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'es',
    notAllContentAvailable: false,
    selected: false,
  },
  {
    name: 'Français',
    url: '/fr/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'fr',
    notAllContentAvailable: false,
    selected: false,
  },
  {
    name: 'Italiano',
    url: '/it/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'it',
    notAllContentAvailable: true,
    selected: false,
  },
  {
    name: 'Nederlands',
    url: '/nl/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'nl',
    notAllContentAvailable: true,
    selected: false,
  },
  {
    name: 'Norsk',
    url: '/no/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'no',
    notAllContentAvailable: true,
    selected: false,
  },
  {
    name: 'Polskie',
    url: '/pl/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'pl',
    notAllContentAvailable: true,
    selected: false,
  },
  {
    name: 'Português',
    url: '/pt/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'pt',
    notAllContentAvailable: false,
    selected: false,
  },
  {
    name: 'Русский',
    url: '/ru/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'ru',
    notAllContentAvailable: false,
    selected: false,
  },
  {
    name: 'Slovenský',
    url: '/sv/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'sv',
    notAllContentAvailable: true,
    selected: false,
  },
  {
    name: 'Viet',
    url: '/vi/articles/hb-grandi-purchases-revoportioner/',
    languageCode: 'vi',
    notAllContentAvailable: true,
    selected: false,
  },
];

storiesOf('MegaMenu/MobileMenu', module)
  .addDecorator(checkA11y)
  .add('Basic', () => (
    <div>
      <MobileMegaMenu
        docked={false}
        checked={false}
        languages={languages}
        closeMenu={() => {
          /**/
        }}
        linksToPages={
          [
            {
              name: 'Industries',
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
                  name: 'Other',
                  icon: 'other-line',
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
              ],
            },
            { src: '#', name: 'test' },
            { src: '#', name: 'test' },
            { src: '#', name: 'test' },
          ] as IMobileMenuLink[]
        }
      />
      <p>TEXT UNDER</p>
    </div>
  ));
