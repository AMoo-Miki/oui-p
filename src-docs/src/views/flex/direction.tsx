import React from 'react';

import { OuiFlexGroup, OuiFlexItem } from '../../../../src/components/flex';

export default () => (
  <OuiFlexGroup direction="column">
    <OuiFlexItem grow={false}>Content grid item</OuiFlexItem>
    <OuiFlexItem grow={false}>Another content grid item</OuiFlexItem>
    <OuiFlexItem grow={false}>Using the column direction</OuiFlexItem>
  </OuiFlexGroup>
);
