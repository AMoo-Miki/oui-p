import React from 'react';

import { OuiStat, OuiFlexItem, OuiFlexGroup } from '../../../../src/components';

export default () => (
  <div>
    <OuiFlexGroup>
      <OuiFlexItem>
        <OuiStat title="10,000" description="Description underneath" reverse />
      </OuiFlexItem>
    </OuiFlexGroup>
  </div>
);
