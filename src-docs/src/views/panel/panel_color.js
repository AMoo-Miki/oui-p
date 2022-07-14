import React from 'react';

import { OuiPanel, OuiSpacer } from '../../../../src/components';

export default () => (
  <div>
    <OuiPanel color="subdued" borderRadius="none" hasShadow={false}>
      <p>I am a simple shaded box</p>
    </OuiPanel>

    <OuiSpacer />

    <OuiPanel color="transparent" hasBorder={false}>
      <p>I am a transparent box simply for padding</p>
    </OuiPanel>
  </div>
);
