import { checkA11y } from '@storybook/addon-a11y';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import DetectOutsideClick from './';

/* tslint:disable:no-console */
storiesOf('Detect Outside Click', module)
  .addDecorator(checkA11y)
  .add('Default', () => (
    <DetectOutsideClick handleClose={() => console.info('Outside click detected!')}>
      <button>Click outside me!</button>
    </DetectOutsideClick>
  ));
