import React from 'react';

import { OuiStat, OuiFlexItem, OuiFlexGroup } from '../../../../src/components';

export default () => (
  <div>
    <OuiFlexGroup>
      <OuiFlexItem>
        <OuiStat title="$ 1,000.00" description="Left align" textAlign="left" />
      </OuiFlexItem>
      <OuiFlexItem>
        <OuiStat
          title="99.9999"
          description="Center align"
          textAlign="center"
        />
      </OuiFlexItem>
      <OuiFlexItem>
        <OuiStat
          title="1,000.00 €"
          description="Right align"
          textAlign="right"
        />
      </OuiFlexItem>
    </OuiFlexGroup>
  </div>
);
