import React from 'react';

import { OuiFlexGroup, OuiFlexItem } from '../../../../src/components/flex';

export default () => (
  <OuiFlexGroup wrap>
    <OuiFlexItem style={{ minWidth: 300 }}>Min-width 300px</OuiFlexItem>

    <OuiFlexItem style={{ minWidth: 300 }}>Min-width 300px</OuiFlexItem>

    <OuiFlexItem style={{ minWidth: 300 }}>Min-width 300px</OuiFlexItem>
  </OuiFlexGroup>
);
