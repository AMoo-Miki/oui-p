import React from 'react';

import { OuiFlexGroup, OuiFlexItem } from '../../../../src/components/flex';
import { OuiSpacer } from '../../../../src/components/spacer';

export default () => (
  <OuiFlexGroup>
    <OuiFlexItem>Content grid item</OuiFlexItem>
    <OuiFlexItem>
      <p>Another content grid item</p>
      <OuiSpacer />
      <p>
        Note how both of these are the same width and height despite having
        different content?
      </p>
    </OuiFlexItem>
  </OuiFlexGroup>
);
