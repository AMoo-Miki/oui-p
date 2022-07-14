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

    <OuiKeyPadMenuItem
      label="Dashboard"
      href="#"
      betaBadgeLabel="Beta"
      betaBadgeTooltipContent="This module is not GA. Please help us by reporting any bugs.">
      <OuiIcon type="dashboardApp" size="l" />
    </OuiKeyPadMenuItem>

    <OuiKeyPadMenuItem
      label="Dashboard"
      href="#"
      betaBadgeLabel="External"
      betaBadgeTooltipContent="This module is an external app."
      betaBadgeIconType="popout">
      <OuiIcon type="dashboardApp" size="l" />
    </OuiKeyPadMenuItem>
  </OuiKeyPadMenu>
);
