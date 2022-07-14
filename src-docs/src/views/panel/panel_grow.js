import React from 'react';

import {
  OuiPanel,
  OuiFlexGroup,
  OuiFlexItem,
  OuiText,
} from '../../../../src/components';

export default () => (
  <OuiFlexGroup gutterSize="l">
    <OuiFlexItem>
      <OuiPanel>
        <OuiText>
          <p>
            I am some panel content...
            <br /> ... <br /> ... <br />
            whose content is tall
          </p>
        </OuiText>
      </OuiPanel>
    </OuiFlexItem>
    <OuiFlexItem>
      <OuiPanel grow={true}>
        <OuiText>
          <p>I am some panel content... whose content will grow</p>
        </OuiText>
      </OuiPanel>
    </OuiFlexItem>
    <OuiFlexItem>
      <OuiPanel grow={false}>
        <OuiText>
          <p>I am some panel content... whose content did not grow</p>
        </OuiText>
      </OuiPanel>
    </OuiFlexItem>
  </OuiFlexGroup>
);
