import React from 'react';

import { OuiFlexGroup, OuiFlexItem } from '../../../../src/components/flex';

export default () => (
  <OuiFlexGroup>
    <OuiFlexItem grow={false}>This item won&rsquo;t grow</OuiFlexItem>
    <OuiFlexItem>But this item will.</OuiFlexItem>
  </OuiFlexGroup>
);
