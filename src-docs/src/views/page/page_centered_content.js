import React from 'react';

import {
  OuiPage,
  OuiPageContent,
  OuiEmptyPrompt,
  OuiPageHeader,
  OuiPageSideBar,
  OuiPageBody,
} from '../../../../src/components';

export default ({ button = <></>, content, sideNav }) => (
  <OuiPage paddingSize="none">
    <OuiPageSideBar paddingSize="l" sticky>
      {sideNav}
    </OuiPageSideBar>

    <OuiPageBody panelled>
      <OuiPageHeader
        restrictWidth
        iconType="logoElastic"
        pageTitle="Page title"
        rightSideItems={[button]}
      />

      <OuiPageContent
        verticalPosition="center"
        horizontalPosition="center"
        paddingSize="none"
        color="subdued"
        hasShadow={false}>
        <OuiEmptyPrompt title={<span>No spice</span>} body={content} />
      </OuiPageContent>
    </OuiPageBody>
  </OuiPage>
);
