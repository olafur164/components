import { checkA11y } from '@storybook/addon-a11y';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import MegaMenuMainContent from './';

const dummyFunc = (ev: React.KeyboardEvent) => {
  /*TypeScript*/
};

storiesOf('MegaMenu/MegaMenuMainContent', module)
  .addDecorator(checkA11y)
  .add('With article highlight', () => (
    <MegaMenuMainContent
      closeMenu={dummyFunc}
      closeMainContent={dummyFunc}
      mobileMenuOpen={false}
      lastLevelContent={[
        {
          navType: 'links',
          title: 'Pages',
          content: [
            {
              name: 'News',
              src: '/poultry/news/',
            },
            {
              name: 'Events',
              src: '/poultry/events/',
            },
            {
              name: 'About',
              src: '/poultry/about/',
            },
            {
              name: 'Products',
              src: '/poultry/products/',
            },
            {
              name: 'Customer Stories',
              src: '/poultry/customer-stories/',
            },
          ],
        },
        {
          navType: 'products',
          name: 'Species',
          content: [
            {
              name: 'Broilers',
              src: '/poultry/',
              icon: 'icon-broiler-line',
            },
            {
              name: 'Duck',
              src: '/poultry/',
              icon: 'icon-duck-line',
            },
            {
              name: 'Turkey',
              src: '/poultry/',
              icon: 'icon-turkey-line',
            },
            {
              name: 'Other Species',
              src: '/poultry/',
              icon: 'icon-sprout color-black',
            },
          ],
        },
        {
          navType: 'highlight',
          columnTitle: 'In the spotlight',
          content: [
            {
              title: '15.000 bph Solution',
              image: '/media/45720/poultry-processing-iris-about-marel-stork.jpg',
              startDate: '2018-08-16T00:00:00',
              endDate: '2018-09-01T00:00:00',
              type: 'article',
              src: '/articles-events/high-speed-broiler-processing-now-at-13-500-bph/',
              createdDate: '2018-08-16T00:00:00',
            },
          ],
        },
      ]}
    />
  ));

storiesOf('MegaMenu/MegaMenuMainContent', module)
  .addDecorator(checkA11y)
  .add('With event highlight', () => (
    <MegaMenuMainContent
      closeMenu={dummyFunc}
      closeMainContent={dummyFunc}
      mobileMenuOpen={false}
      lastLevelContent={[
        {
          navType: 'links',
          title: 'Pages',
          content: [
            {
              name: 'News',
              src: '/poultry/news/',
            },
            {
              name: 'Events',
              src: '/poultry/events/',
            },
            {
              name: 'About',
              src: '/poultry/about/',
            },
            {
              name: 'Products',
              src: '/poultry/products/',
            },
            {
              name: 'Customer Stories',
              src: '/poultry/customer-stories/',
            },
          ],
        },
        {
          navType: 'products',
          name: 'Species',
          content: [
            {
              name: 'Broilers',
              src: '/poultry/',
              icon: 'icon-broiler-line',
            },
            {
              name: 'Duck',
              src: '/poultry/',
              icon: 'icon-duck-line',
            },
            {
              name: 'Turkey',
              src: '/poultry/',
              icon: 'icon-turkey-line',
            },
            {
              name: 'Other Species',
              src: '/poultry/',
              icon: 'icon-sprout color-black',
            },
          ],
        },
        {
          navType: 'highlight',
          columnTitle: 'In the spotlight',
          content: [
            {
              title: '15.000 bph Solution',
              image: '/media/45720/poultry-processing-iris-about-marel-stork.jpg',
              startDate: '2018-08-16T00:00:00',
              endDate: '2018-09-01T00:00:00',
              type: 'event',
              src: '/articles-events/high-speed-broiler-processing-now-at-13-500-bph/',
              createdDate: '2018-08-16T00:00:00',
            },
          ],
        },
      ]}
    />
  ));

