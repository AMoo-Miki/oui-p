import React from 'react';

import {
  OuiIcon,
  OuiKeyPadMenu,
  OuiKeyPadMenuItem,
} from '../../../../src/components';

export default () => (
  <OuiKeyPadMenu>
    <OuiKeyPadMenuItem label="Dashboard" href="#">
      <OuiIcon type="dashboardApp" size="l" />
    </OuiKeyPadMenuItem>

    <OuiKeyPadMenuItem label="Dashboard" href="#">
      <OuiIcon type="dashboardApp" size="l" />
    </OuiKeyPadMenuItem>

    <OuiKeyPadMenuItem label="Dashboard" href="#">
      <OuiIcon type="dashboardApp" size="l" />
    </OuiKeyPadMenuItem>

    <OuiKeyPadMenuItem isDisabled label="Dashboard" href="#">
      <OuiIcon type="dashboardApp" size="l" />
    </OuiKeyPadMenuItem>
  </OuiKeyPadMenu>
);
