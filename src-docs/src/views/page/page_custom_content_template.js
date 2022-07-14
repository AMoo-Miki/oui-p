import React from 'react';

import {
  OuiPageTemplate,
  OuiButton,
  OuiFlexGrid,
  OuiFlexItem,
  OuiPanel,
} from '../../../../src/components';

export default ({ button = <></> }) => (
  <OuiPageTemplate
    restrictWidth={false}
    template="empty"
    pageHeader={{
      iconType: 'logoElastic',
      pageTitle: 'Page title',
      rightSideItems: [button, <OuiButton>Do something</OuiButton>],
    }}>
    <OuiFlexGrid columns={2}>
      <OuiFlexItem>
        <OuiPanel style={{ height: 200 }} />
      </OuiFlexItem>
      <OuiFlexItem>
        <OuiPanel style={{ height: 200 }} />
      </OuiFlexItem>
      <OuiFlexItem>
        <OuiPanel style={{ height: 200 }} />
      </OuiFlexItem>
      <OuiFlexItem>
        <OuiPanel style={{ height: 200 }} />
      </OuiFlexItem>
    </OuiFlexGrid>
  </OuiPageTemplate>
);
