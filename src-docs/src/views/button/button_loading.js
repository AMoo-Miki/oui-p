import React from 'react';

import {
  OuiButton,
  OuiFlexGroup,
  OuiFlexItem,
} from '../../../../src/components';

export default () => (
  <OuiFlexGroup gutterSize="s" alignItems="center" wrap>
    <OuiFlexItem grow={false}>
      <OuiButton isLoading={true}>Loading&hellip;</OuiButton>
    </OuiFlexItem>

    <OuiFlexItem grow={false}>
      <OuiButton fill isLoading={true}>
        Loading&hellip;
      </OuiButton>
    </OuiFlexItem>

    <OuiFlexItem grow={false}>
      <OuiButton fill isLoading={true} iconType="check" iconSide="right">
        Loading&hellip;
      </OuiButton>
    </OuiFlexItem>
  </OuiFlexGroup>
);
