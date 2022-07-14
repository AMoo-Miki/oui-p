import React from 'react';

import { OuiFlexGroup, OuiFlexItem } from '../../../../src/components';

export default () => (
  <OuiFlexGroup alignItems="center">
    <OuiFlexItem grow={false}>
      <p>I</p>
      <p>am</p>
      <p>a</p>
      <p>tall</p>
      <p>item</p>
    </OuiFlexItem>
    <OuiFlexItem>I am vertically centered!</OuiFlexItem>
  </OuiFlexGroup>
);
