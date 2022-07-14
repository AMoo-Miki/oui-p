import React from 'react';

import {
  OuiPage,
  OuiPageBody,
  OuiPageContent,
  OuiPageContentBody,
  OuiPageHeader,
  OuiPageSideBar,
  OuiTitle,
  OuiButton,
  OuiSpacer,
} from '../../../../src/components';

export default () => (
  <OuiPage>
    <OuiPageSideBar>SideBar nav</OuiPageSideBar>
    <OuiPageBody>
      <OuiPageHeader
        iconType="logoElastic"
        pageTitle="Page title"
        rightSideItems={[
          <OuiButton fill>Add something</OuiButton>,
          <OuiButton>Do something</OuiButton>,
        ]}
      />
      <OuiPageContent>
        <OuiTitle>
          <h2>Content title</h2>
        </OuiTitle>
        <OuiSpacer />
        <OuiPageContentBody>Content body</OuiPageContentBody>
      </OuiPageContent>
    </OuiPageBody>
  </OuiPage>
);
