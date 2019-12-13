import { checkA11y } from '@storybook/addon-a11y';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import MegaMenuSecondLevelLinksWrapper from './';

const dummyFunc = (industryIndex: number, ev: React.KeyboardEvent) => {
  /* */
};

storiesOf('MegaMenu/MegaMenuSecondLevelLinksWrapper', module)
  .addDecorator(checkA11y)
  .add('Basic', () => (
    <MegaMenuSecondLevelLinksWrapper
      index={1}
      onSecondLevelKeyDown={dummyFunc}
      firstLevelMenuItem={{
        industries: [
          { name: 'Poultry', icon: 'poultry' },
          { name: 'Meat', icon: 'meat' },
          { name: 'Fish', icon: 'fish' },
        ],
      }}
      selectedSecondLevel={-1}
      handleMouseEnter={() => {
        return;
      }}
    />
  ));
