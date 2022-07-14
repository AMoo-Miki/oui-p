import React from 'react';

import {
  OuiButton,
  OuiButtonIcon,
  OuiFlexGroup,
  OuiFlexItem,
} from '../../../../src/components';

const colors = ['primary', 'text', 'accent', 'success', 'warning', 'danger'];

export default () => (
  <>
    {colors.map((color) => (
      <OuiFlexGroup
        key={color}
        responsive={false}
        gutterSize="s"
        alignItems="center">
        <OuiFlexItem grow={false}>
          <OuiButton color={color} size="s" iconType="calendar">
            Last 15 min
          </OuiButton>
        </OuiFlexItem>
        <OuiFlexItem grow={false}>
          <OuiButtonIcon
            color={color}
            display="base"
            size="s"
            iconType="boxesVertical"
            aria-label="More"
          />
        </OuiFlexItem>
      </OuiFlexGroup>
    ))}
  </>
);
