import React from 'react';

import { OuiLoadingChart } from '../../../../src/components/loading';

export default () => (
  <div>
    <OuiLoadingChart size="m" />
    &nbsp;&nbsp;
    <OuiLoadingChart size="l" />
    &nbsp;&nbsp;
    <OuiLoadingChart size="xl" />
    <br />
    <br />
    <OuiLoadingChart size="m" mono />
    &nbsp;&nbsp;
    <OuiLoadingChart size="l" mono />
    &nbsp;&nbsp;
    <OuiLoadingChart size="xl" mono />
  </div>
);
