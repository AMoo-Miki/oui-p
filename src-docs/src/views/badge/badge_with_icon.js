import React from 'react';

import { OuiBadge } from '../../../../src/components';

export default () => (
  <div>
    <OuiBadge color="hollow" iconType="cross" iconSide="right">
      Hollow
    </OuiBadge>

    <OuiBadge iconType="check">Default</OuiBadge>

    <OuiBadge iconType="lensApp" color="primary">
      Primary with an app icon
    </OuiBadge>

    <OuiBadge iconType="returnKey" />
  </div>
);
