import React from 'react';

import { OuiLoadingSpinner } from '../../../../src/components/loading';

export default () => (
  <div>
    <OuiLoadingSpinner size="s" />
    &nbsp;&nbsp;
    <OuiLoadingSpinner size="m" />
    &nbsp;&nbsp;
    <OuiLoadingSpinner size="l" />
    &nbsp;&nbsp;
    <OuiLoadingSpinner size="xl" />
  </div>
);
