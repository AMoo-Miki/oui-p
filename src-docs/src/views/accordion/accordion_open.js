import React from 'react';

import { OuiAccordion, OuiPanel } from '../../../../src/components';
import { htmlIdGenerator } from '../../../../src/services';

export default () => (
  <div>
    <OuiAccordion
      id={htmlIdGenerator()()}
      buttonContent="I am opened by default. Click me to toggle close / open"
      initialIsOpen={true}>
      <OuiPanel color="subdued">
        Any content inside of <strong>OuiAccordion</strong> will appear here.
      </OuiPanel>
    </OuiAccordion>
  </div>
);
