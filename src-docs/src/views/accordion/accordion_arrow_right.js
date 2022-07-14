import React from 'react';

import { OuiAccordion, OuiPanel } from '../../../../src/components';

export default () => (
  <OuiAccordion
    id="accordion10"
    arrowDisplay="right"
    buttonContent="This accordion has the arrow on the right">
    <OuiPanel color="subdued">
      Any content inside of <strong>OuiAccordion</strong> will appear here.
    </OuiPanel>
  </OuiAccordion>
);
