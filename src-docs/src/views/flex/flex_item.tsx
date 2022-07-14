import React from 'react';
import { OuiButton } from '../../../../src/components/button';
import { OuiFlexGroup, OuiFlexItem } from '../../../../src/components/flex';

export default () => (
  <OuiFlexGroup>
    <OuiFlexItem>
      <OuiButton fill>Buttons will widen</OuiButton>
    </OuiFlexItem>
    <OuiFlexItem>
      <div>
        <OuiButton fill>Unless you wrap them</OuiButton>
      </div>
    </OuiFlexItem>
  </OuiFlexGroup>
);
