import React from 'react';

import {
  OuiPage,
  OuiPageHeader,
  OuiButton,
  OuiPageContentBody,
  OuiPageBody,
  OuiFlexGrid,
  OuiFlexItem,
  OuiPanel,
} from '../../../../src/components';

export default ({ button = <></> }) => (
  <OuiPage paddingSize="l">
    <OuiPageBody>
      <OuiPageHeader
        iconType="logoElastic"
        pageTitle="Page title"
        rightSideItems={[button, <OuiButton>Do something</OuiButton>]}
        bottomBorder
      />
      <OuiPageContentBody>
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
      </OuiPageContentBody>
    </OuiPageBody>
  </OuiPage>
);
