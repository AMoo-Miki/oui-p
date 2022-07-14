import React from 'react';

import {
  OuiIcon,
  OuiKeyPadMenu,
  OuiKeyPadMenuItem,
} from '../../../../src/components';

export default () => (
  <OuiKeyPadMenu>
    <OuiKeyPadMenuItem label="Dashboard" onClick={() => {}}>
      <OuiIcon type="dashboardApp" size="l" />
    </OuiKeyPadMenuItem>
    <OuiKeyPadMenuItem label="Dashboard" isDisabled onClick={() => {}}>
      <OuiIcon type="dashboardApp" size="l" />
    </OuiKeyPadMenuItem>
  </OuiKeyPadMenu>
);
