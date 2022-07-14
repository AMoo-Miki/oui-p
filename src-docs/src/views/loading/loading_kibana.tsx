import React from 'react';

import { OuiLoadingLogo } from '../../../../src/components/loading';

export default () => (
  <div>
    <OuiLoadingLogo />
    &emsp;
    <OuiLoadingLogo logo="logoObservability" size="l" />
    &emsp;
    <OuiLoadingLogo logo="logoSecurity" size="xl" />
  </div>
);
