import React from 'react';

import { OuiCode, OuiSteps } from '../../../../src/components';

const firstSetOfSteps = [
  {
    title: 'Step 1',
    children: (
      <p>
        Steps with <OuiCode>titleSize</OuiCode> set to <OuiCode>xs</OuiCode>{' '}
        like this one, get a smaller step circle
      </p>
    ),
  },
  {
    title: 'Step 2',
    children: (
      <p>
        Steps with <OuiCode>titleSize</OuiCode> set to <OuiCode>xs</OuiCode>{' '}
        like this one, get a smaller step circle
      </p>
    ),
  },
];

export default () => (
  <div>
    <OuiSteps titleSize="xs" steps={firstSetOfSteps} />
  </div>
);
