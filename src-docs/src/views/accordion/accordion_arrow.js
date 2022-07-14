import React from 'react';

import { OuiAccordion, OuiPanel } from '../../../../src/components';

export default () => (
  <OuiAccordion
    id="accordion11"
    arrowDisplay="none"
    buttonContent="This one has it removed entirely">
    <OuiPanel color="subdued">
      Any content inside of <strong>OuiAccordion</strong> will appear here.
    </OuiPanel>
  </OuiAccordion>
);
