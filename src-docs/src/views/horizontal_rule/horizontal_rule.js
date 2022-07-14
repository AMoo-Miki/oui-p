import React from 'react';

import { OuiHorizontalRule, OuiCode } from '../../../../src/components';

export default () => (
  <>
    <OuiCode>quarter</OuiCode>
    <OuiHorizontalRule size="quarter" />
    <OuiCode>half</OuiCode>
    <OuiHorizontalRule size="half" />
    <OuiCode>full (default)</OuiCode>
    <OuiHorizontalRule />
  </>
);