storiesOf('MegaMenu/MegaMenuMainContent', module)
  .addDecorator(checkA11y)
  .add('With default highlight', () => (
    <MegaMenuMainContent
      closeMenu={dummyFunc}
      closeMainContent={dummyFunc}
      mobileMenuOpen={false}
      lastLevelContent={[
        {
          navType: 'links',
          title: 'Pages',
          content: [
            {
              name: 'News',
              src: '/poultry/news/',
            },
            {
              name: 'Events',
              src: '/poultry/events/',
            },
            {
              name: 'About',
              src: '/poultry/about/',
            },
            {
              name: 'Products',
              src: '/poultry/products/',
            },
            {
              name: 'Customer Stories',
              src: '/poultry/customer-stories/',
            },
          ],
        },
        {
          navType: 'products',
          name: 'Species',
          content: [
            {
              name: 'Broilers',
              src: '/poultry/',
              icon: 'icon-broiler-line',
            },
            {
              name: 'Duck',
              src: '/poultry/',
              icon: 'icon-duck-line',
            },
            {
              name: 'Turkey',
              src: '/poultry/',
              icon: 'icon-turkey-line',
            },
            {
              name: 'Other Species',
              src: '/poultry/',
              icon: 'icon-sprout color-black',
            },
          ],
        },
        {
          navType: 'highlight',
          columnTitle: 'In the spotlight',
          content: [
            {
              title: '15.000 bph Solution',
              image: '/media/45720/poultry-processing-iris-about-marel-stork.jpg',
              startDate: '2018-08-16T00:00:00',
              endDate: '2018-09-01T00:00:00',
              type: 'Solution',
              src: '/articles-events/high-speed-broiler-processing-now-at-13-500-bph/',
            },
          ],
        },
      ]}
    />
  ));

storiesOf('MegaMenu/MegaMenuMainContent', module)
  .addDecorator(checkA11y)
  .add('Icon Test', () => (
    <MegaMenuMainContent
      closeMenu={dummyFunc}
      closeMainContent={dummyFunc}
      mobileMenuOpen={false}
      lastLevelContent={[
        {
          navType: 'products',
          name: 'Species',
          content: [
            {
              name: 'Pig',
              src: '/pig/',
              icon: 'icon-pig-line',
            },
            {
              name: 'Sheep',
              src: '/sheep/',
              icon: 'icon-sheep-line',
            },
            {
              name: 'Cattle',
              src: '/cattle/',
              icon: 'icon-cattle-line',
            },
            {
              name: 'Salmon',
              src: '/salmon/',
              icon: 'icon-salmon-line',
            },
          ],
        },
        {
          navType: 'products',
          name: 'Species',
          content: [
            {
              name: 'Whitefish',
              src: '/poultry/',
              icon: 'icon-whitefish-line',
            },
            {
              name: 'Euro',
              src: '/poultry/',
              icon: 'icon-euro',
            },
            {
              name: 'Pound',
              src: '/poultry/',
              icon: 'icon-pound',
            },
          ],
        },
      ]}
    />
  ));

storiesOf('MegaMenu/MegaMenuMainContent', module)
  .addDecorator(checkA11y)
  .add('Links', () => (
    <MegaMenuMainContent
      closeMenu={dummyFunc}
      closeMainContent={dummyFunc}
      mobileMenuOpen={false}
      lastLevelContent={[
        {
          navType: 'links',
          title: 'quick access',
          content: [
            {
              name: 'Spare parts',
              src: '/service/spare-parts/',
            },
            {
              name: 'Warranty claims',
              src: '/service/warranty-claims/',
            },
            {
              name: 'Discontinued products',
              src: '/service/discontinued-products/',
            },
            {
              name: 'Net Promoter Score',
              src: '/service/net-promoter-score/',
            },
            {
              name: 'Contact service',
              src: '/service/contact-service/',
            },
          ],
        },
        {
          navType: 'links',
          title: 'Service products',
          content: [
            {
              name: 'Innova Lifecycle Support',
              src: '/products-solutions/innova-lifecycle-support/',
            },
            {
              name: 'Customer support center',
              src: '/products-solutions/customer-support-center/',
            },
            {
              name: 'Inspection visits',
              src: '/products-solutions/inspection-visits/',
            },
            {
              name: 'Critical parts package',
              src: '/products-solutions/critical-parts-package/',
            },
          ],
        },
        {
          navType: 'links',
          title: null,
          content: [
            {
              name: 'On-site response time',
              src: '/products-solutions/on-site-response-time/',
            },
            {
              name: 'Preventative maintenance packages',
              src: '/products-solutions/preventative-maintenance-packages/',
            },
            {
              name: 'Repair and exchange program',
              src: '/products-solutions/repair-and-exchange-program/',
            },
            {
              name: 'Consumable packages',
              src: '/products-solutions/consumable-packages/',
            },
          ],
        },
        {
          navType: 'links',
          title: null,
          content: [
            {
              name: 'Calibration',
              src: '/products-solutions/calibration/',
            },
            {
              name: 'On-site emergency support',
              src: '/products-solutions/on-site-emergency-support/',
            },
            {
              name: null,
              src: '/products-solutions/training/',
            },
            {
              name: 'On-site emergency support',
              src: '/products-solutions/on-site-emergency-support/',
            },
            {
              name: 'Upgrade kits',
              src: '/products-solutions/upgrade-kits/',
            },
          ],
        },
      ]}
    />
  ));
