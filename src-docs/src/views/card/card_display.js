import React from 'react';

import {
  OuiCard,
  OuiFlexGroup,
  OuiFlexItem,
  OuiIcon,
  OuiSpacer,
} from '../../../../src/components';

export default () => (
  <div>
    <OuiSpacer size="s" />
    <OuiFlexGroup gutterSize="l">
      <OuiFlexItem>
        <OuiCard
          layout="horizontal"
          icon={<OuiIcon size="xl" type="logoLogging" />}
          onClick={() => {}}
          title="Plain"
          display="plain"
          description="This one still has a solid background color."
        />
      </OuiFlexItem>
      <OuiFlexItem>
        <OuiCard
          icon={<OuiIcon size="xl" type="logoLogging" />}
          title="Subdued"
          display="subdued"
          description="This one has a subdued background color."
          onClick={() => {}}
        />
      </OuiFlexItem>
      <OuiFlexItem>
        <OuiCard
          layout="horizontal"
          icon={<OuiIcon size="xl" type="logoLogging" />}
          title="Transparent"
          display="transparent"
          description="This one doesn't have a background color anymore."
          betaBadgeLabel="Beta"
          betaBadgeTooltipContent="This module is not GA. Please help us by reporting any bugs."
          onClick={() => {}}
        />
      </OuiFlexItem>
    </OuiFlexGroup>
  </div>
);
