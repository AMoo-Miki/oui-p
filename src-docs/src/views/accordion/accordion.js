import React from 'react';

import { OuiAccordion, OuiPanel } from '../../../../src/components';

export default () => (
  <div>
    <OuiAccordion id="accordion1" buttonContent="Click me to toggle">
      <OuiPanel color="subdued">
        Any content inside of <strong>OuiAccordion</strong> will appear here.
      </OuiPanel>
    </OuiAccordion>
  </div>
);
