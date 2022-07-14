import React from 'react';

import { OuiFlexGroup, OuiFlexItem } from '../../../../src/components';

export default () => (
  <OuiFlexGroup justifyContent="spaceEvenly">
    <OuiFlexItem grow={false}>Spaced evenly between this one.</OuiFlexItem>
    <OuiFlexItem grow={false}>And this one here on the right.</OuiFlexItem>
  </OuiFlexGroup>
);
