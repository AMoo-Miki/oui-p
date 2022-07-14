import React from 'react';

import { OuiAccordion, OuiButton } from '../../../../src/components';

export default () => (
  <OuiAccordion
    id="accordionExtraWithLeftArrow"
    buttonContent="Click to open"
    extraAction={<OuiButton size="s">Extra action!</OuiButton>}
    paddingSize="l">
    <strong>Opened content.</strong>
  </OuiAccordion>
);
