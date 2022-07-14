import React from 'react';

import { OuiHorizontalRule, OuiCode } from '../../../../src/components';

export default () => (
  <>
    <OuiCode>none</OuiCode>
    <div>
      <OuiHorizontalRule margin="none" />
    </div>
    <OuiCode>xs</OuiCode>
    <div>
      <OuiHorizontalRule margin="xs" />
    </div>
    <OuiCode>s</OuiCode>
    <div>
      <OuiHorizontalRule margin="s" />
    </div>
    <OuiCode>m</OuiCode>
    <div>
      <OuiHorizontalRule margin="m" />
    </div>
    <OuiCode>l (default)</OuiCode>
    <div>
      <OuiHorizontalRule margin="l" />
    </div>
    <OuiCode>xl</OuiCode>
    <div>
      <OuiHorizontalRule margin="xl" />
    </div>
    <OuiCode>xxl</OuiCode>
    <div>
      <OuiHorizontalRule margin="xxl" />
    </div>
  </>
);
