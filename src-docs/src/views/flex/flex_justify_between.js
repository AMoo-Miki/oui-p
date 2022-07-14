import React from 'react';

import { OuiFlexGroup, OuiFlexItem } from '../../../../src/components';

export default () => (
  <OuiFlexGroup justifyContent="spaceBetween">
    <OuiFlexItem grow={false}>One here on the left.</OuiFlexItem>
    <OuiFlexItem grow={false}>The other over here on the right.</OuiFlexItem>
  </OuiFlexGroup>
);
