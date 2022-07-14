import React from 'react';

import {
  OuiBadge,
  OuiFlexGroup,
  OuiFlexItem,
} from '../../../../src/components';

export default () => (
  <OuiFlexGroup wrap responsive={false} gutterSize="xs">
    <OuiFlexItem grow={false}>
      <OuiBadge color="success">Healthy</OuiBadge>
    </OuiFlexItem>
    <OuiFlexItem grow={false}>
      <OuiBadge color="warning">Warning</OuiBadge>
    </OuiFlexItem>
    <OuiFlexItem grow={false}>
      <OuiBadge color="danger">Critical</OuiBadge>
    </OuiFlexItem>
    <OuiFlexItem grow={false}>
      <OuiBadge color="default">Unknown</OuiBadge>
    </OuiFlexItem>
  </OuiFlexGroup>
);
