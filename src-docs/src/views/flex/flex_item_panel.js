import React from 'react';

import {
  OuiFlexItem,
  OuiFlexGroup,
  OuiPanel,
  OuiCode,
  OuiText,
} from '../../../../src/components';

export default () => (
  <OuiFlexGroup>
    <OuiFlexItem>
      <OuiText>
        <p>
          <OuiCode>FlexItem</OuiCode>
        </p>
        <p>A side nav might be in this one.</p>
        <p>And you would want the panel on the right to expand with it.</p>
      </OuiText>
    </OuiFlexItem>

    <OuiFlexItem>
      <OuiPanel>
        <strong>OuiPanel</strong>
      </OuiPanel>
    </OuiFlexItem>

    <OuiFlexItem>
      <OuiPanel grow={false}>
        Another <strong>OuiPanel</strong>, with{' '}
        <OuiCode>grow=&#123;false&#125;</OuiCode>.
      </OuiPanel>
    </OuiFlexItem>
  </OuiFlexGroup>
);
