import React from 'react';

import { OuiFlexGrid, OuiFlexItem } from '../../../../src/components/flex';

export default () => (
  <div>
    <OuiFlexGrid columns={3}>
      <OuiFlexItem>
        <div>One</div>
      </OuiFlexItem>
      <OuiFlexItem>
        <div>Two</div>
      </OuiFlexItem>
      <OuiFlexItem>
        <div>Three</div>
      </OuiFlexItem>
      <OuiFlexItem>
        <div>Four</div>
      </OuiFlexItem>
      <OuiFlexItem>
        <div>Five</div>
      </OuiFlexItem>
      <OuiFlexItem>
        <div>Six</div>
      </OuiFlexItem>
      <OuiFlexItem>
        <div>Seven</div>
      </OuiFlexItem>
    </OuiFlexGrid>
  </div>
);
