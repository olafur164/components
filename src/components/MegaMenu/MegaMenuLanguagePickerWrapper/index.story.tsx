import { checkA11y } from '@storybook/addon-a11y';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import MegaMenuLanguagePickerWrapper from './';

storiesOf('MegaMenu/MegaMenuLanguagePickerWrapper', module)
  .addDecorator(checkA11y)
  .add('Basic', () => (
    <MegaMenuLanguagePickerWrapper
      onLinkKeyUp={(ev: React.KeyboardEvent) => {
        /* */
      }}
      languageTranslation="Languages"
      notAllContentAvailableTranslation="test"
      languages={[
        {
          name: 'English',
          url: '/articles/hb-grandi-purchases-revoportioner/',
          languageCode: 'en-US',
          notAllContentAvailable: false,
          selected: false,
        },
        {
          name: 'Íslenska',
          url: '/is/frettir/hb-grandi-purchases-revoportioner-07-05-2014-marelcom/',
          languageCode: 'is-IS',
          notAllContentAvailable: false,
          selected: false,
        },
      ]}
      handleLocaleChange={() => {
        return;
      }}
    />
  ));
