import React from 'react';

import { OuiFlexGroup, OuiFlexItem } from '../../../../src/components/flex';

export default () => (
  <button>
    <OuiFlexGroup component="span">
      <OuiFlexItem component="span">
        These items are within a button
      </OuiFlexItem>

      <OuiFlexItem component="span">
        So they all specify component=&ldquo;span&rdquo;
      </OuiFlexItem>
    </OuiFlexGroup>
  </button>
);
