import React from 'react';

import {
  OuiButtonEmpty,
  OuiFlexGroup,
  OuiFlexItem,
} from '../../../../src/components';

export default () => (
  <OuiFlexGroup gutterSize="s" alignItems="center">
    <OuiFlexItem grow={false}>
      <OuiButtonEmpty flush="left">Flush left</OuiButtonEmpty>
    </OuiFlexItem>

    <OuiFlexItem grow={false}>
      <OuiButtonEmpty flush="right">Flush right</OuiButtonEmpty>
    </OuiFlexItem>

    <OuiFlexItem grow={false}>
      <OuiButtonEmpty flush="both">Flush both</OuiButtonEmpty>
    </OuiFlexItem>
  </OuiFlexGroup>
);
