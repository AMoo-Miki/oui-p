import React from 'react';

import { OuiProgress, OuiSpacer } from '../../../../src/components';

export default () => (
  <div>
    <OuiProgress value={20} max={100} size="xs" />
    <OuiSpacer size="l" />

    <OuiProgress value={40} max={100} size="xs" />
    <OuiSpacer size="l" />

    <OuiProgress value={60} max={100} size="s" />
    <OuiSpacer size="l" />

    <OuiProgress value={80} max={100} size="m" />
    <OuiSpacer size="l" />

    <OuiProgress value={90} max={100} size="l" />
  </div>
);
